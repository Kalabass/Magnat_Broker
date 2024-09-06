import { IsNotEmpty } from 'class-validator';
import { InsuranceCompany } from '../entities/insurance-company.entity';

export class CreateInsuranceCompanyDto extends InsuranceCompany {
  @IsNotEmpty()
  name: string;
}
