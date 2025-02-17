import useIsCashPaymentType from '@/shared/lib/hooks/useIsCashPaymentType';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const IndividualFields: FC = () => {
	const { control } = useFormContext();
	const isCash = useIsCashPaymentType();
	return (
		<>
			<Grid item xs={2}>
				<Typography>ФИО</Typography>
			</Grid>
			<Grid item xs={8} width={'100%'}>
				<Controller
					name={FormFieldNamesMap.clientName}
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
					name={FormFieldNamesMap.clientBirthDate}
					control={control}
					defaultValue={undefined}
					rules={{ required: isCash && true }}
					render={({ field }) => (
						<CustomTextFieldRef
							type='date'
							{...field}
							onChange={(e) => {
								const dateValue = e.target.value;
								if (dateValue) {
									const parsedDate = new Date(dateValue);
									if (!isNaN(parsedDate.getTime())) {
										field.onChange(parsedDate);
									} else {
										field.onChange(null);
									}
								} else {
									field.onChange(null);
								}
							}}
							value={field.value ? field.value.toISOString().split('T')[0] : ''}
						/>
					)}
				/>
			</Grid>

			<Grid item xs={2}>
				<Typography>Паспорт</Typography>
			</Grid>
			<Grid item xs={1}>
				<Controller
					name={FormFieldNamesMap.clientPassportSeries}
					control={control}
					defaultValue={undefined}
					rules={{
						required: isCash && true,
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
					name={FormFieldNamesMap.clientPassportNumber}
					control={control}
					defaultValue={undefined}
					rules={{ minLength: 6, maxLength: 6, required: isCash && true }}
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
