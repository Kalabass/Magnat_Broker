import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { RedisService } from 'src/redis/redis.service'; // Импортируйте ваш RedisService

@Injectable()
export class AuthService {
	constructor(
		private employeeService: EmployeesService,
		private jwtService: JwtService,
		private configService: ConfigService,
		private redisService: RedisService
	) {}

	async validateUser(login: string, password: string) {
		const user = await this.employeeService.findOneByLogin(login);

		if (!user) {
			return {
				user: null,
				message: 'Неверный логин',
				errorCode: 'INVALID_LOGIN',
			};
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return {
				user: null,
				message: 'Неверный пароль',
				errorCode: 'INVALID_PASSWORD',
			};
		}

		return { user: user };
	}

	async login(employee: Employee, res: Response) {
		console.log(employee);
		const payload = { username: employee.login, id: employee.id };

		const { newAccessToken, newRefreshToken } =
			await this.generateTokens(payload);

		// Сохраняем refresh_token в Redis
		await this.redisService.set(
			`refresh_token:${employee.id}`,
			newRefreshToken,
			60 * 60 * 24 * 7 // 7 дней
		);

		// Устанавливаем refresh_token в куки
		res.cookie('refresh_token', newRefreshToken, {
			httpOnly: true,
			path: '/auth',
		});

		// Возвращаем access_token в ответе
		return res.json({
			access_token: newAccessToken,
		});
	}

	async refreshTokens(refreshToken: string, res) {
		if (!refreshToken) {
			throw new UnauthorizedException('Refresh token not provided');
		}

		let payload;
		try {
			payload = this.jwtService.verify(refreshToken, {
				secret: this.configService.get('JWT_REFRESH_SECRET'),
			});
		} catch (error) {
			console.error('Error verifying refresh token:', error.message);
			throw new UnauthorizedException('Invalid Refresh Token');
		}

		if (!payload || !payload.id) {
			throw new UnauthorizedException('Invalid payload');
		}

		const storedRefreshToken = await this.redisService.get(
			`refresh_token:${payload.id}`
		);

		if (!storedRefreshToken || storedRefreshToken !== refreshToken) {
			throw new UnauthorizedException('Invalid Refresh Token');
		}

		const { newAccessToken, newRefreshToken } =
			await this.generateTokens(payload);

		await this.redisService.set(
			`refresh_token:${payload.id}`,
			newRefreshToken,
			60 * 60 * 24 * 7
		);

		res.cookie('refresh_token', newRefreshToken, {
			httpOnly: true,
			path: '/auth',
		});

		// Возвращаем access_token в ответе
		return res.json({
			access_token: newAccessToken,
		});
	}

	private async generateTokens(payload: any) {
		// Убираем exp из payload, если оно существует
		const { exp, ...restPayload } = payload;

		// Добавляем время создания токена (iat)
		const newPayload = {
			...restPayload,
			iat: Math.floor(Date.now() / 1000), // Текущее время в секундах
		};

		const newAccessToken = this.jwtService.sign(newPayload, {
			secret: this.configService.get('JWT_ACCESS_SECRET'),
			expiresIn: '1m', // Указываем время жизни access token
		});

		const newRefreshToken = this.jwtService.sign(newPayload, {
			secret: this.configService.get('JWT_REFRESH_SECRET'),
			expiresIn: '7d', // Указываем время жизни refresh token
		});

		return {
			newAccessToken,
			newRefreshToken,
		};
	}
}
