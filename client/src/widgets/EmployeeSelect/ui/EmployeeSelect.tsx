import { useEmployeesNames } from '@/entities/employee';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';

import { FC } from 'react';

export const EmployeeSelect: FC<WidgetSelectProps> = (props) => {
	const { data: AGENTS } = useEmployeesNames();

	return (
		<CustomSelectWithTitle
			{...props}
			title='Агент'
			label='Агент'
			items={AGENTS}
			fieldName={FormFieldNamesMap.blankEmployeeId}
		/>
	);
};
