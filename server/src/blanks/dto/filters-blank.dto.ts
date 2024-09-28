import { IsDate, IsNumber, IsString } from 'class-validator'

export class FiltersDto {
	@IsDate()
	conclusionDateStart?: Date
	@IsDate()
	conclusionDateEnd?: Date
	@IsString()
	client?: string
	@IsString()
	policeNumber?: string
	@IsNumber()
	typeId?: number
	@IsNumber()
	employeeId?: number
	@IsNumber()
	sellingPointId?: number
	@IsNumber()
	insuranceCompanyId?: number
}
