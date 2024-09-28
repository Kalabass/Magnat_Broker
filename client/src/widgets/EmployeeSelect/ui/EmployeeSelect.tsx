import { useEmployeesNames } from '@/entities/employee'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'

import { FC } from 'react'

interface EmployeeSelectProps {
	onChangeHandler: (value: number) => void
}

export const EmployeeSelect: FC<EmployeeSelectProps> = ({
	onChangeHandler,
}) => {
	const { data: AGENTS } = useEmployeesNames()

	return (
		<CustomSelectWithTitle
			title='Агент'
			items={AGENTS}
			onChangeHandler={onChangeHandler}
		/>
	)
}
