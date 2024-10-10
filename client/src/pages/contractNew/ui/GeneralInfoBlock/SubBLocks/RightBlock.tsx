import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import { FC } from 'react';

import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect';
import { SellingPointSelect } from '@/widgets/SellingPointSelect';
import { Controller, useFormContext } from 'react-hook-form';
import { itemData } from '../GeneralInfoBlock';
import BlankNumberBlock from './BlankNumberBlock';

const MORTGAGE_TYPES: itemData[] = [
	{ id: 0, name: 'жизнь' },
	{ id: 1, name: 'жилье' },
];

const RightBlock: FC = () => {
	const { data: BLANK_SERIES } = useBlankSeries();

	const { control } = useFormContext();

	return (
		<>
			{/* FIXME: вынести ИПОТЕКА в константы */}
			{/* FIXME: подумать что делать с перерисовками */}
			<Controller
				name={FormFieldNamesMap.blankInsuranceTypeId}
				control={control}
				rules={{ required: 'Выберите тип страховки' }}
				render={({ field, fieldState: { error } }) => (
					<InsuranceTypeSelect
						{...field}
						error={error ? true : false}
						formHelperText={error?.message}
					/>
				)}
			/>
			{/* TODO: проверка на ипотэку суда */}
			<Controller
				name={FormFieldNamesMap.blankMortgageTypeId}
				control={control}
				rules={{ required: 'Выберите направление' }}
				render={({ field, fieldState: { error } }) => (
					<CustomSelectWithTitle
						{...field}
						error={!!error}
						formHelperText={error?.message}
						title='Направление'
						items={MORTGAGE_TYPES}
					/>
				)}
			/>
			{BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
			<Controller
				name={FormFieldNamesMap.blankSellingPointId}
				control={control}
				rules={{ required: 'Выберите точку продажи' }}
				render={({ field, fieldState: { error } }) => (
					<SellingPointSelect
						{...field}
						error={!!error}
						formHelperText={error?.message}
					/>
				)}
			/>
		</>
	);
};

export default RightBlock;
