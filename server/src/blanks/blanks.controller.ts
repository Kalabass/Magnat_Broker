import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Res,
	UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BlanksService } from './blanks.service';
import { CreateBlankDto } from './dto/create-blank.dto';
import { FiltersDto } from './dto/filters-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';
@Controller('blanks')
export class BlanksController {
	constructor(private readonly blanksService: BlanksService) {}
	@UseGuards(JwtAuthGuard)
	@Post()
	async create(@Body() createBlankDto: CreateBlankDto) {
		return this.blanksService.create(createBlankDto);
	}

	// @Post('createContract')
	// async createContract(@Body() createContractDto: CreateContractDto) {
	// 	return this.blanksService.createBlank(createContractDto);
	// }
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.blanksService.findAll();
	}
	@UseGuards(JwtAuthGuard)
	@Post('processed')
	findAllProcessed(@Body() filtersDto: FiltersDto) {
		return this.blanksService.findAllProcessed(filtersDto);
	}
	@UseGuards(JwtAuthGuard)
	@Post('processed/export-excel')
	findAllProcessedExcel(@Body() filtersDto: FiltersDto, @Res() res: Response) {
		return this.blanksService.findAllProcessedExcel(filtersDto, res);
	}
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.blanksService.findBlankById(+id);
	}
	@UseGuards(JwtAuthGuard)
	@Get('processed/:id')
	findOneProcessed(@Param('id') id: string) {
		return this.blanksService.findBlankByIdProcessed(+id);
	}
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBlankDto: UpdateBlankDto) {
		return this.blanksService.update(+id, updateBlankDto);
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.blanksService.remove(+id);
	}

	@Get('seed/faker')
	async seedDataWithFaker(): Promise<string> {
		await this.blanksService.seedDataWithFaker();
		return 'blank table seeded successfully!';
	}
}
