import { OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Bank } from '../entities/bank.entity';

export class CreateBankDto extends OmitType(Bank, ['id']) {
  @IsNotEmpty()
  name: string;
}
