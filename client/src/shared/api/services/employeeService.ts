import instance, { tokenRefreshInstance } from '../axiosInstance';
import { ItemData } from './bankService';

interface employeesData {
	id: number;
	name: string;
	login: string;
	password: string;
	comment: string;
	isActive: boolean;
	series: number;
	number: number;
}

class EmployeeService {
	private baseUrl = 'employees';

	private handleError(error: any, message: string) {
		console.error(message, error);
	}

	async findAll(): Promise<employeesData[]> {
		try {
			const response = await instance.get(this.baseUrl);
			return response.data;
		} catch (error) {
			this.handleError(error, 'Failed to fetch all employees');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(this.baseUrl + '/names');
			return response.data;
		} catch (error) {
			this.handleError(error, 'Failed to fetch all articles');
			throw error;
		}
	}

	async login(
		login: string,
		password: string
	): Promise<{ access_token: string }> {
		try {
			const response = await tokenRefreshInstance.post('auth/login', {
				login,
				password,
			});

			return response.data;
		} catch (error) {
			this.handleError(error, 'Failed to login');
			throw error;
		}
	}

	async refresh(): Promise<{ access_token: string }> {
		try {
			const response = await tokenRefreshInstance.post('auth/refreshTokens');
			return response.data;
		} catch (error) {
			this.handleError(error, 'Failed to refresh tokens');
			throw error;
		}
	}
}

export const employeeService = new EmployeeService();
