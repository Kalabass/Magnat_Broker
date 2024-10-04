import { handleError } from '@/shared/lib/utils/errorHandler';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

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
	async findAll(): Promise<employeesData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.EMPLOYEE.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all employees');
			throw error;
		}
	}

	async findAllNames(): Promise<ItemData[]> {
		try {
			const response = await instance.get(
				API_ENDPOINTS.EMPLOYEE.FIND_ALL_NAMES
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all employee names');
			throw error;
		}
	}
}

export const employeeService = new EmployeeService();
