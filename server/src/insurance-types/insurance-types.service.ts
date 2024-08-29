import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';
import { UpdateInsuranceTypeDto } from './dto/update-insurance-type.dto';
import { InsuranceType } from './entities/insurance-type.entity';

@Injectable()
export class InsuranceTypesService {
  constructor(
    @InjectRepository(InsuranceType)
    private readonly insuranceTypeRepository: Repository<InsuranceType>,
  ) {}
  create(createInsuranceTypeDto: CreateInsuranceTypeDto) {
    return 'This action adds a new insuranceType';
  }

  async findAll() {
    try {
      const insuranceTypes = await this.insuranceTypeRepository.find();
      return insuranceTypes;
    } catch (error) {
      throw new Error('Failed to fetch insurance types: ' + error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceType`;
  }

  update(id: number, updateInsuranceTypeDto: UpdateInsuranceTypeDto) {
    return `This action updates a #${id} insuranceType`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceType`;
  }

  async seedData(): Promise<void> {
    const insuranceTypes: Partial<InsuranceType>[] = [];
    const insuranceTypesData = [
      { name: 'ОСАГО' },
      { name: 'КАСКО' },
      { name: 'ИПОТЕКА' },
    ];
    insuranceTypesData.forEach(async (type) => {
      console.log(type);
      const insuranceType = new InsuranceType();
      insuranceType.name = type.name;
      insuranceTypes.push(
        await this.insuranceTypeRepository.save(insuranceType),
      );
    });
  }
  async seedDataWithFaker(): Promise<void> {
    const insuranceTypes: Partial<InsuranceType>[] = [];

    for (let i = 0; i < SeedOptions.INSURANCE_TYPE.seedCount; i++) {
      const insuranceType = new InsuranceType();
      insuranceType.name = faker.lorem.word();
      insuranceType.comment = faker.lorem.sentence();
      insuranceTypes.push(
        await this.insuranceTypeRepository.save(insuranceType),
      );
    }
  }
}
