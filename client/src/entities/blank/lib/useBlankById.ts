import { blankService } from '@/shared/api/services/blankService';
import { useQuery } from '@tanstack/react-query';

export const useProcessedBlankById = (id: number) => {
	return useQuery({
		queryFn: () => blankService.findOneProcessed(id),
		queryKey: ['blanks', 'processed', id],
	});
};
