import { API_ENDPOINTS } from '@/shared/const/APIEndpoints';
import { PaymentTypeData } from '@/shared/model/paymentTypeinterfaces';
import instance from '../axiosInstance';

class PaymentTypesService {
	async findAll(): Promise<PaymentTypeData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.PAYMENT_TYPE.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all payment types');
			throw error;
		}
	}
}

export const paymentTypeService = new PaymentTypesService();
