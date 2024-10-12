import { faker } from '@faker-js/faker';
import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BanksService } from 'src/banks/banks.service';
import { ClientsService } from 'src/clients/clients.service';
import { SeedOptions } from 'src/constants/seedOptions';
import { EmployeesService } from 'src/employees/employees.service';
import { InsuranceCompaniesService } from 'src/insurance-companies/insurance-companies.service';
import { InsuranceTypesService } from 'src/insurance-types/insurance-types.service';
import { SellingPointsService } from 'src/selling-points/selling-points.service';
import * as XLSX from 'xlsx';

import { Response } from 'express';
import { BlankSeriesService } from 'src/blank-series/blank-series.service';
import { InsuranceObjectsService } from 'src/insurance-objects/insurance-objects.service';
import { PaymentTypesService } from 'src/payment-types/payment-types.service';
import {
	Between,
	ILike,
	LessThanOrEqual,
	MoreThanOrEqual,
	Repository,
} from 'typeorm';
import { CreateBlankDto } from './dto/create-blank.dto';
import { FiltersDto } from './dto/filters-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';
import { Blank, MortgageType } from './entities/blank.entity';

export interface IMutationData {
	blankConclusionDate: Date;
	blankActiveDateStart: Date;
	blankActiveDateEnd: Date;
	blankUseDateStart: Date;
	blankUseDateEnd: Date;
	blankNumber: string;
	blankSeriesId: number;
	blankEmployeeId: number;
	blankInsuranceCompanyId: number;
	blankInsuranceTypeId: number;
	blankMortgageTypeId: MortgageType;
	blankSellingPointId: number;
	blankPremium: number;
	blankSum: number;
	blankBankId: number;
	blankPaymentTypeId: number;
	blankEmail: string;

	clientIsLegal: boolean;
	clientBirthDate: Date;
	clientName: string;
	clientINN: number;
	clientPassportNumber: number;
	clientPassportSeries: number;
	clientPhoneNumber: string;
	clientAddress: string;

