import { Injectable } from '@nestjs/common';
import { CreateInsuranceObjectDto } from './dto/create-insurance-object.dto';
import { UpdateInsuranceObjectDto } from './dto/update-insurance-object.dto';

@Injectable()
export class InsuranceObjectsService {
  create(createInsuranceObjectDto: CreateInsuranceObjectDto) {
    return 'This action adds a new insuranceObject';
  }

  findAll() {
    return `This action returns all insuranceObjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceObject`;
  }

  update(id: number, updateInsuranceObjectDto: UpdateInsuranceObjectDto) {
    return `This action updates a #${id} insuranceObject`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceObject`;
  }
}
