import { authService } from '@/shared/api/services/authService';
import { setTokenToLocalStorage } from '@/shared/lib/localStorage/tokenStorage';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: ({ login, password }: { login: string; password: string }) =>
			authService.login(login, password),
		mutationKey: ['employees', 'login'],
		onSuccess: (data) => {
			setTokenToLocalStorage(data.access_token);
		},
	});
};
