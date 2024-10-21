import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import {
	CustomSelectWithTitle,
	CustomSelectWithTitleProps,
} from '@/features/CustomSelectWithTitle/ui/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';

import { FC } from 'react';

export interface WidgetSelectProps extends CustomSelectWithTitleProps {}

export const CompaniesSelect: FC<WidgetSelectProps> = (props) => {
	const { data: COMPANIES } = useInsuranceCompaniesNames();
	return (
		<CustomSelectWithTitle
			{...props}
			title='СК'
			label='СК'
			items={COMPANIES}
			fieldName={FormFieldNamesMap.blankInsuranceCompanyId}
		/>
	);
};
