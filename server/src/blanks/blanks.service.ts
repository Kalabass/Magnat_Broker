import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BanksService } from 'src/banks/banks.service';
import { ClientsService } from 'src/clients/clients.service';
import { SeedOptions } from 'src/constants/seedOptions';
import { EmployeesService } from 'src/employees/employees.service';
import { InsuranceCompaniesService } from 'src/insurance-companies/insurance-companies.service';
import { InsuranceTypesService } from 'src/insurance-types/insurance-types.service';
import { SellingPointsService } from 'src/selling-points/selling-points.service';

import { Repository } from 'typeorm';
import { CreateBlankDto } from './dto/create-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';
import { Blank } from './entities/blank.entity';

@Injectable()
export class BlanksService {
  constructor(
    @InjectRepository(Blank)
    private readonly blankRepository: Repository<Blank>,
    private readonly bankService: BanksService,
    private readonly insuranceCompanyService: InsuranceCompaniesService,
    private readonly insuranceTypeService: InsuranceTypesService,
    private readonly clientsService: ClientsService,
    private readonly employeesService: EmployeesService,
    private readonly sellingPointService: SellingPointsService,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findBlankById(id: number): Promise<Blank> {
    const blank = await this.blankRepository.findOne({ where: { id } });
    if (!blank) {
      throw new NotFoundException('Blank not found');
    }
    return blank;
  }

  async create(createBlankDto: CreateBlankDto) {
    try {
      return await this.blankRepository.save(createBlankDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const blanks = await this.blankRepository.find({
        relations: {
          client: true,
          employee: true,
          sellingPoint: true,
          bank: true,
          insuranceCompany: true,
          insuranceType: true,
        },
      });
      return blanks;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findBlankById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateBlankDto: UpdateBlankDto) {
    try {
      const blank = await this.findBlankById(id);
      return await this.blankRepository.update(blank.id, updateBlankDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const blank = await this.findBlankById(id);
      return await this.blankRepository.delete(blank.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    await this.bankService.seedDataWithFaker();
    await this.insuranceCompanyService.seedDataWithFaker();
    await this.insuranceTypeService.seedDataWithFaker();
    await this.clientsService.seedDataWithFaker();
    await this.employeesService.seedDataWithFaker();
    await this.sellingPointService.seedDataWithFaker();

    const blanks: Partial<Blank>[] = [];

    const banks = await this.bankService.findAll();
    const insuranceCompanies = await this.insuranceCompanyService.findAll();
    const insuranceTypes = await this.insuranceTypeService.findAll();
    const clients = await this.clientsService.findAll();
    const employees = await this.employeesService.findAll();
    const sellingPoints = await this.sellingPointService.findAll();

    enum BLANK_SERIES {
      AAB = 'AAB',
      XXX = 'XXX',
      TTT = 'TTT',
    }

    for (let i = 0; i < SeedOptions.BLANK.seedCount; i++) {
      const blank = new Blank();
      blank.series = faker.helpers.enumValue(BLANK_SERIES);
      blank.number = faker.number
        .int({ min: 100000000, max: 999999999 })
        .toString();
      blank.conclusionDate = faker.date.past();
      blank.activeDateStart = faker.date.future();
      blank.activeDateEnd = faker.date.future();
      blank.useDateStart = faker.date.future();
      blank.useDateEnd = faker.date.future();
      blank.sum = faker.number.int({ min: 400000, max: 1000000 });
      blank.premium = faker.number.int({ min: 3000, max: 25000 });
      blank.isProlonged = faker.datatype.boolean();
      blank.comment = faker.lorem.sentence();

      blank.bank = faker.helpers.arrayElement(banks);
      blank.insuranceCompany = faker.helpers.arrayElement(insuranceCompanies);
      blank.insuranceType = faker.helpers.arrayElement(insuranceTypes);
      blank.client = faker.helpers.arrayElement(clients);
      blank.employee = faker.helpers.arrayElement(employees);
      blank.sellingPoint = faker.helpers.arrayElement(sellingPoints);

      blanks.push(await this.blankRepository.save(blank));
    }
  }
}
