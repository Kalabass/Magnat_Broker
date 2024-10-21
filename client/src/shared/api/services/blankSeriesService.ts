import { BlankSeriesData } from '@/shared/model/blankSeriesInterfaces';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class BlankSeriesService {
	async findAll(): Promise<BlankSeriesData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BLANK_SERIES.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all blank series ');
			throw error;
		}
	}
}

export const blankSeriesService = new BlankSeriesService();
