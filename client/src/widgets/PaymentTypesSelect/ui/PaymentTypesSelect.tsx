import { usePaymentTypes } from '@/entities/paymentType';
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { WidgetSelectProps } from '@/widgets/CompaniesSelect/ui/CompaniesSelect';
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
			rules={{ required: 'Укажите тип оплаты' }}
		/>
	);
};
