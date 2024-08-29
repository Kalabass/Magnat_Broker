import { blankService } from '@/shared/api/services/blankService';
import { useQuery } from '@tanstack/react-query';

export const useBlanks = () => {
  return useQuery({
    queryFn: () => blankService.findAll(),
    queryKey: ['blanks'],
  });
};
