import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { getDefaultDates } from '@/pages/contractNew/lib/dateUtils';
import { FC, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const TimeBlock: FC = () => {
	const [isMatches, setIsMatches] = useState(true);

	const { defaultStartDate, defaultEndDate } = getDefaultDates();
	const { control, setValue } = useFormContext();

	const activeDateStart = useWatch({
		control,
		name: FormFieldNamesMap.blankActiveDateStart,
	});
	const activeDateEnd = useWatch({
		control,
		name: FormFieldNamesMap.blankActiveDateEnd,
	});

	useEffect(() => {
		if (isMatches) {
			setValue('blankUseDateStart', activeDateStart || defaultStartDate);
			setValue('blankUseDateEnd', activeDateEnd || defaultEndDate);
		}
	}, [
		isMatches,
		activeDateStart,
		activeDateEnd,
		setValue,
		defaultStartDate,
		defaultEndDate,
	]);

	const onChangeHandler = () => {
		setIsMatches(!isMatches);
	};

	return <div>1</div>;
	// 	return (
	// 		<>
	// 			<Grid item xs={4}>
	// 				<Typography>Дата заключения</Typography>
	// 			</Grid>
	// 			<Grid item xs={4}>
	// 				<Controller
	// 					name={FormFieldNamesMap.blankConclusionDate}
	// 					control={control}
	// 					defaultValue={defaultStartDate}
	// 					rules={{ required: true }}
	// 					render={({ field, fieldState: { error } }) => (
	// 						<CustomTextFieldRef
	// 							type='date'
	// 							error={!!error}
	// 							helperText={error?.message}
	// 							{...field}
	// 							onChange={(e) => {
	// 								const dateValue = e.target.value;
	// 								if (dateValue) {
	// 									const parsedDate = new Date(dateValue);
	// 									if (!isNaN(parsedDate.getTime())) {
	// 										field.onChange(parsedDate);
	// 									} else {
	// 										field.onChange(null);
	// 									}
	// 								} else {
	// 									field.onChange(null);
	// 								}
	// 							}}
	// 							value={field.value ? field.value.toISOString().split('T')[0] : ''}
	// 						/>
	// 					)}
	// 				/>
	// 			</Grid>
	// 			<Grid item xs={4} />
	// 			<Grid item xs={4}>
	// 				<Typography>Срок действия</Typography>
	// 			</Grid>
	// 			<Grid item xs={4}>
	// 				<Controller
	// 					name={FormFieldNamesMap.blankActiveDateStart}
	// 					control={control}
	// 					defaultValue={defaultStartDate}
	// 					rules={{ required: true }}
	// 					render={({ field, fieldState: { error } }) => (
	// 						<CustomTextFieldRef
	// 							type='date'
	// 							error={!!error}
	// 							helperText={error?.message}
	// 							{...field}
	// 							onChange={(e) => {
	// 								const dateValue = e.target.value;
	// 								if (dateValue) {
	// 									const parsedDate = new Date(dateValue);
	// 									if (!isNaN(parsedDate.getTime())) {
	// 										field.onChange(parsedDate);
	// 									} else {
	// 										field.onChange(null);
	// 									}
	// 								} else {
	// 									field.onChange(null);
	// 								}
	// 							}}
	// 							value={field.value ? field.value.toISOString().split('T')[0] : ''}
	// 						/>
	// 					)}
	// 				/>
	// 			</Grid>
	// 			<Grid item xs={4}>
	// 				<Controller
	// 					name={FormFieldNamesMap.blankActiveDateEnd}
	// 					control={control}
	// 					defaultValue={defaultEndDate}
	// 					rules={{ required: true }}
	// 					render={({ field, fieldState: { error } }) => (
	// 						<CustomTextFieldRef
	// 							type='date'
	// 							error={!!error}
	// 							helperText={error?.message}
	// 							{...field}
	// 							onChange={(e) => {
	// 								const dateValue = e.target.value;
	// 								if (dateValue) {
	// 									const parsedDate = new Date(dateValue);
	// 									if (!isNaN(parsedDate.getTime())) {
	// 										field.onChange(parsedDate);
	// 									} else {
	// 										field.onChange(null);
	// 									}
	// 								} else {
	// 									field.onChange(null);
	// 								}
	// 							}}
	// 							value={field.value ? field.value.toISOString().split('T')[0] : ''}
	// 						/>
	// 					)}
	// 				/>
	// 			</Grid>
	// 			<Grid item xs={4}>
	// 				Равен периоду использования
	// 			</Grid>
	// 			<Grid item xs={8}>
	// 				<Checkbox checked={isMatches} onChange={onChangeHandler} />
	// 			</Grid>
	// 			{!isMatches && (
	// 				<>
	// 					<Grid item xs={4}>
	// 						<Typography>Период использования</Typography>
	// 					</Grid>
	// 					<Grid item xs={4}>
	// 						<Controller
	// 							name={FormFieldNamesMap.blankUseDateStart}
	// 							control={control}
	// 							defaultValue={defaultStartDate}
	// 							rules={{ required: true }}
	// 							render={({ field, fieldState: { error } }) => (
	// 								<CustomTextFieldRef
	// 									type='date'
	// 									error={!!error}
	// 									helperText={error?.message}
	// 									{...field}
	// 									onChange={(e) => {
	// 										const dateValue = e.target.value;
	// 										if (dateValue) {
	// 											const parsedDate = new Date(dateValue);
	// 											if (!isNaN(parsedDate.getTime())) {
	// 												field.onChange(parsedDate);
	// 											} else {
	// 												field.onChange(null);
	// 											}
	// 										} else {
	// 											field.onChange(null);
	// 										}
	// 									}}
	// 									value={
	// 										field.value ? field.value.toISOString().split('T')[0] : ''
	// 									}
	// 								/>
	// 							)}
	// 						/>
	// 					</Grid>
	// 					<Grid item xs={4}>
	// 						<Controller
	// 							name={FormFieldNamesMap.blankUseDateEnd}
	// 							control={control}
	// 							defaultValue={defaultEndDate}
	// 							rules={{ required: true }}
	// 							render={({ field, fieldState: { error } }) => (
	// 								<CustomTextFieldRef
	// 									type='date'
	// 									error={!!error}
	// 									helperText={error?.message}
	// 									{...field}
	// 									onChange={(e) => {
	// 										const dateValue = e.target.value;
	// 										if (dateValue) {
	// 											const parsedDate = new Date(dateValue);
	// 											if (!isNaN(parsedDate.getTime())) {
	// 												field.onChange(parsedDate);
	// 											} else {
	// 												field.onChange(null);
	// 											}
	// 										} else {
	// 											field.onChange(null);
	// 										}
	// 									}}
	// 									value={
	// 										field.value ? field.value.toISOString().split('T')[0] : ''
	// 									}
	// 								/>
	// 							)}
	// 						/>
	// 					</Grid>
	// 				</>
	// 			)}
	// 		</>
	// 	);
};

export default TimeBlock;
