import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createBankDto: CreateBankDto) {
    return this.banksService.create(createBankDto);
  }

  @Get()
  findAll() {
    return this.banksService.findAll();
  }

  @Get('/names')
  findAllNames() {
    return this.banksService.findAllNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
    return this.banksService.update(+id, updateBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banksService.remove(+id);
  }

  @Get('seed/faker')
  async seedDataWithFaker() {
    await this.banksService.seedDataWithFaker();
    return 'Bank table seeded successfully!';
  }
}
