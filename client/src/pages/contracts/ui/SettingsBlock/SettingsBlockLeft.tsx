import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import DateInputController from '@/shared/ui/Controllers/DateInputController';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const SettingsBlockLeft: FC = () => {
	return (
		<Grid
			item
			container
			spacing={1}
			xs={4}
			justifyContent='center'
			alignItems='center'
		>
			<Grid item xs={4}>
				<Typography>Дата заключения</Typography>
			</Grid>
			<Grid item xs={8}>
				<Box
					width={'100%'}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: 1,
						alignItems: 'center',
					}}
				>
					<DateInputController
						name={FormFieldNamesMap.blankConclusionDateStart}
					/>
					-
					<DateInputController
						name={FormFieldNamesMap.blankConclusionDateEnd}
					/>
				</Box>
			</Grid>

			<InsuranceTypeSelect />
			<Grid item xs={4}>
				<Typography>Страхователь</Typography>
			</Grid>
			<Grid item xs={8}>
				<InputController name={FormFieldNamesMap.clientName} />
			</Grid>
		</Grid>
	);
};

export default SettingsBlockLeft;
