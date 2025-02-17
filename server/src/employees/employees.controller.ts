import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { UpdateEmployeeDto } from './dto/update-employee.dto'
import { EmployeesService } from './employees.service'

@Controller('employees')
export class EmployeesController {
	constructor(private readonly employeesService: EmployeesService) {}

	@Post()
	create(@Body() createEmployeeDto: CreateEmployeeDto) {
		return this.employeesService.create(createEmployeeDto)
	}

	@Get()
	findAll() {
		return this.employeesService.findAll()
	}

	@Get('/names')
	findAllNames() {
		return this.employeesService.findAllNames()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.employeesService.findOne(+id)
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateEmployeeDto: UpdateEmployeeDto
	) {
		return this.employeesService.update(+id, updateEmployeeDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.employeesService.remove(+id)
	}

	@Get('seed/faker')
	async seedDataWithFaker(): Promise<string> {
		await this.employeesService.seedDataWithFaker()
		return 'Employees table seeded successfully!'
	}
}
