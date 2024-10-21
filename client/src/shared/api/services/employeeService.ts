import { EmployeeData } from '@/shared/model/employeeInterfaces';
import { ItemData } from '@/shared/model/interface';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class EmployeeService {
	async findAll(): Promise<EmployeeData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.EMPLOYEE.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all employees');
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
			console.error(error, 'Failed to fetch all employee names');
			throw error;
		}
	}
}

export const employeeService = new EmployeeService();
