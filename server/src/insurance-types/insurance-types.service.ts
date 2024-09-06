import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findInsuranceTypeById(id: number): Promise<InsuranceType> {
    const insuranceType = await this.insuranceTypeRepository.findOne({
      where: { id },
    });
    if (!insuranceType) {
      throw new NotFoundException('Insurance type not found');
    }
    return insuranceType;
  }

  async create(createInsuranceTypeDto: CreateInsuranceTypeDto) {
    try {
      return await this.insuranceTypeRepository.save(createInsuranceTypeDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const insuranceTypes = await this.insuranceTypeRepository.find();
      return insuranceTypes;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const types = await this.insuranceTypeRepository.find({
        select: ['id', 'name'],
      });
      return types;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findInsuranceTypeById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateInsuranceTypeDto: UpdateInsuranceTypeDto) {
    try {
      const insuranceType = await this.findInsuranceTypeById(id);
      return await this.insuranceTypeRepository.update(
        insuranceType.id,
        updateInsuranceTypeDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const insuranceType = await this.findInsuranceTypeById(id);
      return await this.insuranceTypeRepository.delete(insuranceType.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedData(): Promise<void> {
    const insuranceTypes: Partial<InsuranceType>[] = [];
    const insuranceTypesData = [
      { name: 'ОСАГО' },
      { name: 'КАСКО' },
      { name: 'ИПОТЕКА' },
    ];

    for (const type of insuranceTypesData) {
      const insuranceType = new InsuranceType();
      insuranceType.name = type.name;
      insuranceTypes.push(
        await this.insuranceTypeRepository.save(insuranceType),
      );
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const insuranceTypes: Partial<InsuranceType>[] = [];

    for (let i = 0; i < SeedOptions.INSURANCE_TYPE.seedCount; i++) {
      insuranceTypes.push({
        name: faker.lorem.word(),
        comment: faker.lorem.sentence(),
      });
    }

    await this.insuranceTypeRepository.save(insuranceTypes);
  }
}
