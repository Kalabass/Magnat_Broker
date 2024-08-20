import { Container, Stack } from '@mui/material';
import { FC } from 'react';
import ClientBlock from './ClientBlock/ClientBlock';
import GeneralInfoBlock from './GeneralInfoBlock/GeneralInfoBlock';
import ObjectBlock from './ObjectBlock/ObjectBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';

export const ContractNewPage: FC = () => {
  return (
    <Container
      sx={{
        background: 'lightBlue',
        padding: '40px 0 40px 0 ',
        marginTop: '64px',
      }}
    >
      <Stack gap='10px'>
        <GeneralInfoBlock />
        <ClientBlock />
        <ObjectBlock />
        <PaymentBlock />
      </Stack>
    </Container>
  );
};
