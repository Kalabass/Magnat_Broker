import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CustomUnauthorizedException } from 'src/exceptions/custom-unauthorized.exception';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: 'login' });
	}

	async validate(login: string, password: string): Promise<any> {
		const employee = await this.authService.validateUser(login, password);

		if (!employee.user) {
			throw new CustomUnauthorizedException(
				employee.message,
				employee.errorCode
			);
		}
		return employee.user;
	}
}
