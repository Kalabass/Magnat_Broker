import { blankService } from '@/shared/api/services/blankService'
import { BlankData } from '@/shared/stores/useBlankStore'
import { ClientData } from '@/shared/stores/useClientStore'
import { InsuranceObjectData } from '@/shared/stores/useInsuranceObjectStore'
import { useMutation } from '@tanstack/react-query'

export const useCreateBlankMutation = () => {
	return useMutation({
		mutationFn: ({
			client,
			insuranceObject,
			blank,
		}: {
			client: Partial<ClientData>
			insuranceObject: Partial<InsuranceObjectData>
			blank: Partial<BlankData>
		}) => {
			return blankService.create(blank, client, insuranceObject)
		},
		mutationKey: ['blanks', 'create'],
	})
}
