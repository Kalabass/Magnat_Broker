import { OmitType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { InsuranceObject } from '../entities/insurance-object.entity';

export class CreateInsuranceObjectDto extends OmitType(InsuranceObject, [
  'id',
]) {
  @IsNotEmpty()
  sum: number;

  @IsNotEmpty()
  premium: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  horsePowers: number;

  @IsBoolean()
  isCredited: boolean;
}
