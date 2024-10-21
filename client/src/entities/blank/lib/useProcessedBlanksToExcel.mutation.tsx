import { blankService } from '@/shared/api/services/blankService';
import { MutationData } from '@/shared/model/blanksInterfaces';
import { useMutation } from '@tanstack/react-query';

export const useProcessedBlanksToExcelMutation = () => {
	return useMutation({
		mutationFn: (filters: Partial<MutationData>) =>
			blankService.allProcessedToExcel(filters),
		mutationKey: ['blanks', 'processed', 'excel'],
	});
};
