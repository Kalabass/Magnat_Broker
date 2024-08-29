import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';
import { UpdateInsuranceTypeDto } from './dto/update-insurance-type.dto';
import { InsuranceTypesService } from './insurance-types.service';

@Controller('insuranceTypes')
export class InsuranceTypesController {
  constructor(private readonly insuranceTypesService: InsuranceTypesService) {}

  @Post()
  create(@Body() createInsuranceTypeDto: CreateInsuranceTypeDto) {
    return this.insuranceTypesService.create(createInsuranceTypeDto);
  }

  @Get()
  findAll() {
    return this.insuranceTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInsuranceTypeDto: UpdateInsuranceTypeDto,
  ) {
    return this.insuranceTypesService.update(+id, updateInsuranceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceTypesService.remove(+id);
  }

  @Get('seed')
  async seedData(): Promise<string> {
    await this.insuranceTypesService.seedData();
    return 'Insurance types table seeded successfully!';
  }

  @Get('seed/faker')
  async seedDataWithFaker(): Promise<string> {
    await this.insuranceTypesService.seedDataWithFaker();
    return 'Insurance types table seeded successfully!';
  }
}
