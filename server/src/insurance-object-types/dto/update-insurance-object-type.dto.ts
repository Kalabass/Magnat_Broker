import { PartialType } from '@nestjs/mapped-types';
import { CreateInsuranceObjectTypeDto } from './create-insurance-object-type.dto';

export class UpdateInsuranceObjectTypeDto extends PartialType(CreateInsuranceObjectTypeDto) {}
