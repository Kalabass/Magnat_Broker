import { handleError } from '@/shared/lib/utils/errorHandler';
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
			handleError(error, 'Failed to login');
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
			handleError(error, 'Failed to refresh tokens');
			throw error;
		}
	}
}

export const authService = new AuthService();
