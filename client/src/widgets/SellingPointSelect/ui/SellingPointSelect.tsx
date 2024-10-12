import { useSellingPointsNames } from '@/entities/sellingPoint';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FC } from 'react';

export const SellingPointSelect: FC<WidgetSelectProps> = (props) => {
	const { data: SELLING_POINTS } = useSellingPointsNames();
	return (
		<CustomSelectWithTitle
			{...props}
			title='Точка продажи'
			label='Точка продажи'
			items={SELLING_POINTS}
			fieldName={FormFieldNamesMap.blankSellingPointId}
			rules={{ required: 'Укажите точку продажи' }}
		/>
	);
};
