import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import { useBlankStore } from '@/shared/stores/useBlankStore';
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
	const { getBlank, updateBlankField } = useBlankStore();
	const blank = getBlank();
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
				render={({ field: { onChange }, fieldState: { error } }) => (
					<InsuranceTypeSelect
						error={error ? true : false}
						formHelperText={error?.message}
						onChangeHandler={(value) => {
							onChange(value);
							updateBlankField('insuranceTypeId', value);
						}}
					/>
				)}
			/>

			{blank.insuranceTypeId === 4 && (
				<Controller
					name={FormFieldNamesMap.blankMortgageTypeId}
					control={control}
					rules={{ required: 'Выберите направление' }}
					render={({ field: { onChange }, fieldState: { error } }) => (
						<CustomSelectWithTitle
							error={!!error}
							formHelperText={error?.message}
							title='Направление'
							items={MORTGAGE_TYPES}
							onChangeHandler={(value) => {
								onChange(value);
								updateBlankField('mortgageType', value);
							}}
						/>
					)}
				/>
			)}

			{BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
			<Controller
				name={FormFieldNamesMap.blankSellingPointId}
				control={control}
				rules={{ required: 'Выберите точку продажи' }}
				render={({ field: { onChange }, fieldState: { error } }) => (
					<SellingPointSelect
						error={!!error}
						formHelperText={error?.message}
						onChangeHandler={(selectedValue) => {
							onChange(selectedValue);
							updateBlankField('sellingPointId', selectedValue);
						}}
					/>
				)}
			/>
		</>
	);
};

export default RightBlock;
