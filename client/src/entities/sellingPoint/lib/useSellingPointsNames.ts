import { sellingPointService } from '@/shared/api/services/sellingPointService';
import { useQuery } from '@tanstack/react-query';

export const useSellingPointsNames = () => {
  return useQuery({
    queryFn: () => sellingPointService.findAllNames(),
    queryKey: ['sellingPoints', 'names'],
  });
};
