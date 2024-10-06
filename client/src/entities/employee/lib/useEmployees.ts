import { employeeService } from '@/shared/api/services/employeeService';
import { useQuery } from '@tanstack/react-query';

export const useEmployees = () => {
  return useQuery({
    queryFn: () => employeeService.findAll(),
    queryKey: ['employees'],
  });
};
