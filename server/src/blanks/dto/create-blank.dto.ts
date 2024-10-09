import {
	IsBoolean,
	IsDate,
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';
import { Blank } from '../entities/blank.entity';

export class CreateBlankDto extends Blank {
	@IsDate()
	@IsNotEmpty()
	blankConclusionDate: Date;
	@IsDate()
	@IsNotEmpty()
	blankActiveDateStart: Date;
	@IsDate()
	@IsNotEmpty()
	blankActiveDateEnd: Date;
	@IsDate()
	@IsNotEmpty()
	blankUseDateStart: Date;
	@IsDate()
	@IsNotEmpty()
	blankUseDateEnd: Date;

	@IsNotEmpty()
	@IsString()
	blankNumber: string;
	@IsEmail()
	@IsString()
	blankEmail: string;
	@IsNotEmpty()
	@IsNumber()
	blankPremium: number;
	@IsNotEmpty()
	@IsNumber()
	blankSum: number;

	@IsNotEmpty()
	@IsNumber()
	blankSeriesId: number;
	@IsNotEmpty()
	@IsNumber()
	blankEmployeeId: number;
	@IsNotEmpty()
	@IsNumber()
	blankInsuranceCompanyId: number;
	@IsNotEmpty()
	@IsNumber()
	blankInsuranceTypeId: number;
	@IsNotEmpty()
	@IsNumber()
	blankMortgageTypeId: number;
	@IsNotEmpty()
	@IsNumber()
	blankSellingPointId: number;
	@IsNotEmpty()
	@IsNumber()
	blankBankId: number;
	@IsNotEmpty()
	@IsNumber()
	blankPaymentTypeId: number;

	@IsBoolean()
	@IsNotEmpty()
	clientIsLegal: boolean;
	@IsDate()
	@IsNotEmpty()
	clientBirthDate: Date;
	@IsNotEmpty()
	@IsString()
	clientName: string;
	@IsNumber()
	@MaxLength(12)
	@MinLength(10)
	clientINN: number;
	@IsNumber()
	@MaxLength(6)
	@MinLength(6)
	clientPassportNumber: number;
	@IsNumber()
	@MaxLength(4)
	@MinLength(4)
	clientPassportSeries: number;

	@IsString()
	clientPhoneNumber: string;
	@IsString()
	clientAddress: string;

	@IsNumber()
	insuranceObjectHorsePowers: number;
	@IsString()
	insuranceObjectName: string;
}
