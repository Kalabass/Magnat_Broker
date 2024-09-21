import instance from '../axiosInstance'
import { ItemData } from './bankService'

interface InsuranceCompaniesData {
	id: number
	name: string
	comment: string
}

class InsuranceCompanyService {
	private baseUrl = 'insuranceCompanies'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<InsuranceCompaniesData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all insurance companies')
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

export const insuranceCompanyService = new InsuranceCompanyService()
