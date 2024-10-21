import { blankService } from '@/shared/api/services/blankService';
import { MutationData } from '@/shared/model/blanksInterfaces';
import { useQuery } from '@tanstack/react-query';

export const useProcessedBlanks = (filters?: Partial<MutationData>) => {
	return useQuery({
		queryFn: () => blankService.findAllProcessed(filters),
		queryKey: ['blanks', 'processed', filters],
	});
};
