import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { InsuranceObject } from '../entities/insurance-object.entity';

export class CreateInsuranceObjectDto extends PartialType(InsuranceObject) {
	@IsNotEmpty()
	name: string;

	@IsNumber()
	horsePowers: number;
}
