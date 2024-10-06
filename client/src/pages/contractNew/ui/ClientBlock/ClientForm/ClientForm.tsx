import { CustomToggle } from '@/features/ClientTypeToggle';
import { CLIENT_TYPES } from '@/pages/contractNew/constants/clinetTypes.const';
import { useClientStore } from '@/shared/stores/useClientStore';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Box, Grid, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import IndividualFields from './IndividualFields';
import OrganizationFields from './OrganizationFields';

const ClientForm: FC = () => {
	const { updateClientField, getClient } = useClientStore();
	const { control } = useFormContext();
	const client = getClient();
	useEffect(() => {
		updateClientField('isIndividual', true);
	}, []);

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
					<CustomToggle
						items={CLIENT_TYPES}
						onClick={(value) => updateClientField('isIndividual', value)}
					/>
				</Grid>

				{client.isIndividual ? <IndividualFields /> : <OrganizationFields />}

				<Grid item xs={2}>
					<Typography>Номер телефона</Typography>
				</Grid>
				<Grid item xs={4}>
					<Controller
						name='phoneNumber'
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

				{/*TODO: сделать обязательным, когда тип оплаты наличные  */}
				<Grid item xs={2}>
					<Typography>ИНН</Typography>
				</Grid>
				<Grid item xs={4}>
					<Controller
						name='INN'
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
						}}
						render={({ field, fieldState: { error } }) => (
							<CustomTextFieldRef
								type='number'
								error={!!error}
								helperText={error?.message}
								{...field}
								value={field.value ?? ''}
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
						name='address'
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
