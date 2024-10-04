import { handleError } from '@/shared/lib/utils/errorHandler';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class BlankSeriesService {
	async findAll(): Promise<ItemData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BLANK_SERIES.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all blank series ');
			throw error;
		}
	}
}

export const blankSeriesService = new BlankSeriesService();
