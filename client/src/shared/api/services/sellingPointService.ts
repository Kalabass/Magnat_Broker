import instance from '../axiosInstance';

class SellingPointService {
  private baseUrl = 'sellingPoints';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all selling points');
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

export const sellingPointService = new SellingPointService();
