import { blankService } from '@/shared/api/services/blankService';
import { useMutation } from '@tanstack/react-query';
import { IMutationData } from './useCreateBlank.mutation';

export const useProcessedBlanksMutation = () => {
	return useMutation({
		mutationFn: (filters: Partial<IMutationData>) =>
			blankService.findAllProcessed(filters),
		mutationKey: ['blanks', 'processed'],
	});
};
