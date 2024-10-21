import { blankService } from '@/shared/api/services/blankService';
import { MutationData } from '@/shared/model/blanksInterfaces';
import { useMutation } from '@tanstack/react-query';

export const useProcessedBlanksMutation = () => {
	return useMutation({
		mutationFn: (filters: Partial<MutationData>) =>
			blankService.findAllProcessed(filters),
		mutationKey: ['blanks', 'processed'],
	});
};
