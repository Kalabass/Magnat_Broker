import instance from '../axiosInstance';

class InsuranceTypeService {
  private baseUrl = 'insurance-types';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all insurance types');
      throw error;
    }
  }
}

export const insuranceTypeService = new InsuranceTypeService();
