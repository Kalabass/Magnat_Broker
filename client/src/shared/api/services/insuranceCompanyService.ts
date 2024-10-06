import { handleError } from '@/shared/lib/utils/errorHandler';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

interface InsuranceCompaniesData {
	id: number;
	name: string;
	comment: string;
}

class InsuranceCompanyService {
	async findAll(): Promise<InsuranceCompaniesData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.INSURANCE_COMPANY.FIND_ALL
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all insurance companies');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.INSURANCE_COMPANY.FIND_ALL
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all insurance companies names');
			throw error;
		}
	}
}

export const insuranceCompanyService = new InsuranceCompanyService();
