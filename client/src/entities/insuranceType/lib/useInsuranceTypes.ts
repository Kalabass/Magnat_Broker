import { insuranceTypeService } from '@/shared/api/services/insuranceTypesService';
import { useQuery } from '@tanstack/react-query';

export const useInsuranceTypes = () => {
  return useQuery({
    queryFn: () => insuranceTypeService.findAll(),
    queryKey: ['insuranceTypes'],
  });
};
