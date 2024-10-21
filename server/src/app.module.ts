import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BanksModule } from './banks/banks.module';
import { BlankSeriesModule } from './blank-series/blank-series.module';
import { BlanksModule } from './blanks/blanks.module';
import { ClientsModule } from './clients/clients.module';
import { EmployeesModule } from './employees/employees.module';
import { InsuranceCompaniesModule } from './insurance-companies/insurance-companies.module';
import { InsuranceObjectTypesModule } from './insurance-object-types/insurance-object-types.module';
import { InsuranceObjectsModule } from './insurance-objects/insurance-objects.module';
import { InsuranceTypesModule } from './insurance-types/insurance-types.module';
import { MortgageTypesModule } from './mortgage-types/mortgage-types.module';
import { PaymentTypesModule } from './payment-types/payment-types.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { RedisModule } from './redis/redis.module';
import { SellingPointsModule } from './selling-points/selling-points.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],

			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('TYPEORM_HOST'),
				port: configService.get('TYPEORM_PORT'),
				username: configService.get('TYPEORM_USERNAME'),
				password: configService.get('TYPEORM_PASSWORD'),
				database: configService.get('TYPEORM_DATABASE'),
				synchronize: true,
				logging: false,
				entities: [__dirname + '/**/*.entity{.js, .ts}'],
				migrations: [__dirname + '/migrations/*{.js, .ts}'],
				subscribers: [],
				parseInt8: true,
			}),
			inject: [ConfigService],
		}),
		BlanksModule,
		ClientsModule,
		InsuranceCompaniesModule,
		BanksModule,
		SellingPointsModule,
		InsuranceTypesModule,
		ReceiptsModule,
		EmployeesModule,

		BlankSeriesModule,
		MortgageTypesModule,
		InsuranceObjectTypesModule,
		InsuranceObjectsModule,
		AuthModule,
		RedisModule,
		PaymentTypesModule,
	],
})
export class AppModule {}
