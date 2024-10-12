import { IMutationData } from '@/entities/blank/lib/useCreateBlank.mutation';

type FormFieldNames = keyof IMutationData;

export const FormFieldNamesMap: Record<FormFieldNames, FormFieldNames> = {
	blankConclusionDate: 'blankConclusionDate',
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
