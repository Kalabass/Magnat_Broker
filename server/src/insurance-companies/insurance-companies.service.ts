import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
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

  create(createInsuranceCompanyDto: CreateInsuranceCompanyDto) {
    return 'This action adds a new insuranceCompany';
  }

  async findAll() {
    try {
      const insuranceCompanies = await this.insuranceCompanyRepository.find();
      return insuranceCompanies;
    } catch (error) {
      throw new Error('Failed to fetch insurance companies: ' + error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceCompany`;
  }

  update(id: number, updateInsuranceCompanyDto: UpdateInsuranceCompanyDto) {
    return `This action updates a #${id} insuranceCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceCompany`;
  }

  async seedDataWithFaker(): Promise<void> {
    const insuranceCompanies: Partial<InsuranceCompany>[] = [];
    for (let i = 0; i < SeedOptions.INSURANCE_COMPANY.seedCount; i++) {
      const insuranceCompany = new InsuranceCompany();
      insuranceCompany.name = faker.company.name();
      insuranceCompany.comment = faker.lorem.sentence();
      insuranceCompanies.push(
        await this.insuranceCompanyRepository.save(insuranceCompany),
      );
    }
  }
}
