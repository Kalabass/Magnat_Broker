import instance from '../axiosInstance'

interface BankData {
	id: number
	name: string
	comment: string
}

export interface ItemData {
	id: number
	name: string
}

class BankService {
	private baseUrl = 'banks'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<BankData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all banks')
			throw error
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(this.baseUrl + '/names')
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all bank names')
			throw error
		}
	}
}

export const bankService = new BankService()
