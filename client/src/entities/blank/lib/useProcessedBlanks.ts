import { blankService } from '@/shared/api/services/blankService';
import { useQuery } from '@tanstack/react-query';
import { IMutationData } from './useCreateBlank.mutation';

export const useProcessedBlanks = (filters?: Partial<IMutationData>) => {
	return useQuery({
		queryFn: () => blankService.findAllProcessed(filters),
		queryKey: ['blanks', 'processed', filters],
	});
};
