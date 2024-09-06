import { insuranceCompanyService } from '@/shared/api/services/insuranceCompanyService';
import { useQuery } from '@tanstack/react-query';

export const useInsuranceCompaniesNames = () => {
  return useQuery({
    queryFn: () => insuranceCompanyService.findAllNames(),
    queryKey: ['insuranceCompanies', 'names'],
  });
};
