import { useSellingPointsNames } from '@/entities/sellingPoint';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FC } from 'react';

interface SellingPointSelectProps {
	onChangeHandler: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const SellingPointSelect: FC<SellingPointSelectProps> = (props) => {
	const { data: SELLING_POINTS } = useSellingPointsNames();
	return (
		<CustomSelectWithTitle
			title='Точка продажи'
			items={SELLING_POINTS}
			{...props}
		/>
	);
};
