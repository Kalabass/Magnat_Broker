import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateInsuranceObjectTypeDto } from './dto/create-insurance-object-type.dto';
import { UpdateInsuranceObjectTypeDto } from './dto/update-insurance-object-type.dto';
import { InsuranceObjectType } from './entities/insurance-object-type.entity';

@Injectable()
export class InsuranceObjectTypesService {
  constructor(
    @InjectRepository(InsuranceObjectType)
    private readonly insuranceObjectTypeRepository: Repository<InsuranceObjectType>,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findInsuranceObjectTypeById(
    id: number,
  ): Promise<InsuranceObjectType> {
    try {
      const insuranceObjectType =
        await this.insuranceObjectTypeRepository.findOne({ where: { id } });
      if (!insuranceObjectType) {
        throw new NotFoundException('InsuranceObjectType not found');
      }
      return insuranceObjectType;
    } catch (error) {
      this.handleError(error);
    }
  }

  async create(createInsuranceObjectTypeDto: CreateInsuranceObjectTypeDto) {
    try {
      return await this.insuranceObjectTypeRepository.save(
        createInsuranceObjectTypeDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      return await this.insuranceObjectTypeRepository.find();
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const insuranceObjectTypes =
        await this.insuranceObjectTypeRepository.find({
          select: ['id', 'name'],
        });
      return insuranceObjectTypes;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findInsuranceObjectTypeById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(
    id: number,
    updateInsuranceObjectTypeDto: UpdateInsuranceObjectTypeDto,
  ) {
    try {
      const insuranceObjectType = await this.findInsuranceObjectTypeById(id);
      return await this.insuranceObjectTypeRepository.update(
        insuranceObjectType.id,
        updateInsuranceObjectTypeDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const insuranceObjectType = await this.findInsuranceObjectTypeById(id);
      return await this.insuranceObjectTypeRepository.delete(
        insuranceObjectType.id,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const insuranceObjectTypes: Partial<InsuranceObjectType>[] = [];

    for (let i = 0; i < SeedOptions.INSURANCE_OBJECT_TYPE.seedCount; i++) {
      insuranceObjectTypes.push({
        name: faker.company.name(),
      });
    }

    await this.insuranceObjectTypeRepository.save(insuranceObjectTypes);
  }
}
