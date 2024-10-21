import { BlankSeriesData } from './blankSeriesInterfaces';
import { ClientData } from './clietnInterfaces';
import { EmployeeData } from './employeeInterfaces';
import { InsuranceCompanyData } from './insuranceCompanyInterfaces';
import { InsuranceObjectData } from './insuranceObjectInterfaces';
import { InsuranceTypeData } from './insuranceTypeInterfaces';
import { SellingPointData } from './sellingPointInterfaces';

export type MortgageType = 'Жизнь' | 'Жильё';

export interface ItemDataWithActive {
	isActive: boolean;
}

export interface ItemDataName {
	name: string;
}

export interface BaseBlankData {
	id: number;
	number: string;
	conclusionDate: string;
	activeDateStart: string;
	activeDateEnd: string;
	useDateStart: string;
	useDateEnd: string;
	createdAt: string;
	updatedAt: string;
	isProlonged: boolean;
	comment: string | null;
}

export interface BlankData extends BaseBlankData {
	client: ClientData;
	employee: EmployeeData;
	sellingPoint: SellingPointData;
	insuranceCompany: InsuranceCompanyData;
	insuranceType: InsuranceTypeData;
	insuranceObject: InsuranceObjectData;
	blankSeries: BlankSeriesData;

	previousBlank: BaseBlankData | null;
	nextBlank: BaseBlankData | null;
}

export interface ProcessedBlank extends Omit<BlankData, 'client' | 'bankId'> {
	clientName: string;
	insuranceTypeName: string;
	insuranceCompanyName: string;
	insuranceObjectName: string;
	insuranceObjectYear: number;
	sum: number;
	premium: number;
	employeeName: string;
	sellingPointName: string;
	series: string;
}

export interface MutationDataResponse {
	blankConclusionDate: string;
	blankActiveDateStart: string;
	blankActiveDateEnd: string;
	blankUseDateStart: string;
	blankUseDateEnd: string;
	blankNumber: string;
	blankSeriesId: number;
	blankEmployeeId: number;
	blankInsuranceCompanyId: number;
	blankInsuranceTypeId: number;
	blankMortgageType: MortgageType;
	blankSellingPointId: number;
	blankPremium: number;
	blankSum: number;
	blankBankId: number;
	blankPaymentTypeId: number;
	blankEmail: string;

	clientIsLegal: boolean;
	clientBirthDate: string;
	clientName: string;
	clientINN: number;
	clientPassportNumber: number;
	clientPassportSeries: number;
	clientPhoneNumber: string;
	clientAddress: string;

	insuranceObjectHorsePowers: number;
	insuranceObjectName: string;
}

export interface MutationDataSelect {
	blankSeriesId: number;
	blankEmployeeId: number;
	blankInsuranceCompanyId: number;
	blankInsuranceTypeId: number;
	blankSellingPointId: number;
	blankBankId: number;
	blankPaymentTypeId: number;
}

export interface MutationData extends MutationDataSelect {
	blankConclusionDate: Date;
	blankConclusionDateStart?: Date;
	blankConclusionDateEnd?: Date;
	blankActiveDateStart: Date;
	blankActiveDateEnd: Date;
	blankUseDateStart: Date;
	blankUseDateEnd: Date;
	blankNumber: string;

	blankMortgageType: MortgageType;

	blankPremium: number;
	blankSum: number;

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
