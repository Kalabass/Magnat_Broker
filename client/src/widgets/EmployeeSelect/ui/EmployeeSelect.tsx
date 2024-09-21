import { useEmployeesNames } from '@/entities/employee'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'

import { useBlankStore } from '@/shared/stores/useBlankStore'
import { FC } from 'react'

export const EmployeeSelect: FC = () => {
	const { data: AGENTS } = useEmployeesNames()
	const { updateBlankField } = useBlankStore()

	return (
		<CustomSelectWithTitle
			title='Агент'
			items={AGENTS}
			onChangeHandler={value => {
				updateBlankField('employeeId', value)
			}}
		/>
	)
}
