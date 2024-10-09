import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FC } from 'react';

export const InsuranceTypeSelect: FC<WidgetSelectProps> = (props) => {
	const { data: INSURANCE_TYPES } = useInsuranceTypesNames();
	return (
		<CustomSelectWithTitle title='Вид' items={INSURANCE_TYPES} {...props} />
	);
};
