import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInsuranceCompanyDto } from './dto/create-insurance-company.dto';
import { UpdateInsuranceCompanyDto } from './dto/update-insurance-company.dto';
import { InsuranceCompaniesService } from './insurance-companies.service';

@Controller('insuranceCompanies')
export class InsuranceCompaniesController {
  constructor(
    private readonly insuranceCompaniesService: InsuranceCompaniesService,
  ) {}

  @Post()
  create(@Body() createInsuranceCompanyDto: CreateInsuranceCompanyDto) {
    return this.insuranceCompaniesService.create(createInsuranceCompanyDto);
  }

  @Get()
  findAll() {
    return this.insuranceCompaniesService.findAll();
  }

  @Get('/names')
  findAllNames() {
    return this.insuranceCompaniesService.findAllNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceCompaniesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInsuranceCompanyDto: UpdateInsuranceCompanyDto,
  ) {
    return this.insuranceCompaniesService.update(
      +id,
      updateInsuranceCompanyDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceCompaniesService.remove(+id);
  }

  @Get('seed/faker')
  async seedDataWithFaker(): Promise<string> {
    await this.insuranceCompaniesService.seedDataWithFaker();
    return 'insurance company table seeded successfully!';
  }
}
