import instance from '../axiosInstance'
import { ItemData } from './bankService'

class BlankSeriesService {
	private baseUrl = 'blankSeries'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<ItemData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all blank series ')
			throw error
		}
	}
}

export const blankSeriesService = new BlankSeriesService()
