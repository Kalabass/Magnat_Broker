import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { FC } from 'react';

export const InsuranceTypeSelect: FC<WidgetSelectProps> = (props) => {
	const { data: INSURANCE_TYPES } = useInsuranceTypesNames();

	return (
		<CustomSelectWithTitle
			{...props}
			title='Вид'
			label='Вид'
			items={INSURANCE_TYPES}
			fieldName={FormFieldNamesMap.blankInsuranceTypeId}
		/>
	);
};
