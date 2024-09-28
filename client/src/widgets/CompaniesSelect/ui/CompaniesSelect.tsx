import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'

import { FC } from 'react'

interface CompaniesSelectProps {
	onChangeHandler: (value: number | undefined) => void
}

export const CompaniesSelect: FC<CompaniesSelectProps> = ({
	onChangeHandler,
}) => {
	const { data: COMPANIES } = useInsuranceCompaniesNames()
	return (
		<CustomSelectWithTitle
			title='СК'
			items={COMPANIES}
			onChangeHandler={onChangeHandler}
		/>
	)
}
