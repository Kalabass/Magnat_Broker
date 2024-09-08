import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsuranceObjectsService } from './insurance-objects.service';
import { CreateInsuranceObjectDto } from './dto/create-insurance-object.dto';
import { UpdateInsuranceObjectDto } from './dto/update-insurance-object.dto';

@Controller('insurance-objects')
export class InsuranceObjectsController {
  constructor(private readonly insuranceObjectsService: InsuranceObjectsService) {}

  @Post()
  create(@Body() createInsuranceObjectDto: CreateInsuranceObjectDto) {
    return this.insuranceObjectsService.create(createInsuranceObjectDto);
  }

  @Get()
  findAll() {
    return this.insuranceObjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceObjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsuranceObjectDto: UpdateInsuranceObjectDto) {
    return this.insuranceObjectsService.update(+id, updateInsuranceObjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceObjectsService.remove(+id);
  }
}
