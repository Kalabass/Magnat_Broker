import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from 'src/employees/employees.module';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { RedisModule } from 'src/redis/redis.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([Employee]),
		RedisModule,
		EmployeesModule,
		PassportModule,
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		EmployeesService,
		JwtService,
		LocalStrategy,
		JwtStrategy,
	],
})
export class AuthModule {}
