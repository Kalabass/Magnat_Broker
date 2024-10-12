import { blankService, MortgageType } from '@/shared/api/services/blankService';
import { useMutation } from '@tanstack/react-query';

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
	blankMortgageType: MortgageType;
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

export const useCreateBlankMutation = () => {
	return useMutation({
		mutationFn: (data: IMutationData) => {
			return blankService.create(data);
		},
		mutationKey: ['blanks', 'create'],
	});
};
