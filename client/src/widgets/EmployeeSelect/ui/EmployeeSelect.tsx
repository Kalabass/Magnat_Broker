import { useEmployeesNames } from '@/entities/employee';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';

import { FC } from 'react';

interface EmployeeSelectProps {
	onChangeHandler: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const EmployeeSelect: FC<EmployeeSelectProps> = (props) => {
	const { data: AGENTS } = useEmployeesNames();

	return <CustomSelectWithTitle title='Агент' items={AGENTS} {...props} />;
};
