import { InsuranceCompanyData } from '@/shared/model/insuranceCompanyInterfaces';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class InsuranceCompanyService {
	async findAll(): Promise<InsuranceCompanyData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.INSURANCE_COMPANY.FIND_ALL
			);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all insurance companies');
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
			console.error(error, 'Failed to fetch all insurance companies names');
			throw error;
		}
	}
}

export const insuranceCompanyService = new InsuranceCompanyService();
