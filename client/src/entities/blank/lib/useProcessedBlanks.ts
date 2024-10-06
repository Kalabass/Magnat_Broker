import { blankService } from '@/shared/api/services/blankService'
import { FilterData } from '@/shared/stores/useFiltersStore'
import { useQuery } from '@tanstack/react-query'

export const useProcessedBlanks = (filters: Partial<FilterData>) => {
	return useQuery({
		queryFn: () => blankService.findAllProcessed(filters),
		queryKey: ['blanks', 'processed', filters],
	})
}
