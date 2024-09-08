import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsuranceObjectTypesService } from './insurance-object-types.service';
import { CreateInsuranceObjectTypeDto } from './dto/create-insurance-object-type.dto';
import { UpdateInsuranceObjectTypeDto } from './dto/update-insurance-object-type.dto';

@Controller('insurance-object-types')
export class InsuranceObjectTypesController {
  constructor(private readonly insuranceObjectTypesService: InsuranceObjectTypesService) {}

  @Post()
  create(@Body() createInsuranceObjectTypeDto: CreateInsuranceObjectTypeDto) {
    return this.insuranceObjectTypesService.create(createInsuranceObjectTypeDto);
  }

  @Get()
  findAll() {
    return this.insuranceObjectTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceObjectTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsuranceObjectTypeDto: UpdateInsuranceObjectTypeDto) {
    return this.insuranceObjectTypesService.update(+id, updateInsuranceObjectTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceObjectTypesService.remove(+id);
  }
}
