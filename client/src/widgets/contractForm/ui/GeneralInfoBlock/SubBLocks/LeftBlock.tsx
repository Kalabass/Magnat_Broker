import { CompaniesSelect } from '@/widgets/CompaniesSelect';
import { EmployeeSelect } from '@/widgets/EmployeeSelect';
import { FC } from 'react';
import TimeBlock from './TimeBLock';

const LeftBlock: FC = () => {
	return (
		<>
			<TimeBlock />
			<CompaniesSelect rules={{ required: 'Выберите страховую компанию' }} />
			<EmployeeSelect rules={{ required: 'Выберите агента' }} />
		</>
	);
};

export default LeftBlock;
