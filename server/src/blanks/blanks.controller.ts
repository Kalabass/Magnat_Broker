import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { ClientsService } from 'src/clients/clients.service'
import { InsuranceObjectsService } from 'src/insurance-objects/insurance-objects.service'
import { BlanksService } from './blanks.service'
import { CreateBlankDto } from './dto/create-blank.dto'
import { CreateContractDto } from './dto/create-contract.dto'
import { UpdateBlankDto } from './dto/update-blank.dto'

@Controller('blanks')
export class BlanksController {
	constructor(
		private readonly blanksService: BlanksService,
		private readonly clientService: ClientsService,
		private readonly insuranceObjectService: InsuranceObjectsService
	) {}

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

	@Get('processed')
	findAllProcessed() {
		return this.blanksService.findAllProcessed()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.blanksService.findOne(+id)
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
