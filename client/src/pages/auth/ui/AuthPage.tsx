import { Container, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import AuthPageForm from './AuthPageForm';

export const AuthPage: FC = () => {
	return (
		<Container
			sx={{
				background: 'lightBlue',
				marginTop: '64px',
				height: 'calc(100vh - 64px)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<Paper
				sx={{
					borderRadius: 3,
					padding: 4,
					width: '400px',
					boxShadow: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Typography component={'h1'} fontSize={'32px'} fontWeight={600} mb={3}>
					Войти в систему
				</Typography>
				<AuthPageForm />
			</Paper>
		</Container>
	);
};
