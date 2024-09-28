import { useBlankStore } from '@/shared/stores/useBlankStore'
import { CompaniesSelect } from '@/widgets/CompaniesSelect'
import { EmployeeSelect } from '@/widgets/EmployeeSelect'
import { FC } from 'react'
import TimeBlock from './TimeBLock'

const LeftBlock: FC = () => {
	const { updateBlankField } = useBlankStore()
	return (
		<>
			<TimeBlock />
			<CompaniesSelect
				onChangeHandler={value => updateBlankField('insuranceCompanyId', value)}
			/>
			<EmployeeSelect
				onChangeHandler={value => updateBlankField('employeeId', value)}
			/>
		</>
	)
}

export default LeftBlock
