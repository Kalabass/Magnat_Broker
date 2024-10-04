import { handleError } from '@/shared/lib/utils/errorHandler';
import { ClientData } from '@/shared/stores/useClientStore';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

export interface clientData {
	id: number;
	dateOfBirth: Date;
	phone: string;
	inn: number; //TODO: в постмане показывает, что возвращается строка, хотя должен number почему строка?
	address: string;
	series: number;
	number: number;
	comment: string;
}

class ClientService {
	async findAll(): Promise<ClientData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.CLIENT.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all clients');
			throw error;
		}
	}
}

export const clientService = new ClientService();
