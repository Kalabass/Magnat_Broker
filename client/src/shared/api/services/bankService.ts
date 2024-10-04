import { handleError } from '@/shared/lib/utils/errorHandler';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

interface BankData {
	id: number;
	name: string;
	comment: string;
}

class BankService {
	async findAll(): Promise<BankData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BANK.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all banks');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BANK.FIND_ALL_NAMES);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all bank names');
			throw error;
		}
	}
}

export const bankService = new BankService();
