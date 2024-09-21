import instance from '../axiosInstance'
import { ItemData } from './bankService'

interface employeesData {
	id: number
	name: string
	login: string
	password: string
	comment: string
	isActive: boolean
	series: number
	number: number
}

class EmployeeService {
	private baseUrl = 'employees'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<employeesData[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all employees')
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

export const employeeService = new EmployeeService()
