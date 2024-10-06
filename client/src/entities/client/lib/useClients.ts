import { clientService } from '@/shared/api/services/clientService';
import { useQuery } from '@tanstack/react-query';

export const useClients = () => {
  return useQuery({
    queryFn: () => clientService.findAll(),
    queryKey: ['clients'],
  });
};
