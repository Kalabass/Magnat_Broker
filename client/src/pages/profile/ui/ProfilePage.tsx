import { Avatar, Box } from '@mui/material';
import { FC } from 'react';

const ProfilePage: FC = () => {
	return (
		<Box sx={{ marginTop: '64px' }}>
			<Avatar sx={{ width: '500px', height: '500px' }}>
				<img src={'../../../../assets/monroe.jpg'} />
			</Avatar>
		</Box>
	);
};

export default ProfilePage;
