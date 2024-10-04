import { employeeService } from '@/shared/api/services/employeeService';
import { setTokenToLocalStorage } from '@/shared/lib/localStorage/tokenStorage';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (props: { login: string; password: string }) =>
			employeeService.login(props.login, props.password),
		mutationKey: ['employees', 'login'],
		onSuccess: (data) => {
			setTokenToLocalStorage(data.access_token);
		},
	});
};
