import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import { EmployeeSelect } from '@/widgets/EmployeeSelect';
import { SellingPointSelect } from '@/widgets/SellingPointSelect';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

const SettingsBlockMiddle: FC = () => {
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
				<Typography>№ Полиса</Typography>
			</Grid>
			<Grid item xs={8}>
				<InputController name={FormFieldNamesMap.blankNumber} />
			</Grid>
			<EmployeeSelect />
			<SellingPointSelect />
		</Grid>
	);
};

export default SettingsBlockMiddle;
