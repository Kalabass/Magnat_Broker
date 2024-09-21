import { ClientData } from '@/shared/stores/useClientStore'
import instance from '../axiosInstance'

export interface clientData {
	id: number
	dateOfBirth: Date
	phone: string
	inn: number //TODO: в постмане показывает, что возвращается строка, хотя должен number почему строка?
	address: string
	series: number
	number: number
	comment: string
}

class ClientService {
	private baseUrl = 'clients'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<ClientData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all clients')
			throw error
		}
	}
}

export const clientService = new ClientService()
