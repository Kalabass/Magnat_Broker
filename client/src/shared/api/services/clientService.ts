import instance from '../axiosInstance';

class ClientService {
  private baseUrl = 'clients';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll() {
    try {
      const response = await instance.get(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all clients');
      throw error;
    }
  }
}

export const clientService = new ClientService();
