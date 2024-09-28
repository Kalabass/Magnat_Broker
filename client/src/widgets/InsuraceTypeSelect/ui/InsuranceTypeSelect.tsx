import { useInsuranceTypesNames } from '@/entities/insuranceType'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'
import { FC } from 'react'

export interface InsuranceTypeSelectProps {
	onChangeHandler: (value: number | undefined) => void
}

export const InsuranceTypeSelect: FC<InsuranceTypeSelectProps> = ({
	onChangeHandler,
}) => {
	const { data: INSURANCE_TYPES } = useInsuranceTypesNames()
	return (
		<CustomSelectWithTitle
			title='Вид'
			items={INSURANCE_TYPES}
			onChangeHandler={onChangeHandler}
		/>
	)
}
