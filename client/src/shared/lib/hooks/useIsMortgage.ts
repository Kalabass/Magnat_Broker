import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useIsMortgageType = () => {
	const { watch } = useFormContext();
	const insuranceTypeId = watch(FormFieldNamesMap.blankInsuranceTypeId);

	const insuranceTypesQuery = useInsuranceTypesNames();
	const [isMortgage, setIsMortgage] = useState(false);

	useEffect(() => {
		if (insuranceTypesQuery.data) {
			const selectedInsuranceType = insuranceTypesQuery.data.find(
				(insuranceType) => insuranceType.id === insuranceTypeId
			);
			setIsMortgage(selectedInsuranceType?.name.toLowerCase() === 'ипотека');
		}
	}, [insuranceTypeId, insuranceTypesQuery.data]);

	return isMortgage;
};

export default useIsMortgageType;
