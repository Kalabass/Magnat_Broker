import { useEmployeesNames } from '@/entities/employee';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';

import { FC } from 'react';

export const EmployeeSelect: FC<WidgetSelectProps> = (props) => {
	const { data: AGENTS } = useEmployeesNames();

	return <CustomSelectWithTitle title='Агент' items={AGENTS} {...props} />;
};
