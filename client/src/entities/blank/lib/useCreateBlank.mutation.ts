import { blankService } from '@/shared/api/services/blankService';
import { MutationData } from '@/shared/model/blanksInterfaces';
import { useMutation } from '@tanstack/react-query';

export const useCreateBlankMutation = () => {
	return useMutation({
		mutationFn: (data: MutationData) => {
			return blankService.create(data);
		},
		mutationKey: ['blanks', 'create'],
	});
};
