import { useSellingPointsNames } from '@/entities/sellingPoint';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
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
		/>
	);
};
