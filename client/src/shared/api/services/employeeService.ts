import instance from '../axiosInstance';

class EmployeeService {
  private baseUrl = 'employees';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all employees');
      throw error;
    }
  }

  async findAllNames() {
    try {
      const response = await instance.get(this.baseUrl + '/names');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all articles');
      throw error;
    }
  }
}

export const employeeService = new EmployeeService();
