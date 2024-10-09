import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';

import { FC } from 'react';

export interface WidgetSelectProps {
	onChangeHandler?: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const CompaniesSelect: FC<WidgetSelectProps> = (props) => {
	const { data: COMPANIES } = useInsuranceCompaniesNames();
	return <CustomSelectWithTitle title='СК' items={COMPANIES} {...props} />;
};
