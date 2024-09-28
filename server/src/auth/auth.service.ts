import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
@Injectable()
export class AuthService {
	constructor(
		private employeeService: EmployeesService,
		private jwtService: JwtService
	) {}

	async validateUser(login: string, password: string) {
		const user = await this.employeeService.findOneByLogin(login);

		if (!user) {
			return null;
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return null;
		}

		return user;
	}

	async login(employee: Employee) {
		const payload = { username: employee.name, sub: employee.id };
		return {
			token: this.jwtService.sign(payload),
		};
	}
}
