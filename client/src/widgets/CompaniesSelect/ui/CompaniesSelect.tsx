import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';

import { FC } from 'react';

interface CompaniesSelectProps {
	onChangeHandler: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const CompaniesSelect: FC<CompaniesSelectProps> = (props) => {
	const { data: COMPANIES } = useInsuranceCompaniesNames();
	return <CustomSelectWithTitle title='СК' items={COMPANIES} {...props} />;
};
