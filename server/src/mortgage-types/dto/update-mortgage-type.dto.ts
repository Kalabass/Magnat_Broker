import { PartialType } from '@nestjs/mapped-types';
import { CreateMortgageTypeDto } from './create-mortgage-type.dto';

export class UpdateMortgageTypeDto extends PartialType(CreateMortgageTypeDto) {}
