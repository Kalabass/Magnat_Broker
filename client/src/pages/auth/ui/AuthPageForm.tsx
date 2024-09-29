import { useLoginMutation } from '@/entities/employee';
import { AppRoutes } from '@/shared/const/AppRoutes';
import { setTokenToLocalStorage } from '@/shared/lib/localStorage/tokenStorage';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

//TODO: Компонент слишком огромный получился, мб декомпозировать

const codes = {
	invalidPasswordCode: 'INVALID_PASSWORD',
	invalidLoginCode: 'INVALID_LOGIN',
};

interface ILoginData {
	login: string;
	password: string;
}

const AuthPageForm: FC = () => {
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

	const [loginErrorMessage, setLoginErrorMessage] = useState<
		string | undefined
	>(undefined);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState<
		string | undefined
	>(undefined);

	const onSubmit: SubmitHandler<ILoginData> = (data) => {
		loginMutation.mutate(data, {
			onSuccess: (data) => {
				setTokenToLocalStorage(data.token);
				navigate(AppRoutes.CONTRACTS);
			},
			onError: (error) => {
				setLoginErrorMessage(undefined);
				setPasswordErrorMessage(undefined);
				const { response } = error as {
					response?: { data: { code: string; message: string } };
				};
				if (response?.data.code == codes.invalidLoginCode)
					setLoginErrorMessage('Неверный логин');
				if (response?.data.code == codes.invalidPasswordCode)
					setPasswordErrorMessage('Неверный пароль');
			},
		});
	};
	const [inputType, setInputType] = useState<'password' | 'text'>('password');

	return (
		<Box
			component={'form'}
			noValidate
			onSubmit={handleSubmit(onSubmit)}
			sx={{ width: '100%' }}
		>
			<Stack gap={1}>
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
						<CustomTextFieldRef
							inputLabel='логин'
							label='логин'
							type='email'
							error={errors.login ? true : loginErrorMessage ? true : false}
							helperText={
								errors.login?.message
									? errors.login.message
									: loginErrorMessage
									? loginErrorMessage
									: ' '
							}
							{...field}
						/>
					)}
				/>
				<Controller
					name='password'
					control={control}
					rules={{
						required: 'Введите пароль',
					}}
					render={({ field }) => (
						<CustomTextFieldRef
							inputLabel='пароль'
							label='пароль'
							type={inputType}
							sx={{ flexGrow: 1 }}
							error={
								errors.password ? true : passwordErrorMessage ? true : false
							}
							helperText={
								errors.password?.message
									? errors.password.message
									: passwordErrorMessage
									? passwordErrorMessage
									: ' '
							}
							endAdornment={
								<InputAdornment position='end'>
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
								</InputAdornment>
							}
							{...field}
						/>
					)}
				/>

				<Button variant='contained' color='primary' type='submit' fullWidth>
					Войти
				</Button>
			</Stack>
		</Box>
	);
};

export default AuthPageForm;
