import instance from '../axiosInstance'
import { ItemData } from './bankService'

interface InsuranceTypesData {
	id: number
	name: string
	comment: string
}

class InsuranceTypeService {
	private baseUrl = 'insuranceTypes'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<InsuranceTypesData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all insurance types')
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

export const insuranceTypeService = new InsuranceTypeService()
