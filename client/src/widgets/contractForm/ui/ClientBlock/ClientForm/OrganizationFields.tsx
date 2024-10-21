import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const OrganizationFields: FC = () => {
	const { control } = useFormContext();
	return (
		<>
			<Grid item xs={2}>
				<Typography>Название</Typography>
			</Grid>
			<Grid item xs={10}>
				<Controller
					name={FormFieldNamesMap.clientName}
					control={control}
					defaultValue={undefined}
					rules={{ required: 'Введите название организации' }}
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							error={error ? true : false}
							helperText={error?.message}
							{...field}
							value={field.value ?? ''}
						/>
					)}
				/>
			</Grid>
		</>
	);
};

export default OrganizationFields;
