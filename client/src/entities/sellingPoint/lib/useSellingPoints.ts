import { sellingPointService } from '@/shared/api/services/sellingPointService';
import { useQuery } from '@tanstack/react-query';

export const useSellingPoints = () => {
  return useQuery({
    queryFn: () => sellingPointService.findAll(),
    queryKey: ['sellingPoints'],
  });
};
