import { insuranceCompanyService } from '@/shared/api/services/insuranceCompanyService';
import { useQuery } from '@tanstack/react-query';

export const useInsuranceCompanies = () => {
  return useQuery({
    queryFn: () => insuranceCompanyService.findAll(),
    queryKey: ['insuranceCompanies'],
  });
};
