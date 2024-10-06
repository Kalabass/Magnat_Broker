import { Injectable } from '@nestjs/common';
import { CreateMortgageTypeDto } from './dto/create-mortgage-type.dto';
import { UpdateMortgageTypeDto } from './dto/update-mortgage-type.dto';

@Injectable()
export class MortgageTypesService {
  create(createMortgageTypeDto: CreateMortgageTypeDto) {
    return 'This action adds a new mortgageType';
  }

  findAll() {
    return `This action returns all mortgageTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mortgageType`;
  }

  update(id: number, updateMortgageTypeDto: UpdateMortgageTypeDto) {
    return `This action updates a #${id} mortgageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} mortgageType`;
  }
}
