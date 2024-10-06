import { PartialType } from '@nestjs/mapped-types';
import { CreateInsuranceObjectDto } from './create-insurance-object.dto';

export class UpdateInsuranceObjectDto extends PartialType(CreateInsuranceObjectDto) {}
