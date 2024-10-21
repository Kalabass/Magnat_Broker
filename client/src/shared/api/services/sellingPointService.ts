import { ItemData } from '@/shared/model/interface';
import { SellingPointData } from '@/shared/model/sellingPointInterfaces';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class SellingPointService {
	async findAll(): Promise<SellingPointData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.SELLING_POINT.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all selling points');
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
			console.error(error, 'Failed to fetch all selling points names');
			throw error;
		}
	}
}

export const sellingPointService = new SellingPointService();
