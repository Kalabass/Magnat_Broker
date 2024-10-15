import { IsDate, IsNumber, IsString } from 'class-validator';

export class FiltersDto {
	@IsDate()
	blankConclusionDateStart?: Date;
	@IsDate()
	blankConclusionDateEnd?: Date;
	@IsString()
	clientName?: string;
	@IsString()
	blankNumber?: string;
	@IsNumber()
	blankInsuranceTypeId?: number;
	@IsNumber()
	blankEmployeeId?: number;
	@IsNumber()
	blankSellingPointId?: number;
	@IsNumber()
	blankInsuranceCompanyId?: number;
}
