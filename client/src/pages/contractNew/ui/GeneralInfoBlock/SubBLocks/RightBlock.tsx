import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { MortgageType } from '@/shared/api/services/blankService';
import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import useIsMortgageType from '@/shared/lib/hooks/useIsMortgage';
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect';
import { SellingPointSelect } from '@/widgets/SellingPointSelect';
import { FC } from 'react';
import BlankNumberBlock from './BlankNumberBlock';

const MORTGAGE_TYPES: { id: MortgageType; name: MortgageType }[] = [
	{ id: 'Жизнь', name: 'Жизнь' },
	{ id: 'Жильё', name: 'Жильё' },
];

const RightBlock: FC = () => {
	const { data: BLANK_SERIES } = useBlankSeries();
	const isMortgageType = useIsMortgageType();

	return (
		<>
			<InsuranceTypeSelect />

			{isMortgageType && (
				<CustomSelectWithTitle
					title='Направление'
					label='Направление'
					items={MORTGAGE_TYPES}
					fieldName={FormFieldNamesMap.blankMortgageType}
					rules={{ required: true }}
				/>
			)}

			{BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
			<SellingPointSelect />
		</>
	);
};

export default RightBlock;
