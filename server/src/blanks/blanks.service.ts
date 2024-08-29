import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BanksService } from 'src/banks/banks.service';
import { ClientsService } from 'src/clients/clients.service';
import { SeedOptions } from 'src/constants/seedOptions';
import { EmployeesService } from 'src/employees/employees.service';
import { InsuranceCompaniesService } from 'src/insurance-companies/insurance-companies.service';
import { InsuranceTypesService } from 'src/insurance-types/insurance-types.service';
import { SellingPointsService } from 'src/selling-points/selling-points.service';
import { VehiclesService } from 'src/vehicles/vehicles.service';
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
    private readonly vehicleService: VehiclesService,
  ) {}
  create(createBlankDto: CreateBlankDto) {
    return 'This action adds a new blank';
  }

  async findAll() {
    const blanks = await this.blankRepository.find({
      relations: {
        client: true,
        employee: true,
        sellingPoint: true,
        bank: true,
        insuranceCompany: true,
        insuranceType: true,
        vehicle: true,
      },
    });
    return blanks;
  }

  findOne(id: number) {
    return `This action returns a #${id} blank`;
  }

  update(id: number, updateBlankDto: UpdateBlankDto) {
    return `This action updates a #${id} blank`;
  }

  remove(id: number) {
    return `This action removes a #${id} blank`;
  }

  async seedDataWithFaker(): Promise<void> {
    await this.bankService.seedDataWithFaker();
    await this.insuranceCompanyService.seedDataWithFaker();
    await this.insuranceTypeService.seedDataWithFaker();
    await this.clientsService.seedDataWithFaker();
    await this.employeesService.seedDataWithFaker();
    await this.sellingPointService.seedDataWithFaker();
    await this.vehicleService.seedDataWithFaker();

    const blanks: Partial<Blank>[] = [];

    const banks = await this.bankService.findAll();
    const insuranceCompanies = await this.insuranceCompanyService.findAll();
    const insuranceTypes = await this.insuranceTypeService.findAll();
    const clients = await this.clientsService.findAll();
    const employees = await this.employeesService.findAll();
    const sellingPoints = await this.sellingPointService.findAll();
    const vehicles = await this.vehicleService.findAll();

    for (let i = 0; i < SeedOptions.BLANK.seedCount; i++) {
      const blank = new Blank();
      blank.series = faker.random.alphaNumeric(5).toUpperCase();
      blank.number = faker.random.numeric(7);
      blank.conclusionDate = faker.date.past();
      blank.activeDateStart = faker.date.future();
      blank.activeDateEnd = faker.date.future();
      blank.useDateStart = faker.date.future();
      blank.useDateEnd = faker.date.future();
      blank.sum = parseInt(faker.finance.amount(1001, 10000, 2));
      blank.premium = parseInt(faker.finance.amount(100, 500, 2));
      blank.isProlonged = faker.datatype.boolean();
      blank.comment = faker.lorem.sentence();

      blank.bank = faker.helpers.arrayElement(banks);
      blank.insuranceCompany = faker.helpers.arrayElement(insuranceCompanies);
      blank.insuranceType = faker.helpers.arrayElement(insuranceTypes);
      blank.client = faker.helpers.arrayElement(clients);
      blank.employee = faker.helpers.arrayElement(employees);
      blank.sellingPoint = faker.helpers.arrayElement(sellingPoints);
      blank.vehicle = faker.helpers.arrayElement(vehicles);

      blanks.push(await this.blankRepository.save(blank));
    }
  }
}
