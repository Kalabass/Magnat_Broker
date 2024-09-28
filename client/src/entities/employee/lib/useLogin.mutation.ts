import { employeeService } from '@/shared/api/services/employeeService';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
	return useMutation({
		mutationFn: (props: { login: string; password: string }) =>
			employeeService.login(props.login, props.password),
		mutationKey: ['employees', 'login'],
	});
};
