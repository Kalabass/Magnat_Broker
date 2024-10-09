import { API_ENDPOINTS } from '@/shared/const/APIEndpoints';
import { handleError } from '@/shared/lib/utils/errorHandler';
import instance from '../axiosInstance';

interface PaymentTypesData {
	id: number;
	name: string;
}

class PaymentTypesService {
	async findAll(): Promise<PaymentTypesData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.PAYMENT_TYPE.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all payment types');
			throw error;
		}
	}
}

export const paymentTypeService = new PaymentTypesService();
