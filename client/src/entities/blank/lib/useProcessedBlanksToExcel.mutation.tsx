import { blankService } from '@/shared/api/services/blankService'
import { FilterData } from '@/shared/stores/useFiltersStore'
import { useMutation } from '@tanstack/react-query'

export const useProcessedBlanksToExcelMutation = () => {
	return useMutation({
		mutationFn: (filters: Partial<FilterData>) =>
			blankService.allProcessedToExcel(filters),
		mutationKey: ['blanks', 'processed', 'excel'],
	})
}
