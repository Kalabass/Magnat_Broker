import { getDefaultDates } from '@/pages/contractNew/lib/dateUtils';
import { formatDateToISO } from '@/pages/contractNew/lib/formatDate';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Checkbox, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

// TODO: добавить кнопки для указания периода использования(год, 10 мес, 6 мес и тд)
// TODO: добавить автоматическую дату при пролонгации полиса
//TODO: слишком много екшенов  в редаксе

const TimeBlock: FC = () => {
	const [isMatches, setIsMatches] = useState(true);
	const { updateBlankField, getBlank } = useBlankStore();
	const blank = getBlank();
	const { defaultStartDate, defaultEndDate } = getDefaultDates();

	const checkBoxOnChangeHandler = () => {
		if (!isMatches) {
			updateBlankField('useDateStart', blank.activeDateStart!);
			updateBlankField('useDateEnd', blank.activeDateEnd!);
		}
		setIsMatches(!isMatches);
	};

	useEffect(() => {
		updateBlankField('conclusionDate', defaultStartDate);
		updateBlankField('activeDateStart', defaultStartDate);
		updateBlankField('activeDateEnd', defaultEndDate);
		updateBlankField('useDateStart', defaultStartDate);
		updateBlankField('useDateEnd', defaultEndDate);
	}, []);

	return (
		<>
			<Grid item xs={4}>
				<Typography>Дата заключения</Typography>
			</Grid>
			<Grid item xs={4}>
				<CustomTextField
					type='date'
					value={formatDateToISO(blank.conclusionDate)}
					onBlurHandler={(value) => {
						updateBlankField('conclusionDate', new Date(value));
					}}
				/>
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={4}>
				<Typography>Срок действия</Typography>
			</Grid>
			<Grid item xs={4}>
				<CustomTextField
					type='date'
					value={formatDateToISO(blank.activeDateStart)}
					onBlurHandler={(value) => {
						if (isMatches) updateBlankField('useDateStart', new Date(value));
						updateBlankField('activeDateStart', new Date(value));
					}}
				/>
			</Grid>
			<Grid item xs={4}>
				<CustomTextField
					type='date'
					value={formatDateToISO(blank.activeDateEnd)}
					onBlurHandler={(value) => {
						if (isMatches) updateBlankField('useDateEnd', new Date(value));
						updateBlankField('activeDateEnd', new Date(value));
					}}
				/>
			</Grid>
			<Grid item xs={4}>
				Равен периоду использования
			</Grid>
			<Grid item xs={8}>
				<Checkbox checked={isMatches} onChange={checkBoxOnChangeHandler} />
			</Grid>
			{!isMatches && (
				<>
					<Grid item xs={4}>
						<Typography>Период использования</Typography>
					</Grid>
					<Grid item xs={4}>
						<CustomTextField
							type='date'
							value={formatDateToISO(blank.useDateStart)}
							onBlurHandler={(value) => {
								updateBlankField('useDateStart', new Date(value));
							}}
						/>
					</Grid>
					<Grid item xs={4}>
						<CustomTextField
							type='date'
							value={formatDateToISO(blank.useDateEnd)}
							onBlurHandler={(value) => {
								updateBlankField('useDateEnd', new Date(value));
							}}
						/>
					</Grid>
				</>
			)}
		</>
	);
};

export default TimeBlock;
