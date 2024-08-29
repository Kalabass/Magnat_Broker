import instance from '../axiosInstance';

class SellingPointService {
  private baseUrl = 'selling-points';

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
}

export const sellingPointService = new SellingPointService();
