import { getDefaultDates } from '@/pages/contractNew/lib/dateUtils';
import { formatDateToISO } from '@/pages/contractNew/lib/formatDate';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Checkbox, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

const TimeBlock: FC = () => {
	const [isMatches, setIsMatches] = useState(true);

	const { defaultStartDate, defaultEndDate } = getDefaultDates();
	const { control, setValue } = useFormContext();

	// Следим за полями activeDateStart и activeDateEnd
	const activeDateStart = useWatch({ control, name: 'activeDateStart' });
	const activeDateEnd = useWatch({ control, name: 'activeDateEnd' });

	// Обновляем поля useDateStart и useDateEnd при изменении activeDateStart, activeDateEnd и isMatches
	useEffect(() => {
		if (isMatches) {
			setValue('useDateStart', activeDateStart);
			setValue('useDateEnd', activeDateEnd);
		}
	}, [isMatches, activeDateStart, activeDateEnd, setValue]);

	const onChangeHandler = () => {
		setIsMatches(!isMatches);
	};

	return (
		<>
			<Grid item xs={4}>
				<Typography>Дата заключения</Typography>
			</Grid>
			<Grid item xs={4}>
				<Controller
					name='conclusionDate'
					control={control}
					defaultValue={formatDateToISO(defaultStartDate)}
					rules={{ required: true }}
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							type='date'
							error={!!error}
							helperText={error?.message}
							{...field}
						/>
					)}
				/>
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={4}>
				<Typography>Срок действия</Typography>
			</Grid>
			<Grid item xs={4}>
				<Controller
					name='activeDateStart'
					control={control}
					defaultValue={formatDateToISO(defaultStartDate)}
					rules={{ required: true }}
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							type='date'
							error={!!error}
							helperText={error?.message}
							{...field}
						/>
					)}
				/>
			</Grid>
			<Grid item xs={4}>
				<Controller
					name='activeDateEnd'
					control={control}
					defaultValue={formatDateToISO(defaultEndDate)}
					rules={{ required: true }}
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							type='date'
							error={!!error}
							helperText={error?.message}
							{...field}
						/>
					)}
				/>
			</Grid>
			<Grid item xs={4}>
				Равен периоду использования
			</Grid>
			<Grid item xs={8}>
				<Checkbox checked={isMatches} onChange={onChangeHandler} />
			</Grid>
			{!isMatches && (
				<>
					<Grid item xs={4}>
						<Typography>Период использования</Typography>
					</Grid>
					<Grid item xs={4}>
						<Controller
							name='useDateStart'
							control={control}
							defaultValue={formatDateToISO(defaultStartDate)}
							rules={{ required: true }}
							render={({ field, fieldState: { error } }) => (
								<CustomTextFieldRef
									type='date'
									error={!!error}
									helperText={error?.message}
									{...field}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							name='useDateEnd'
							control={control}
							defaultValue={formatDateToISO(defaultEndDate)}
							rules={{ required: true }}
							render={({ field, fieldState: { error } }) => (
								<CustomTextFieldRef
									type='date'
									error={!!error}
									helperText={error?.message}
									{...field}
								/>
							)}
						/>
					</Grid>
				</>
			)}
		</>
	);
};

export default TimeBlock;
