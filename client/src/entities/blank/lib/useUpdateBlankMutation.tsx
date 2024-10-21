import { blankService } from '@/shared/api/services/blankService';
import { MutationData } from '@/shared/model/blanksInterfaces';
import { useMutation } from '@tanstack/react-query';

export const useUpdateBlankMutation = () => {
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: Partial<MutationData> }) => {
			return blankService.update(id, data);
		},
		mutationKey: ['blanks', 'update'],
	});
};
