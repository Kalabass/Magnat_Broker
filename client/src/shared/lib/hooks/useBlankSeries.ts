import { blankSeriesService } from '@/shared/api/services/blankSeriesService';
import { useQuery } from '@tanstack/react-query';

export const useBlankSeries = () => {
  return useQuery({
    queryFn: () => blankSeriesService.findAll(),
    queryKey: ['blanks', 'series'],
  });
};
