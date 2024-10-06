import { CompaniesSelect } from '@/widgets/CompaniesSelect';
import { Box } from '@mui/material';
import { FC } from 'react';

const ProfilePage: FC = () => {
	return (
		<Box sx={{ marginTop: '64px' }}>
			<CompaniesSelect onChangeHandler={() => {}} />
		</Box>
	);
};

export default ProfilePage;
