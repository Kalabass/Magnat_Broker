import { bankService } from '@/shared/api/services/bankService';
import { useQuery } from '@tanstack/react-query';

export const useBanks = () => {
  return useQuery({
    queryFn: () => bankService.findAll(),
    queryKey: ['banks'],
  });
};
