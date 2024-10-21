import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import useIsMortgageType from '@/shared/lib/hooks/useIsMortgage';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import CustomSelectRefController from '@/shared/ui/CustomSelectRefController';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const BlankNumberBlock: FC = () => {
	const { data: BLANK_SERIES } = useBlankSeries();
	const { control } = useFormContext();
	const isMortgage = useIsMortgageType();

	return (
		<>
			<Grid item xs={4}>
				<Typography>Полис</Typography>
			</Grid>
			<Grid item container xs={8} spacing={1}>
				{!isMortgage && (
					<Grid item xs={4}>
						<CustomSelectRefController
							fieldName={FormFieldNamesMap.blankSeriesId}
							rules={{ required: true }}
							items={BLANK_SERIES}
							label='серия'
						/>
					</Grid>
				)}
				<Grid item xs={isMortgage ? 12 : 8}>
					<InputController
						name={FormFieldNamesMap.blankNumber}
						rules={{ required: 'Введите номер бланка' }}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default BlankNumberBlock;
