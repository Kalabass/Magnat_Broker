import { ClientData } from '@/shared/model/clietnInterfaces';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class ClientService {
	async findAll(): Promise<ClientData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.CLIENT.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all clients');
			throw error;
		}
	}
}

export const clientService = new ClientService();
