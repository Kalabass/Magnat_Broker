import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'

import { useBlankStore } from '@/shared/stores/useBlankStore'
import { FC } from 'react'

export const CompaniesSelect: FC = () => {
	const { updateBlankField } = useBlankStore()
	const { data: COMPANIES } = useInsuranceCompaniesNames()
	return (
		<CustomSelectWithTitle
			title='СК'
			items={COMPANIES}
			onChangeHandler={value => {
				updateBlankField('insuranceCompanyId', value)
			}}
		/>
	)
}
