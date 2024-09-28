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
} from '@nestjs/common'
import { Response } from 'express'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { BlanksService } from './blanks.service'
import { CreateBlankDto } from './dto/create-blank.dto'
import { CreateContractDto } from './dto/create-contract.dto'
import { FiltersDto } from './dto/filters-blank.dto'
import { UpdateBlankDto } from './dto/update-blank.dto'
@UseGuards(JwtAuthGuard)
@Controller('blanks')
export class BlanksController {
	constructor(private readonly blanksService: BlanksService) {}

	@Post()
	async create(@Body() createBlankDto: CreateBlankDto) {
		return this.blanksService.create(createBlankDto)
	}

	@Post('createContract')
	async createContract(@Body() createContractDto: CreateContractDto) {
		return this.blanksService.createBlank(createContractDto)
	}

	@Get()
	findAll() {
		return this.blanksService.findAll()
	}

	@Post('processed')
	findAllProcessed(@Body() filtersDto: FiltersDto) {
		return this.blanksService.findAllProcessed(filtersDto)
	}

	@Post('processed/export-excel')
	findAllProcessedExcel(@Body() filtersDto: FiltersDto, @Res() res: Response) {
		return this.blanksService.findAllProcessedExcel(filtersDto, res)
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.blanksService.findBlankById(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBlankDto: UpdateBlankDto) {
		return this.blanksService.update(+id, updateBlankDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.blanksService.remove(+id)
	}

	@Get('seed/faker')
	async seedDataWithFaker(): Promise<string> {
		await this.blanksService.seedDataWithFaker()
		return 'blank table seeded successfully!'
	}
}
