import { faker } from '@faker-js/faker'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BanksService } from 'src/banks/banks.service'
import { SeedOptions } from 'src/constants/seedOptions'
import { InsuranceObjectTypesService } from 'src/insurance-object-types/insurance-object-types.service'
import { Repository } from 'typeorm'
import { CreateInsuranceObjectDto } from './dto/create-insurance-object.dto'
import { UpdateInsuranceObjectDto } from './dto/update-insurance-object.dto'
import { InsuranceObject } from './entities/insurance-object.entity'

@Injectable()
export class InsuranceObjectsService {
	constructor(
		@InjectRepository(InsuranceObject)
		private readonly insuranceObjectRepository: Repository<InsuranceObject>,
		private readonly bankService: BanksService,
		private readonly insuranceObjectTypeService: InsuranceObjectTypesService
	) {}

	private readonly handleError = (error: any) => {
		console.error(error)
		throw error
	}

	private async findItemById(id: number): Promise<InsuranceObject> {
		try {
			const insuranceObject = await this.insuranceObjectRepository.findOne({
				where: { id },
			})
			if (!insuranceObject) {
				throw new NotFoundException('insuranceObject not found')
			}
			return insuranceObject
		} catch (error) {
			this.handleError(error)
		}
	}

	async create(createInsuranceObjectDto: CreateInsuranceObjectDto) {
		try {
			return await this.insuranceObjectRepository.save(createInsuranceObjectDto)
		} catch (error) {
			this.handleError(error)
		}
	}

	async findAll() {
		try {
			return await this.insuranceObjectRepository.find({
				relations: {
					bank: true,
				},
			})
		} catch (error) {
			this.handleError(error)
		}
	}

	async findOne(id: number) {
		try {
			return await this.findItemById(id)
		} catch (error) {
			this.handleError(error)
		}
	}

	async update(id: number, updateInsuranceObjectDto: UpdateInsuranceObjectDto) {
		try {
			const insuranceObject = await this.findItemById(id)
			return await this.insuranceObjectRepository.update(
				insuranceObject.id,
				updateInsuranceObjectDto
			)
		} catch (error) {
			this.handleError(error)
		}
	}

	async remove(id: number) {
		try {
			const insuranceObject = await this.findItemById(id)
			return await this.insuranceObjectRepository.delete(insuranceObject.id)
		} catch (error) {
			this.handleError(error)
		}
	}

	async seedDataWithFaker(): Promise<void> {
		await this.bankService.seedDataWithFaker()
		await this.insuranceObjectTypeService.seedDataWithFaker()

		const banks = await this.bankService.findAll()
		const insuranceObjectTypes = await this.insuranceObjectTypeService.findAll()

		const insuranceObjects: Partial<InsuranceObject>[] = []

		for (let i = 0; i < SeedOptions.INSURANCE_OBJECT.seedCount; i++) {
			insuranceObjects.push({
				sum: faker.number.int({ min: 400000, max: 1000000 }),
				premium: faker.number.int({ min: 3000, max: 25000 }),
				name: faker.vehicle.vehicle(),
				horsePowers: faker.number.int({ min: 88, max: 210 }),
				year: faker.number.int({ min: 1992, max: 2024 }),
				isCredited: faker.datatype.boolean(),
				bank: faker.helpers.arrayElement(banks),
				insuranceObjectType: faker.helpers.arrayElement(insuranceObjectTypes),
			})
		}

		await this.insuranceObjectRepository.save(insuranceObjects)
	}
}
