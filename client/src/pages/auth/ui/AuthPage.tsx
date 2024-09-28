import { useLoginMutation } from '@/entities/employee';
import { AppRoutes } from '@/shared/const/AppRoutes';
import { setTokenToLocalStorage } from '@/shared/lib/localStorage/tokenStorage';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
	Box,
	Button,
	Container,
	IconButton,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ILoginData {
	login: string;
	password: string;
}

export const AuthPage: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ILoginData>({
		defaultValues: {
			login: '',
			password: '',
		},
	});

	const loginMutation = useLoginMutation();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<ILoginData> = (data) => {
		loginMutation.mutate(data, {
			onSuccess: (data) => {
				setTokenToLocalStorage(data.token);
				navigate(AppRoutes.CONTRACTS);
			},
		});
	};
	const [inputType, setInputType] = useState<'password' | 'text'>('password');

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
				<Box
					component={'form'}
					onSubmit={handleSubmit(onSubmit)}
					sx={{ width: '100%' }}
				>
					<Stack gap={2}>
						<Controller
							name='login'
							control={control}
							rules={{
								required: 'Введите логин',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Неверный формат электронной почты',
								},
							}}
							render={({ field }) => (
								<CustomTextFieldRef label='логин' type='email' {...field} />
							)}
						/>
						{errors?.login && <Typography>{errors.login.message}</Typography>}
						<Controller
							name='password'
							control={control}
							rules={{
								required: 'Введите пароль',
							}}
							render={({ field }) => (
								<Stack direction='row' alignItems='center'>
									<CustomTextFieldRef
										label='Пароль'
										type={inputType}
										sx={{ flexGrow: 1 }}
										{...field}
									/>
									<IconButton
										onClick={() =>
											setInputType(
												inputType === 'password' ? 'text' : 'password'
											)
										}
										aria-label='toggle password visibility'
									>
										{inputType === 'password' ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</Stack>
							)}
						/>
						{errors?.password && (
							<Typography>{errors.password.message}</Typography>
						)}

						<Button variant='contained' color='primary' type='submit' fullWidth>
							Войти
						</Button>
					</Stack>
				</Box>
			</Paper>
		</Container>
	);
};
