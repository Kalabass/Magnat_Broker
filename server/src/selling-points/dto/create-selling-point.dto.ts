import { OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { SellingPoint } from '../entities/selling-point.entity';

export class CreateSellingPointDto extends OmitType(SellingPoint, ['id']) {
  @IsNotEmpty()
  name: string;
}
