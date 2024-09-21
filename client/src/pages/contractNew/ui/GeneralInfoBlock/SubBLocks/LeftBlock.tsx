import { CompaniesSelect } from '@/widgets/CompaniesSelect'
import { EmployeeSelect } from '@/widgets/EmployeeSelect'
import { FC } from 'react'
import TimeBlock from './TimeBLock'

const LeftBlock: FC = () => {
	return (
		<>
			<TimeBlock />
			<CompaniesSelect />
			<EmployeeSelect />
		</>
	)
}

export default LeftBlock
