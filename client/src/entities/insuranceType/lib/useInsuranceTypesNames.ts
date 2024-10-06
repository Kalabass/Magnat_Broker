import { insuranceTypeService } from '@/shared/api/services/insuranceTypesService';
import { useQuery } from '@tanstack/react-query';

export const useInsuranceTypesNames = () => {
  return useQuery({
    queryFn: () => insuranceTypeService.findAllNames(),
    queryKey: ['insuranceTypes', 'names'],
  });
};
