import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
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
			rules={{ required: 'Укажите вид ' }}
		/>
	);
};
