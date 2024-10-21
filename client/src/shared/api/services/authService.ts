import { API_ENDPOINTS } from '../../const/APIEndpoints';
import { tokenRefreshInstance } from '../axiosInstance';

interface TokenData {
	access_token: string;
}

class AuthService {
	async login(login: string, password: string): Promise<TokenData> {
		try {
			const response = await tokenRefreshInstance.post(
				API_ENDPOINTS.AUTH.LOGIN,
				{
					login,
					password,
				}
			);

			return response.data;
		} catch (error) {
			console.error('Failed to Login', error);
			throw error;
		}
	}

	async refresh(): Promise<TokenData> {
		try {
			const response = await tokenRefreshInstance.post(
				API_ENDPOINTS.AUTH.REFRESH_TOKENS
			);
			return response.data;
		} catch (error) {
			console.error('Failed to refresh tokens', error);
			throw error;
		}
	}
}

export const authService = new AuthService();
