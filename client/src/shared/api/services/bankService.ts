import instance from '../axiosInstance';

class BankService {
  private baseUrl = 'articles';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all articles');
      throw error;
    }
  }
}

export const bankService = new BankService();
