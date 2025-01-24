import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PasswordInputAdornment from './PasswordInputAdornment';

interface Login {
  login: string;
  password: string;
}

export default function AuthForm() {
  const { control, handleSubmit } = useForm<Login>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  return (
    <Stack
      gap={2}
      component='form'
      noValidate
      sx={{ alignItems: 'center' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant='h3' fontWeight={600} gutterBottom>
        Войти в систему
      </Typography>

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
          <TextField
            label='логин'
            type='email'
            error={!!error}
            helperText={error?.message}
            {...field}
          ></TextField>
        )}
      />

      <Controller
        name='password'
        control={control}
        rules={{
          required: 'Введите пароль',
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label='пароль'
            type={inputType}
            error={!!error}
            helperText={error?.message}
            {...field}
            slotProps={{
              input: {
                endAdornment: (
                  <PasswordInputAdornment
                    onClick={() => {
                      setInputType(
                        inputType === 'password' ? 'text' : 'password'
                      );
                    }}
                  />
                ),
              },
            }}
          ></TextField>
        )}
      />

      <Button variant='contained' type='submit' fullWidth>
        войти
      </Button>
    </Stack>
  );
}
