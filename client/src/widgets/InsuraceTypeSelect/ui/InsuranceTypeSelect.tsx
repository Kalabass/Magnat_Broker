import { useInsuranceTypesNames } from '@/entities/insuranceType'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'
import { useBlankStore } from '@/shared/stores/useBlankStore'
import { FC } from 'react'

export const InsuranceTypeSelect: FC = () => {
	const { updateBlankField } = useBlankStore()
	const { data: INSURANCE_TYPES } = useInsuranceTypesNames()
	return (
		<CustomSelectWithTitle
			title='Вид'
			items={INSURANCE_TYPES}
			onChangeHandler={value => {
				updateBlankField('insuranceTypeId', value)
			}}
		/>
	)
}
