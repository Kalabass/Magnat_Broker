import { PartialType } from '@nestjs/mapped-types';
import { CreateSellingPointDto } from './create-selling-point.dto';

export class UpdateSellingPointDto extends PartialType(CreateSellingPointDto) {}
