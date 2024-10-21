import { useLoginMutation } from '@/entities/auth';
import { AppRoutes } from '@/shared/const/AppRoutes';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import PasswordInputAdornment from '@/shared/ui/PasswordInputAdornment';
import { Box, Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ERROR_CODES } from '../const/constants';
import { LoginData } from '../model/interfaces';

const AuthPageForm: FC = () => {
	const loginMutation = useLoginMutation();
	const navigate = useNavigate();

	const [loginErrorMessage, setLoginErrorMessage] = useState<
		string | undefined
	>(undefined);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState<
		string | undefined
	>(undefined);

	const onSubmit: SubmitHandler<LoginData> = (data) => {
		setLoginErrorMessage(undefined);
		setPasswordErrorMessage(undefined);
		loginMutation.mutate(data, {
			onSuccess: () => {
				navigate(AppRoutes.CONTRACTS);
			},
			onError: (error) => {
				const { response } = error as {
					response?: { data: { code: string; message: string } };
				};

				if (response?.data.code === ERROR_CODES.invalidLoginCode)
					setLoginErrorMessage(response.data.message);
				if (response?.data.code === ERROR_CODES.invalidPasswordCode)
					setPasswordErrorMessage(response.data.message);
			},
		});
	};

	const [inputType, setInputType] = useState<'password' | 'text'>('password');
	const { handleSubmit, control } = useFormContext<LoginData>();

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
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							inputLabel='логин'
							label='логин'
							type='email'
							error={!!error || !!loginErrorMessage}
							helperText={error?.message || loginErrorMessage}
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
					render={({ field, fieldState: { error } }) => (
						<CustomTextFieldRef
							inputLabel='пароль'
							label='пароль'
							type={inputType}
							error={!!error || !!passwordErrorMessage}
							helperText={error?.message || passwordErrorMessage}
							endAdornment={
								<PasswordInputAdornment
									onCLick={() => {
										setInputType(
											inputType === 'password' ? 'text' : 'password'
										);
									}}
									inputType={inputType}
								/>
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
