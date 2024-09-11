import instance from '../axiosInstance';

class BankService {
  private baseUrl = 'banks';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all banks');
      throw error;
    }
  }

  async findAllNames() {
    try {
      const response = await instance.get(this.baseUrl + '/names');
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all bank names');
      throw error;
    }
  }
}

export const bankService = new BankService();
