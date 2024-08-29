import CustomTextField from '@/shared/ui/CustomTextField';
import { Button, Container, FormGroup, Stack } from '@mui/material';
import { FC, HTMLInputTypeAttribute, useState } from 'react';

export const AuthPage: FC = () => {
  const [inputType, setInputType] =
    useState<HTMLInputTypeAttribute>('password');
  return (
    <Container
      sx={{
        background: 'lightBlue',
        padding: '40px 0 40px 0 ',
        marginTop: '64px',
      }}
    >
      <FormGroup>
        <Stack gap={2}>
          <CustomTextField value='' label='логин' />
          <Stack direction='row'>
            <CustomTextField value='' label='пароль' type={inputType} />
            <Button
              onClick={() => {
                setInputType(inputType == 'password' ? 'text' : 'password');
              }}
            >
              eye
            </Button>
          </Stack>
          <Button type='submit'>войти</Button>
        </Stack>
      </FormGroup>
    </Container>
  );
};
