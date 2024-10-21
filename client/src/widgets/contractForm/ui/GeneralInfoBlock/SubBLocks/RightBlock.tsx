import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';

import useIsMortgageType from '@/shared/lib/hooks/useIsMortgage';
import { MORTGAGE_TYPES } from '@/widgets/contractForm/constants/mortgageTypes';
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect';
import { SellingPointSelect } from '@/widgets/SellingPointSelect';
import { FC } from 'react';
import BlankNumberBlock from './BlankNumberBlock';

const RightBlock: FC = () => {
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

			<BlankNumberBlock />
			<SellingPointSelect />
		</>
	);
};

export default RightBlock;
