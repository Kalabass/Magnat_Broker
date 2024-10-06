import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MortgageTypesService } from './mortgage-types.service';
import { CreateMortgageTypeDto } from './dto/create-mortgage-type.dto';
import { UpdateMortgageTypeDto } from './dto/update-mortgage-type.dto';

@Controller('mortgage-types')
export class MortgageTypesController {
  constructor(private readonly mortgageTypesService: MortgageTypesService) {}

  @Post()
  create(@Body() createMortgageTypeDto: CreateMortgageTypeDto) {
    return this.mortgageTypesService.create(createMortgageTypeDto);
  }

  @Get()
  findAll() {
    return this.mortgageTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mortgageTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMortgageTypeDto: UpdateMortgageTypeDto) {
    return this.mortgageTypesService.update(+id, updateMortgageTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mortgageTypesService.remove(+id);
  }
}
