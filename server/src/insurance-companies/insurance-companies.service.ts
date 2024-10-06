import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateInsuranceCompanyDto } from './dto/create-insurance-company.dto';
import { UpdateInsuranceCompanyDto } from './dto/update-insurance-company.dto';
import { InsuranceCompany } from './entities/insurance-company.entity';

@Injectable()
export class InsuranceCompaniesService {
  constructor(
    @InjectRepository(InsuranceCompany)
    private readonly insuranceCompanyRepository: Repository<InsuranceCompany>,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findInsuranceCompanyById(
    id: number,
  ): Promise<InsuranceCompany> {
    const insuranceCompany = await this.insuranceCompanyRepository.findOne({
      where: { id },
    });
    if (!insuranceCompany) {
      throw new NotFoundException('Insurance company not found');
    }
    return insuranceCompany;
  }

  async create(createInsuranceCompanyDto: CreateInsuranceCompanyDto) {
    try {
      return await this.insuranceCompanyRepository.save(
        createInsuranceCompanyDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const insuranceCompanies = await this.insuranceCompanyRepository.find();
      return insuranceCompanies;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const companies = await this.insuranceCompanyRepository.find({
        select: ['id', 'name'],
      });
      return companies;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findInsuranceCompanyById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(
    id: number,
    updateInsuranceCompanyDto: UpdateInsuranceCompanyDto,
  ) {
    try {
      const insuranceCompany = await this.findInsuranceCompanyById(id);
      return await this.insuranceCompanyRepository.update(
        insuranceCompany.id,
        updateInsuranceCompanyDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const insuranceCompany = await this.findInsuranceCompanyById(id);
      return await this.insuranceCompanyRepository.delete(insuranceCompany.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const insuranceCompanies: Partial<InsuranceCompany>[] = [];

    for (let i = 0; i < SeedOptions.INSURANCE_COMPANY.seedCount; i++) {
      insuranceCompanies.push({
        name: faker.company.name(),
        comment: faker.lorem.sentence(),
      });
    }

    await this.insuranceCompanyRepository.save(insuranceCompanies);
  }
}
