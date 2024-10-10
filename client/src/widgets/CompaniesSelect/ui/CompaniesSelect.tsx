import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { CustomSelectWithTitleProps } from '@/features/CustomSelectWithTitle/ui/CustomSelectWithTitle';

import { FC } from 'react';

export interface WidgetSelectProps extends CustomSelectWithTitleProps {}

export const CompaniesSelect: FC<WidgetSelectProps> = (props) => {
	const { data: COMPANIES } = useInsuranceCompaniesNames();
	return <CustomSelectWithTitle {...props} title='СК' items={COMPANIES} />;
};
