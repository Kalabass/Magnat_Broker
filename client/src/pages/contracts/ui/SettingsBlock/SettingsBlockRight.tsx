import { CompaniesSelect } from '@/widgets/CompaniesSelect';
import { Grid } from '@mui/material';
import { FC } from 'react';

const SettingsBlockRight: FC = () => {
	return (
		<Grid item container spacing={1} xs={4}>
			<CompaniesSelect />
			<Grid item container xs={12} sx={{ height: '100%' }} />
			<Grid item container xs={12} sx={{ height: '100%' }} />
		</Grid>
	);
};

export default SettingsBlockRight;
