import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { CreateInsuranceObjectDto } from 'src/insurance-objects/dto/create-insurance-object.dto';
import { CreateBlankDto } from './create-blank.dto'; // DTO для бланка

export class CreateContractDto {
  @ValidateNested()
  @Type(() => CreateClientDto)
  client: CreateClientDto;

  @ValidateNested()
  @Type(() => CreateInsuranceObjectDto)
  insuranceObject: CreateInsuranceObjectDto;

  @ValidateNested()
  @Type(() => CreateBlankDto)
  blank: CreateBlankDto;
}
