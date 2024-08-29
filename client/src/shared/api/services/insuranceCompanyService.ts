import instance from '../axiosInstance';

class InsuranceCompanyService {
  private baseUrl = 'insurance-companies';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all insurance companies');
      throw error;
    }
  }
}

export const insuranceCompanyService = new InsuranceCompanyService();
