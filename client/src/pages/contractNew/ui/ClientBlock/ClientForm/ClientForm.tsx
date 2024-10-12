import { CustomToggle } from '@/features/ClientTypeToggle';
import { CLIENT_TYPES } from '@/pages/contractNew/constants/clinetTypes.const';

import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import useIsCashPaymentType from '@/shared/lib/hooks/useIsCashPaymentType';
import useIsLegal from '@/shared/lib/hooks/useIsLegal';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import IndividualFields from './IndividualFields';
import OrganizationFields from './OrganizationFields';

const ClientForm: FC = () => {
	const { control } = useFormContext();
	const isLegal = useIsLegal();
	const isCash = useIsCashPaymentType();

	return (
		<Box component={'section'}>
			<Grid
				item
				container
				spacing={1}
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12}>
					<CustomToggle items={CLIENT_TYPES} />
				</Grid>

				{isLegal ? <OrganizationFields /> : <IndividualFields />}

				<Grid item xs={2}>
					<Typography>Номер телефона</Typography>
				</Grid>
				<Grid item xs={4}>
					<Controller
						name={FormFieldNamesMap.clientPhoneNumber}
						control={control}
						defaultValue={undefined}
						render={({ field }) => (
							<CustomTextFieldRef
								type='tel'
								{...field}
								value={field.value ?? ''}
							/>
						)}
					/>
				</Grid>

				<Grid item xs={6} />

				<Grid item xs={2}>
					<Typography>ИНН</Typography>
				</Grid>
				<Grid item xs={4}>
					<Controller
						name={FormFieldNamesMap.clientINN}
						control={control}
						defaultValue={undefined}
						rules={{
							minLength: {
								value: 10,
								message: 'минимальная длина ИНН 10 символов',
							},
							maxLength: {
								value: 12,
								message: 'Максимальная длина ИНН 12 символов',
							},
							required: isCash,
						}}
						render={({ field, fieldState: { error } }) => (
							<CustomTextFieldRef
								type='number'
								error={!!error}
								helperText={error?.message}
								{...field}
							/>
						)}
					/>
				</Grid>

				<Grid item xs={6} />

				<Grid item xs={2}>
					<Typography>Адрес</Typography>
				</Grid>
				<Grid item xs={10}>
					<Controller
						defaultValue={undefined}
						name={FormFieldNamesMap.clientAddress}
						control={control}
						render={({ field }) => (
							<CustomTextFieldRef {...field} value={field.value ?? ''} />
						)}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ClientForm;
