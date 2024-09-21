import { blankService } from '@/shared/api/services/blankService'
import { useQuery } from '@tanstack/react-query'

export const useProcessedBlanks = () => {
	return useQuery({
		queryFn: () => blankService.findAllProcessed(),
		queryKey: ['blanks', 'processed'],
	})
}
