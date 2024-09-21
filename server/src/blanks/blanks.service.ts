import { faker } from '@faker-js/faker'
import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BanksService } from 'src/banks/banks.service'
import { ClientsService } from 'src/clients/clients.service'
import { SeedOptions } from 'src/constants/seedOptions'
import { EmployeesService } from 'src/employees/employees.service'
import { InsuranceCompaniesService } from 'src/insurance-companies/insurance-companies.service'
import { InsuranceTypesService } from 'src/insurance-types/insurance-types.service'
import { SellingPointsService } from 'src/selling-points/selling-points.service'

import { BlankSeriesService } from 'src/blank-series/blank-series.service'
import { InsuranceObjectsService } from 'src/insurance-objects/insurance-objects.service'
import { Repository } from 'typeorm'
import { CreateBlankDto } from './dto/create-blank.dto'
import { CreateContractDto } from './dto/create-contract.dto'
import { UpdateBlankDto } from './dto/update-blank.dto'
import { Blank } from './entities/blank.entity'

@Injectable()
export class BlanksService {
	constructor(
		@InjectRepository(Blank)
		private readonly blankRepository: Repository<Blank>,
		private readonly bankService: BanksService,
		private readonly insuranceCompanyService: InsuranceCompaniesService,
		private readonly insuranceTypeService: InsuranceTypesService,
		private readonly clientsService: ClientsService,
		private readonly employeesService: EmployeesService,
		private readonly sellingPointService: SellingPointsService,
		private readonly blankSeriesService: BlankSeriesService,
		private readonly insuranceObjectService: InsuranceObjectsService
	) {}

	private readonly handleError = (error: any) => {
		console.error(error)
		throw error
	}

	private async findBlankById(id: number): Promise<Blank> {
		const blank = await this.blankRepository.findOne({ where: { id } })
		if (!blank) {
			throw new NotFoundException('Blank not found')
		}
		return blank
	}

	async create(createBlankDto: CreateBlankDto) {
		try {
			return await this.blankRepository.save(createBlankDto)
		} catch (error) {
			this.handleError(error)
		}
	}

	async createBlank(createContractDto: CreateContractDto) {
		const {
			client: clientDTO,
			insuranceObject: insuranceObjectDTO,
			blank: blankDTO,
		} = createContractDto
		const {
			insuranceCompanyId,
			employeeId,
			insuranceTypeId,
			blankSeriesId,
			sellingPointId,
		} = blankDTO
		try {
			const client = await this.clientsService.create(clientDTO)
			const insuranceObject =
				await this.insuranceObjectService.create(insuranceObjectDTO)

			const insuranceCompany =
				await this.insuranceCompanyService.findOne(insuranceCompanyId)

			const blankSeries = await this.blankSeriesService.findOne(blankSeriesId)

			const sellingPoint =
				await this.sellingPointService.findOne(sellingPointId)

			const insuranceType =
				await this.insuranceTypeService.findOne(insuranceTypeId)

			const employee = await this.employeesService.findOne(employeeId)

			const blank = await this.create({
				...blankDTO,
				sellingPoint,
				employee,
				insuranceType,
				blankSeries,
				insuranceCompany,
				client: client,
				insuranceObject: insuranceObject,
			})

			if (!blank) {
				throw new BadRequestException('Не удалось создать бланк')
			}

			return blank
		} catch (error) {
			this.handleError(error)
		}
	}

	async findAll() {
		try {
			const blanks = await this.blankRepository.find({
				relations: {
					client: true,
					employee: true,
					sellingPoint: true,
					insuranceCompany: true,
					insuranceType: true,
					insuranceObject: {
						bank: true,
					},
					blankSeries: true,
				},
				order: {
					conclusionDate: 'DESC',
				},
			})

			return blanks
		} catch (error) {
			this.handleError(error)
		}
	}

	formatDate(date: string | Date): string {
		const parsedDate = typeof date === 'string' ? new Date(date) : date

		const day = String(parsedDate.getDate()).padStart(2, '0')
		const month = String(parsedDate.getMonth() + 1).padStart(2, '0')
		const year = parsedDate.getFullYear()

		return `${day}.${month}.${year}`
	}

