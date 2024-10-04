import { handleError } from '@/shared/lib/utils/errorHandler';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

interface SellingPointsData {
	id: number;
	name: string;
	comment: string;
	isActive: boolean;
}

class SellingPointService {
	async findAll(): Promise<SellingPointsData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.SELLING_POINT.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all selling points');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.SELLING_POINT.FIND_ALL_NAMES
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all selling points names');
			throw error;
		}
	}
}

export const sellingPointService = new SellingPointService();
