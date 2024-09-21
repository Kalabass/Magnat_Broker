import { employeeService } from '@/shared/api/services/employeeService'
import { useQuery } from '@tanstack/react-query'

export const useEmployeesNames = () => {
	return useQuery({
		queryFn: () => employeeService.findAllNames(),
		queryKey: ['employees', 'names'],
	})
}
