import instance from '../axiosInstance'
import { ItemData } from './bankService'

interface SellingPointsData {
	id: number
	name: string
	comment: string
	isActive: boolean
}

class SellingPointService {
	private baseUrl = 'sellingPoints'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<SellingPointsData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all selling points')
			throw error
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(this.baseUrl + '/names')
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all articles')
			throw error
		}
	}
}

export const sellingPointService = new SellingPointService()
