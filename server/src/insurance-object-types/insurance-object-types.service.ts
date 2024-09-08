import { Injectable } from '@nestjs/common';
import { CreateInsuranceObjectTypeDto } from './dto/create-insurance-object-type.dto';
import { UpdateInsuranceObjectTypeDto } from './dto/update-insurance-object-type.dto';

@Injectable()
export class InsuranceObjectTypesService {
  create(createInsuranceObjectTypeDto: CreateInsuranceObjectTypeDto) {
    return 'This action adds a new insuranceObjectType';
  }

  findAll() {
    return `This action returns all insuranceObjectTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceObjectType`;
  }

  update(id: number, updateInsuranceObjectTypeDto: UpdateInsuranceObjectTypeDto) {
    return `This action updates a #${id} insuranceObjectType`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceObjectType`;
  }
}
