import { paymentTypeService } from '@/shared/api/services/paymentTypeService';
import { useQuery } from '@tanstack/react-query';

export const usePaymentTypes = () => {
	return useQuery({
		queryFn: () => paymentTypeService.findAll(),
		queryKey: ['paymentTypes'],
	});
};