	async findAllProcessed() {
		try {
			const blanks = await this.findAll()

			const processedBlanks = blanks.map(blank => ({
				...blank,
				clientName: blank.client.name,
				insuranceTypeName: blank.insuranceType.name,
				insuranceCompanyName: blank.insuranceCompany.name,
				insuranceObjectName: blank.insuranceObject.name,
				insuranceObjectYear: blank.insuranceObject.year,
				sum: blank.insuranceObject.sum,
				premium: blank.insuranceObject.premium,
				bankName: blank.insuranceObject.bank.name,
				employeeName: blank.employee.name,
				sellingPointName: blank.sellingPoint.name,
				seriesNumber: `${blank.blankSeries.name}  ${blank.number}`,
				dateRange: `${this.formatDate(blank.activeDateStart)} - ${this.formatDate(blank.activeDateEnd)}`,
				conclusionDate: this.formatDate(blank.conclusionDate),

				number: undefined,
				activeDateStart: undefined,
				activeDateEnd: undefined,
				useDateStart: undefined,
				useDateEnd: undefined,
				createdAt: undefined,
				updatedAt: undefined,
				comment: undefined,

				client: undefined,
				insuranceType: undefined,
				insuranceCompany: undefined,
				insuranceObject: undefined,
				employee: undefined,
				sellingPoint: undefined,
				blankSeries: undefined,
			}))

			return processedBlanks
		} catch (error) {
			this.handleError(error)
		}
	}
	async findOne(id: number) {
		try {
			return await this.findBlankById(id)
		} catch (error) {
			this.handleError(error)
		}
	}

	async update(id: number, updateBlankDto: UpdateBlankDto) {
		try {
			const blank = await this.findBlankById(id)
			return await this.blankRepository.update(blank.id, updateBlankDto)
		} catch (error) {
			this.handleError(error)
		}
	}

	async remove(id: number) {
		try {
			const blank = await this.findBlankById(id)
			return await this.blankRepository.delete(blank.id)
		} catch (error) {
			this.handleError(error)
		}
	}

	async seedDataWithFaker(): Promise<void> {
		await this.bankService.seedDataWithFaker()
		await this.insuranceCompanyService.seedDataWithFaker()
		await this.insuranceTypeService.seedDataWithFaker()
		await this.clientsService.seedDataWithFaker()
		await this.employeesService.seedDataWithFaker()
		await this.sellingPointService.seedDataWithFaker()
		await this.blankSeriesService.seedData()
		await this.insuranceObjectService.seedDataWithFaker()

		const blanks: Partial<Blank>[] = []

		const insuranceCompanies = await this.insuranceCompanyService.findAll()
		const insuranceTypes = await this.insuranceTypeService.findAll()
		const clients = await this.clientsService.findAll()
		const employees = await this.employeesService.findAll()
		const sellingPoints = await this.sellingPointService.findAll()
		const blankSeries = await this.blankSeriesService.findAll()
		const insuranceObjects = await this.insuranceObjectService.findAll()

		for (let i = 0; i < SeedOptions.BLANK.seedCount; i++) {
			const blank = new Blank()
			blank.number = faker.number
				.int({ min: 100000000, max: 999999999 })
				.toString()
			blank.conclusionDate = faker.date.past()
			blank.activeDateStart = faker.date.future()
			blank.activeDateEnd = faker.date.future()
			blank.useDateStart = faker.date.future()
			blank.useDateEnd = faker.date.future()

			blank.isProlonged = faker.datatype.boolean()
			blank.comment = faker.lorem.sentence()

			blank.insuranceCompany = faker.helpers.arrayElement(insuranceCompanies)
			blank.insuranceType = faker.helpers.arrayElement(insuranceTypes)
			blank.client = faker.helpers.arrayElement(clients)
			blank.employee = faker.helpers.arrayElement(employees)
			blank.sellingPoint = faker.helpers.arrayElement(sellingPoints)
			blank.blankSeries = faker.helpers.arrayElement(blankSeries)
			blank.insuranceObject = faker.helpers.arrayElement(insuranceObjects)

			blanks.push(await this.blankRepository.save(blank))
		}
	}
}
