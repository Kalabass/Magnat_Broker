import DateInputController from '@/shared/ui/Controllers/DateInputController';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { getDefaultDates } from '@/widgets/contractForm/lib/dateUtils';
import { Checkbox, Grid, Typography } from '@mui/material';
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

	return (
		<>
			<Grid item xs={4}>
				<Typography>Дата заключения</Typography>
			</Grid>
			<Grid item xs={4}>
				<DateInputController
					name={FormFieldNamesMap.blankConclusionDate}
					defaultValue={defaultStartDate}
					rules={{ required: true }}
				/>
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={4}>
				<Typography>Срок действия</Typography>
			</Grid>
			<Grid item xs={4}>
				<DateInputController
					name={FormFieldNamesMap.blankActiveDateStart}
					defaultValue={defaultStartDate}
					rules={{ required: true }}
				/>
			</Grid>
			<Grid item xs={4}>
				<DateInputController
					name={FormFieldNamesMap.blankActiveDateEnd}
					defaultValue={defaultEndDate}
					rules={{ required: true }}
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
						<DateInputController
							name={FormFieldNamesMap.blankUseDateStart}
							defaultValue={defaultStartDate}
							rules={{ required: true }}
						/>
					</Grid>
					<Grid item xs={4}>
						<DateInputController
							name={FormFieldNamesMap.blankUseDateEnd}
							defaultValue={defaultEndDate}
							rules={{ required: true }}
						/>
					</Grid>
				</>
			)}
		</>
	);
};

export default TimeBlock;
