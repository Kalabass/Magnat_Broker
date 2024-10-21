import { Container, Paper, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginData } from '../model/interfaces';
import AuthPageForm from './AuthPageForm';

const StyledContainer = styled(Container)(({ theme }) => ({
	backgroundColor: 'lightBlue',
	marginTop: theme.spacing(8),
	minHeight: 'calc(100vh - 64px)',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
	borderRadius: theme.spacing(3),
	padding: theme.spacing(4),
	width: '400px',
	boxShadow: theme.spacing(3),
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	fontSize: theme.spacing(4),
	fontWeight: 600,
	marginBottom: theme.spacing(3),
}));

export const AuthPage: FC = () => {
	const formMethods = useForm<LoginData>({
		defaultValues: {
			login: '',
			password: '',
		},
	});
	return (
		<StyledContainer>
			<StyledPaper>
				<StyledTypography>Войти в систему</StyledTypography>
				<FormProvider {...formMethods}>
					<AuthPageForm />
				</FormProvider>
			</StyledPaper>
		</StyledContainer>
	);
};
