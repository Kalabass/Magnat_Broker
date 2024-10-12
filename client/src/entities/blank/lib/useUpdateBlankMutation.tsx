import { blankService } from '@/shared/api/services/blankService';
import { useMutation } from '@tanstack/react-query';
import { IMutationData } from './useCreateBlank.mutation';

export const useUpdateBlankMutation = () => {
	return useMutation({
		mutationFn: ({
			id,
			data,
		}: {
			id: number;
			data: Partial<IMutationData>;
		}) => {
			return blankService.update(id, data);
		},
		mutationKey: ['blanks', 'update'],
	});
};
