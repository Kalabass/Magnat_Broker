import { usePaymentTypes } from '@/entities/paymentType';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { FC } from 'react';

export const PaymentTypesSelect: FC<WidgetSelectProps> = (props) => {
	const { data: PAYMENT_TYPES } = usePaymentTypes();
	return (
		<CustomSelectWithTitle
			{...props}
			title='Способ оплаты'
			label='Способ оплаты'
			items={PAYMENT_TYPES}
			fieldName={FormFieldNamesMap.blankPaymentTypeId}
		/>
	);
};
