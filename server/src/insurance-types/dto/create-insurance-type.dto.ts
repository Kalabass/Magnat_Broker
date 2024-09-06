import { IsNotEmpty } from 'class-validator';
import { InsuranceType } from '../entities/insurance-type.entity';

export class CreateInsuranceTypeDto extends InsuranceType {
  @IsNotEmpty()
  name: string;
}
