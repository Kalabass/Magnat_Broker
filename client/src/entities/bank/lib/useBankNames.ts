import { bankService } from '@/shared/api/services/bankService';
import { useQuery } from '@tanstack/react-query';

export const useBankNames = () => {
  return useQuery({
    queryFn: () => bankService.findAllNames(),
    queryKey: ['banks', 'names'],
  });
};
