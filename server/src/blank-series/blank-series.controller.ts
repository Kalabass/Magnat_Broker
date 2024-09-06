import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateBankDto } from 'src/banks/dto/update-bank.dto';
import { CreateBlankDto } from 'src/blanks/dto/create-blank.dto';
import { BlankSeriesService } from './blank-series.service';

@Controller('blankSeries')
export class BlankSeriesController {
  constructor(private readonly blankSeriesService: BlankSeriesService) {}

  @Post()
  create(@Body() createBlankSeriesDto: CreateBlankDto) {
    return this.blankSeriesService.create(createBlankSeriesDto);
  }

  @Get()
  findAll() {
    return this.blankSeriesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlankSeriesDto: UpdateBankDto) {
    return this.blankSeriesService.update(+id, updateBlankSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blankSeriesService.remove(+id);
  }

  @Get('seed')
  async seedData() {
    await this.blankSeriesService.seedData();
    return 'Blank series table seeded successfully!';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blankSeriesService.findOne(+id);
  }
}
