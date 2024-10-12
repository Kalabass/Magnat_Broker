import { usePaymentTypes } from '@/entities/paymentType';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useIsCashPaymentType = () => {
	const { watch } = useFormContext();
	const paymentTypeId = watch(FormFieldNamesMap.blankPaymentTypeId);
	const { data: paymentTypesData } = usePaymentTypes();

	const [isCash, setIsCash] = useState(false);

	useEffect(() => {
		if (paymentTypesData) {
			const selectedPaymentType = paymentTypesData.find(
				(paymentType) => paymentType.id === paymentTypeId
			);
			setIsCash(selectedPaymentType?.name.toLowerCase() === 'наличные');
		}
	}, [paymentTypeId, paymentTypesData]);

	return isCash;
};

export default useIsCashPaymentType;
