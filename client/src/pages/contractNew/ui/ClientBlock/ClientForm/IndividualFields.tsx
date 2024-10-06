import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const IndividualFields: FC = () => {
	const { control } = useFormContext();
	return (
		<>
			<Grid item xs={2}>
				<Typography>ФИО</Typography>
			</Grid>
			<Grid item xs={8} width={'100%'}>
				<Controller
					name='name'
					control={control}
					rules={{ required: 'Введите имя' }}
					defaultValue={undefined}
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							error={!!error}
							helperText={error?.message}
							{...field}
							value={field.value ?? ''}
						/>
					)}
				/>
			</Grid>
			<Grid item xs={2}>
				<Controller
					name='date'
					control={control}
					render={({ field }) => (
						<CustomTextFieldRef
							type='date'
							{...field}
							value={field.value ?? ''}
						/>
					)}
				/>
			</Grid>

			{/*TODO: сделать обязательными, когда тип оплаты наличные  */}
			<Grid item xs={2}>
				<Typography>Паспорт</Typography>
			</Grid>
			<Grid item xs={1}>
				<Controller
					name='passportSeries'
					control={control}
					defaultValue={undefined}
					rules={{
						maxLength: {
							value: 4,
							message: '',
						},
						minLength: {
							value: 4,
							message: '',
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
			<Grid item xs={3}>
				<Controller
					name='passportNumber'
					control={control}
					defaultValue={undefined}
					rules={{ minLength: 6, maxLength: 6 }}
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
		</>
	);
};

export default IndividualFields;