	insuranceObjectHorsePowers: number;
	insuranceObjectName: string;
}

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
		private readonly insuranceObjectService: InsuranceObjectsService,
		private readonly paymentTypeService: PaymentTypesService
	) {}

	private readonly handleError = (error: any) => {
		console.error(error);
		throw error;
	};

	async findBlankById(id: number): Promise<Blank> {
		try {
			const blank = await this.blankRepository.findOne({
				where: { id },
				relations: {
					client: true,
					insuranceObject: {
						bank: true,
					},
					blankSeries: true,
					employee: true,
					insuranceCompany: true,
					insuranceType: true,
					paymentType: true,
					sellingPoint: true,
				},
			});
			if (!blank) {
				throw new NotFoundException('Blank not found');
			}
			return blank;
		} catch (error) {
			this.handleError(error);
		}
	}

	async findBlankByIdProcessed(id: number): Promise<IMutationData> {
		console.log(id);
		const blank = await this.blankRepository.findOne({
			where: { id },
			relations: {
				client: true,
				insuranceObject: {
					bank: true,
				},
				blankSeries: true,
				employee: true,
				insuranceCompany: true,
				insuranceType: true,
				paymentType: true,
				sellingPoint: true,
			},
		});

		if (!blank) {
			throw new NotFoundException('Blank not found');
		}

		const processedBlank: IMutationData = {
			blankConclusionDate: blank.conclusionDate ?? undefined,
			blankActiveDateStart: blank.activeDateStart ?? undefined,
			blankActiveDateEnd: blank.activeDateEnd ?? undefined,
			blankUseDateStart: blank.useDateStart ?? undefined,
			blankUseDateEnd: blank.useDateEnd ?? undefined,
			blankNumber: blank.number ?? undefined,
			blankSeriesId: blank.blankSeries ? blank.blankSeries.id : undefined,
			blankEmployeeId: blank.employee ? blank.employee.id : undefined,
			blankInsuranceCompanyId: blank.insuranceCompany
				? blank.insuranceCompany.id
				: undefined,
			blankInsuranceTypeId: blank.insuranceType
				? blank.insuranceType.id
				: undefined,
			blankMortgageTypeId: blank.mortgageType ?? undefined,
			blankSellingPointId: blank.sellingPoint
				? blank.sellingPoint.id
				: undefined,
			blankPremium: blank.premium ?? undefined,
			blankSum: blank.sum ?? undefined,
			blankBankId:
				blank.insuranceObject && blank.insuranceObject.bank
					? blank.insuranceObject.bank.id
					: undefined,
			blankPaymentTypeId: blank.paymentType ? blank.paymentType.id : undefined,
			blankEmail: blank.email ?? undefined,

			clientIsLegal: blank.client ? blank.client.isLegal : undefined,
			clientBirthDate: blank.client ? blank.client.dateOfBirth : undefined,
			clientName: blank.client ? blank.client.name : undefined,
			clientINN: blank.client ? blank.client.inn : undefined,
			clientPassportNumber: blank.client ? blank.client.number : undefined,
			clientPassportSeries: blank.client ? blank.client.series : undefined,
			clientPhoneNumber: blank.client ? blank.client.phone : undefined,
			clientAddress: blank.client ? blank.client.address : undefined,

			insuranceObjectHorsePowers: blank.insuranceObject
				? blank.insuranceObject.horsePowers
				: undefined,
			insuranceObjectName: blank.insuranceObject
				? blank.insuranceObject.name
				: undefined,
		};

		return processedBlank;
	}

	async create(createBlankDto: CreateBlankDto) {
		const queryRunner =
			this.blankRepository.manager.connection.createQueryRunner();
		await queryRunner.connect();
		await queryRunner.startTransaction();

		try {
			const client = await this.clientsService.create({
				address: createBlankDto.clientAddress,
				dateOfBirth: createBlankDto.clientBirthDate,
				inn: createBlankDto.clientINN,
				name: createBlankDto.clientName,
				number: createBlankDto.clientPassportNumber,
				series: createBlankDto.clientPassportSeries,
				phone: createBlankDto.clientPhoneNumber,
			});

			const insuranceObject = await this.insuranceObjectService.create({
				horsePowers: createBlankDto.insuranceObjectHorsePowers,
				name: createBlankDto.insuranceObjectName,
			});

			if (!client) throw new BadRequestException('Не удалось создать клиента');
			if (!insuranceObject)
				throw new BadRequestException('Не удалось создать объект страхования');

			const blank = await this.blankRepository.save({
				employee: { id: createBlankDto.blankEmployeeId },
				insuranceCompany: { id: createBlankDto.blankInsuranceCompanyId },
				insuranceType: { id: createBlankDto.blankInsuranceTypeId },
				paymentType: { id: createBlankDto.blankPaymentTypeId },
				sellingPoint: { id: createBlankDto.blankSellingPointId },
				blankSeries: { id: createBlankDto.blankSeriesId },
				number: createBlankDto.blankNumber,
				conclusionDate: createBlankDto.blankConclusionDate,
				activeDateStart: createBlankDto.blankActiveDateStart,
				activeDateEnd: createBlankDto.blankActiveDateEnd,
				useDateStart: createBlankDto.blankUseDateStart,
				useDateEnd: createBlankDto.blankUseDateEnd,
				email: createBlankDto.blankEmail,
				premium: createBlankDto.blankPremium,
				sum: createBlankDto.blankSum,
				client: client,
				insuranceObject: insuranceObject,
			});

			await queryRunner.commitTransaction();
			return blank;
		} catch (error) {
			await queryRunner.rollbackTransaction();
			this.handleError(error);
		} finally {
			await queryRunner.release();
		}
	}

	// async createBlank(createContractDto: CreateContractDto) {
	// 	const {
	// 		client: clientDTO,
	// 		insuranceObject: insuranceObjectDTO,
	// 		blank: blankDTO,
	// 	} = createContractDto;
	// 	const {
	// 		insuranceCompanyId,
	// 		employeeId,
	// 		insuranceTypeId,
	// 		blankSeriesId,
	// 		sellingPointId,
	// 	} = blankDTO;
	// 	try {
	// 		const client = await this.clientsService.create(clientDTO);
	// 		const insuranceObject =
	// 			await this.insuranceObjectService.create(insuranceObjectDTO);

	// 		const insuranceCompany =
	// 			await this.insuranceCompanyService.findOne(insuranceCompanyId);

	// 		const blankSeries = await this.blankSeriesService.findOne(blankSeriesId);

	// 		const sellingPoint =
	// 			await this.sellingPointService.findOne(sellingPointId);

	// 		const insuranceType =
	// 			await this.insuranceTypeService.findOne(insuranceTypeId);

	// 		const employee = await this.employeesService.findOne(employeeId);

	// 		const blank = await this.create({
	// 			...blankDTO,
	// 			sellingPoint,
	// 			employee,
	// 			insuranceType,
	// 			blankSeries,
	// 			insuranceCompany,
	// 			client: client,
	// 			insuranceObject: insuranceObject,
	// 		});

	// 		if (!blank) {
	// 			throw new BadRequestException('Не удалось создать бланк');
	// 		}

	// 		return blank;
	// 	} catch (error) {
	// 		this.handleError(error);
	// 	}
	// }

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
			});

			return blanks;
		} catch (error) {
			this.handleError(error);
		}
	}

	formatDate(date: string | Date): string {
		const parsedDate = typeof date === 'string' ? new Date(date) : date;

		const day = String(parsedDate.getDate()).padStart(2, '0');
		const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
		const year = parsedDate.getFullYear();

		return `${day}.${month}.${year}`;
	}

	async findAllProcessedExcel(filtersDto: FiltersDto, res: Response) {
		try {
			let {
				conclusionDateStart,
				conclusionDateEnd,
				policeNumber,
				client,
				employeeId,
				insuranceCompanyId,
				sellingPointId,
				typeId,
			} = filtersDto;

			const whereConditions: any = {};

			if (policeNumber) {
				whereConditions.number = ILike(`%${policeNumber}%`);
			}

			if (employeeId) {
				whereConditions.employee = { id: employeeId };
			}

			if (insuranceCompanyId) {
				whereConditions.insuranceCompany = { id: insuranceCompanyId };
			}

			if (sellingPointId) {
				whereConditions.sellingPoint = { id: sellingPointId };
			}

			if (typeId) {
				whereConditions.insuranceType = { id: typeId };
			}

			if (conclusionDateStart && conclusionDateEnd) {
				const endDatePlusOne = new Date(conclusionDateEnd);
				endDatePlusOne.setDate(endDatePlusOne.getDate() + 1);

				whereConditions.conclusionDate = Between(
					conclusionDateStart,
					endDatePlusOne
				);
			} else if (conclusionDateStart) {
				whereConditions.conclusionDate = MoreThanOrEqual(conclusionDateStart);
			} else if (conclusionDateEnd) {
				whereConditions.conclusionDate = LessThanOrEqual(conclusionDateEnd);
			}

			if (client) {
				whereConditions.client = { name: ILike(`%${client}%`) };
			}

			const blanks = await this.blankRepository.find({
				where: whereConditions,
				relations: {
					client: true,
					insuranceType: true,
					insuranceCompany: true,
					insuranceObject: {
						bank: true,
					},
					employee: true,
					sellingPoint: true,
					blankSeries: true,
				},
				order: {
					conclusionDate: 'DESC',
				},
			});

			const processedBlanks = blanks.map((blank) => ({
				...blank,
				clientName: blank.client.name,
				insuranceTypeName: blank.insuranceType.name,
				insuranceCompanyName: blank.insuranceCompany.name,
				insuranceObjectName: blank.insuranceObject.name,
				insuranceObjectYear: blank.insuranceObject.year,
				sum: blank.sum,
				premium: blank.premium,
				bankName: blank.insuranceObject.bank.name,
				employeeName: blank.employee.name,
				sellingPointName: blank.sellingPoint.name,
				seriesNumber: `${blank.blankSeries.name}  ${blank.number}`,
				dateRange: `${this.formatDate(blank.activeDateStart)} - ${this.formatDate(blank.activeDateEnd)}`,
				conclusionDate: this.formatDate(blank.conclusionDate),
			}));

			const worksheet = XLSX.utils.json_to_sheet(processedBlanks);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, 'Processed Blanks');

			// Генерация файла
			const excelBuffer = XLSX.write(workbook, {
				bookType: 'xlsx',
				type: 'buffer',
			});

			res.setHeader(
				'Content-Disposition',
				'attachment; filename=processed_blanks.xlsx'
			);
			res.setHeader(
				'Content-Type',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			);

			// Отправка файла
			res.send(excelBuffer);
		} catch (error) {
			this.handleError(error);
		}
	}

	async findAllProcessed(filtersDto: FiltersDto) {
		try {
			let {
				conclusionDateStart,
				conclusionDateEnd,
				policeNumber,
				client,
				employeeId,
				insuranceCompanyId,
				sellingPointId,
				typeId,
			} = filtersDto;

			const whereConditions: any = {};

			if (policeNumber) {
				whereConditions.number = ILike(`%${policeNumber}%`);
			}

			if (employeeId) {
				whereConditions.employee = { id: employeeId };
			}

			if (insuranceCompanyId) {
				whereConditions.insuranceCompany = { id: insuranceCompanyId };
			}

			if (sellingPointId) {
				whereConditions.sellingPoint = { id: sellingPointId };
			}

			if (typeId) {
				whereConditions.insuranceType = { id: typeId };
			}

			if (conclusionDateStart && conclusionDateEnd) {
				const endDatePlusOne = new Date(conclusionDateEnd);
				endDatePlusOne.setDate(endDatePlusOne.getDate() + 1);

				whereConditions.conclusionDate = Between(
					conclusionDateStart,
					endDatePlusOne
				);
			} else if (conclusionDateStart) {
				whereConditions.conclusionDate = MoreThanOrEqual(conclusionDateStart);
			} else if (conclusionDateEnd) {
				whereConditions.conclusionDate = LessThanOrEqual(conclusionDateEnd);
			}

			if (client) {
				whereConditions.client = { name: ILike(`%${client}%`) };
			}

			const blanks = await this.blankRepository.find({
				where: whereConditions,
				relations: {
					client: true,
					insuranceType: true,
					insuranceCompany: true,
					insuranceObject: {
						bank: true,
					},
					employee: true,
					sellingPoint: true,
					blankSeries: true,
				},
				order: {
					id: 'DESC',
				},
			});

			const processedBlanks = blanks.map((blank) => ({
				...blank,
				clientName: blank.client.name,
				insuranceTypeName:
					blank.insuranceType.name.toLowerCase() === 'ипотека'
						? blank.insuranceType.name
						: blank.insuranceType.name,
				insuranceCompanyName: blank.insuranceCompany.name,
				insuranceObjectName: blank.insuranceObject.name ?? undefined,
				insuranceObjectYear: blank.insuranceObject.year ?? undefined,
				sum: blank.sum,
				premium: blank.premium,
				employeeName: blank.employee.name,
				sellingPointName: blank.sellingPoint.name,
				seriesNumber: `${blank.blankSeries.name}  ${blank.number}`,
				dateRange: `${this.formatDate(blank.activeDateStart)} - ${this.formatDate(blank.activeDateEnd)}`,
				conclusionDate: this.formatDate(blank.conclusionDate),
			}));

			return processedBlanks;
		} catch (error) {
			this.handleError(error);
		}
	}

	async update(id: number, updateBlankDto: UpdateBlankDto) {
		try {
			const blank = await this.findBlankById(id);
			if (!blank) {
				throw new Error('Blank not found');
			}

			if (blank.client) {
				await this.clientsService.update(blank.client.id, {
					name: updateBlankDto.clientName,
					dateOfBirth: updateBlankDto.clientBirthDate,
					series: updateBlankDto.clientPassportSeries,
					number: updateBlankDto.clientPassportNumber,
					phone: updateBlankDto.clientPhoneNumber,
					inn: updateBlankDto.clientINN,
					address: updateBlankDto.clientAddress,
				});
			}

			const newBank = await this.bankService.findOne(
				updateBlankDto.blankBankId
			);

			if (blank.insuranceObject) {
				await this.insuranceObjectService.update(blank.client.id, {
					name: updateBlankDto.insuranceObjectName,
					horsePowers: updateBlankDto.insuranceObjectHorsePowers,
					bank: newBank,
				});
			}

			await this.blankRepository.update(blank.id, {
				conclusionDate: updateBlankDto.blankConclusionDate,
				activeDateStart: updateBlankDto.blankActiveDateStart,
				activeDateEnd: updateBlankDto.blankActiveDateEnd,
				useDateStart: updateBlankDto.blankUseDateStart,
				useDateEnd: updateBlankDto.blankUseDateEnd,
				number: updateBlankDto.blankNumber,
				email: updateBlankDto.blankEmail,
				premium: updateBlankDto.blankPremium,
				sum: updateBlankDto.blankSum,
				blankSeries: {
					id: updateBlankDto.blankSeriesId,
				},
				insuranceCompany: {
					id: updateBlankDto.blankInsuranceCompanyId,
				},
				employee: {
					id: updateBlankDto.blankEmployeeId,
				},
				insuranceType: {
					id: updateBlankDto.blankInsuranceTypeId,
				},
				sellingPoint: {
					id: updateBlankDto.blankSellingPointId,
				},
				paymentType: {
					id: updateBlankDto.blankPaymentTypeId,
				},
			});

			return { message: 'Update successful' };
		} catch (error) {
			this.handleError(error);
		}
	}

	async remove(id: number) {
		try {
			const blank = await this.findBlankById(id);
			return await this.blankRepository.delete(blank.id);
		} catch (error) {
			this.handleError(error);
		}
	}

	async seedDataWithFaker(): Promise<void> {
		await this.paymentTypeService.seed();
		await this.bankService.seedDataWithFaker();
		await this.insuranceCompanyService.seedDataWithFaker();
		await this.insuranceTypeService.seedDataWithFaker();
		await this.clientsService.seedDataWithFaker();
		await this.employeesService.seedDataWithFaker();
		await this.sellingPointService.seedDataWithFaker();
		await this.blankSeriesService.seedData();
		await this.insuranceObjectService.seedDataWithFaker();

		const blanks: Partial<Blank>[] = [];

		const insuranceCompanies = await this.insuranceCompanyService.findAll();
		const insuranceTypes = await this.insuranceTypeService.findAll();
		const clients = await this.clientsService.findAll();
		const employees = await this.employeesService.findAll();
		const sellingPoints = await this.sellingPointService.findAll();
		const blankSeries = await this.blankSeriesService.findAll();
		const insuranceObjects = await this.insuranceObjectService.findAll();

		for (let i = 0; i < SeedOptions.BLANK.seedCount; i++) {
			const blank = new Blank();
			blank.number = faker.number
				.int({ min: 100000000, max: 999999999 })
				.toString();
			blank.conclusionDate = faker.date.past();
			blank.activeDateStart = faker.date.future();
			blank.activeDateEnd = faker.date.future();
			blank.useDateStart = faker.date.future();
			blank.useDateEnd = faker.date.future();

			blank.sum = faker.number.int({ min: 400000, max: 1000000 });
			blank.premium = faker.number.int({ min: 3000, max: 25000 });

			blank.isProlonged = faker.datatype.boolean();
			blank.comment = faker.lorem.sentence();

			blank.insuranceCompany = faker.helpers.arrayElement(insuranceCompanies);
			blank.insuranceType = faker.helpers.arrayElement(insuranceTypes);
			blank.client = faker.helpers.arrayElement(clients);
			blank.employee = faker.helpers.arrayElement(employees);
			blank.sellingPoint = faker.helpers.arrayElement(sellingPoints);
			blank.blankSeries = faker.helpers.arrayElement(blankSeries);
			blank.insuranceObject = faker.helpers.arrayElement(insuranceObjects);

			blanks.push(await this.blankRepository.save(blank));
		}
	}
}
