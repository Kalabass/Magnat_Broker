import { InsuranceTypeData } from '@/shared/model/insuranceTypeInterfaces';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class InsuranceTypeService {
	async findAll(): Promise<InsuranceTypeData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.INSURANCE_TYPE.FIND_ALL
			);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all insurance types');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.INSURANCE_TYPE.FIND_ALL_NAMES
			);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all insurance type names');
			throw error;
		}
	}
}

export const insuranceTypeService = new InsuranceTypeService();
