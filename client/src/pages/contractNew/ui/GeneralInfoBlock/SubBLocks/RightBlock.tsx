import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import { FC } from 'react';

import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect';
import { SellingPointSelect } from '@/widgets/SellingPointSelect';
import { itemData } from '../GeneralInfoBlock';
import BlankNumberBlock from './BlankNumberBlock';

const MORTGAGE_TYPES: itemData[] = [
	{ id: 0, name: 'жизнь' },
	{ id: 1, name: 'жилье' },
];

const RightBlock: FC = () => {
	const { data: BLANK_SERIES } = useBlankSeries();

	return (
		<>
			{/* FIXME: вынести ИПОТЕКА в константы */}
			{/* FIXME: подумать что делать с перерисовками */}
			<InsuranceTypeSelect />
			{/* TODO: проверка на ипотэку суда */}

			<CustomSelectWithTitle
				title='Направление'
				label='Направление'
				items={MORTGAGE_TYPES}
				fieldName={FormFieldNamesMap.blankMortgageTypeId}
				rules={{ required: true }}
			/>

			{BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
			<SellingPointSelect />
		</>
	);
};

export default RightBlock;
