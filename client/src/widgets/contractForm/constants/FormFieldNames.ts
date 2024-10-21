import { MutationData } from '@/shared/model/blanksInterfaces';

type FormFieldNames = keyof MutationData;

export const FormFieldNamesMap: Record<FormFieldNames, FormFieldNames> = {
	blankConclusionDate: 'blankConclusionDate',
	blankConclusionDateEnd: 'blankConclusionDateEnd',
	blankConclusionDateStart: 'blankConclusionDateStart',
	blankActiveDateStart: 'blankActiveDateStart',
	blankActiveDateEnd: 'blankActiveDateEnd',
	blankUseDateStart: 'blankUseDateStart',
	blankUseDateEnd: 'blankUseDateEnd',
	blankNumber: 'blankNumber',
	blankSeriesId: 'blankSeriesId',
	blankEmployeeId: 'blankEmployeeId',
	blankInsuranceCompanyId: 'blankInsuranceCompanyId',
	blankSellingPointId: 'blankSellingPointId',
	blankPremium: 'blankPremium',
	blankSum: 'blankSum',
	blankBankId: 'blankBankId',
	blankInsuranceTypeId: 'blankInsuranceTypeId',
	blankMortgageType: 'blankMortgageType',
	blankEmail: 'blankEmail',
	blankPaymentTypeId: 'blankPaymentTypeId',

	clientIsLegal: 'clientIsLegal',
	clientBirthDate: 'clientBirthDate',
	clientName: 'clientName',
	clientINN: 'clientINN',
	clientPassportNumber: 'clientPassportNumber',
	clientPassportSeries: 'clientPassportSeries',
	clientPhoneNumber: 'clientPhoneNumber',
	clientAddress: 'clientAddress',

	insuranceObjectHorsePowers: 'insuranceObjectHorsePowers',
	insuranceObjectName: 'insuranceObjectName',
};
