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
import { CreateSellingPointDto } from './dto/create-selling-point.dto';
import { UpdateSellingPointDto } from './dto/update-selling-point.dto';
import { SellingPointsService } from './selling-points.service';

@Controller('sellingPoints')
export class SellingPointsController {
  constructor(private readonly sellingPointsService: SellingPointsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createSellingPointDto: CreateSellingPointDto) {
    return this.sellingPointsService.create(createSellingPointDto);
  }

  @Get()
  findAll() {
    return this.sellingPointsService.findAll();
  }

  @Get('/names')
  findAllNames() {
    return this.sellingPointsService.findAllNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellingPointsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellingPointDto: UpdateSellingPointDto,
  ) {
    return this.sellingPointsService.update(+id, updateSellingPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellingPointsService.remove(+id);
  }

  @Get('seed/faker')
  async seedDataWithFaker(): Promise<string> {
    await this.sellingPointsService.seedDataWithFaker();
    return 'Selling Points table seeded successfully!';
  }
}
