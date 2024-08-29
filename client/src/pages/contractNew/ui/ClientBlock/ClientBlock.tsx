import { ClientTypeToggle } from '@/features/ClientTypeToggle';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Button, FormGroup, Grid, Paper, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';
import { SearchCLientModal } from './SearchClientModal';
import TextFieldWithTitle from './TextFieldWithTitle';

const CLIENT_TYPES: itemData[] = [
  {
    id: 0,
    name: 'ФЛ',
  },
  {
    id: 1,
    name: 'ЮЛ',
  },
];

const ClientBlock: FC = () => {
  const [clientType, setClientType] = useState(CLIENT_TYPES[0]);

  const [open, setOpen] = useState(false);
  return (
    <>
      <SearchCLientModal
        handleClose={() => {
          setOpen(false);
        }}
        open={open}
      />
      <Paper sx={{ borderRadius: '10px', padding: '40px' }}>
        <FormGroup>
          <ClientTypeToggle
            items={CLIENT_TYPES}
            selectedItem={clientType}
            onClick={(item: itemData) => {
              setClientType(item);
            }}
          />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                onClick={() => {
                  setOpen(true);
                }}
              >
                найти
              </Button>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item container spacing={1}>
                <Grid item xs={2}>
                  <Typography>
                    {clientType.name === 'ФЛ' ? 'ФИО' : 'Название'}
                  </Typography>
                </Grid>
                <Grid item xs={clientType.name === 'ФЛ' ? 8 : 10}>
                  <CustomTextField />
                </Grid>
                {clientType.name === 'ФЛ' && (
                  <Grid item xs={2}>
                    <CustomTextField type='date' />
                  </Grid>
                )}
                <Grid item></Grid>
              </Grid>
              <Grid item xs={2}>
                <Typography>Номер телефона</Typography>
              </Grid>
              <Grid item xs={10}>
                <CustomTextField />
              </Grid>

              {clientType.id == 0 && (
                <>
                  <TextFieldWithTitle
                    xs={2}
                    title='Паспорт'
                    inputNum={2}
                    type='number'
                  />
                </>
              )}
              <TextFieldWithTitle xs={2} title='ИНН' type='number' />
              <TextFieldWithTitle xs={2} title='Адрес' />
            </Grid>
          </Grid>
        </FormGroup>
      </Paper>
    </>
  );
};

export default ClientBlock;
