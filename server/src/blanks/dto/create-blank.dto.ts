import { IsDate, IsNotEmpty } from 'class-validator'
import { Blank } from '../entities/blank.entity'

export class CreateBlankDto extends Blank {
	@IsNotEmpty()
	@IsDate()
	conclusionDate: Date

	@IsNotEmpty()
	@IsDate()
	activeDateStart: Date

	@IsNotEmpty()
	@IsDate()
	activeDateEnd: Date

	@IsNotEmpty()
	@IsDate()
	useDateStart: Date

	@IsNotEmpty()
	@IsDate()
	useDateEnd: Date

	@IsNotEmpty()
	number: string

	insuranceCompanyId: number
	blankSeriesId: number
	sellingPointId: number
	insuranceTypeId: number
	employeeId: number
}
