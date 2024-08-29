import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Button, FormGroup, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import TextFieldWithTitle from '../ClientBlock/TextFieldWithTitle';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';
import SelectWithTitle from '../GeneralInfoBlock/SelectWithTitle';

const PAYMENT_TYPES: itemData[] = [
  { id: 0, name: 'ibox' },
  { id: 1, name: 'Наличные' },
  { id: 2, name: 'По ссылке' },
];

const PaymentBlock: FC = () => {
  const { getBlank } = useBlankStore();
  const blank = getBlank();
  return (
    <Paper sx={{ borderRadius: '10px', padding: '40px' }}>
      <FormGroup>
        <Grid container spacing={5} sx={{ paddingBottom: '40px' }}>
          <Grid item xs={2}>
            <Typography>страховая премия</Typography>
          </Grid>
          <Grid item xs={2}>
            <CustomTextField
              value=''
              globalStoreKey='insuranceAmount'
              type='number'
            />
          </Grid>
          <Grid item container xs={6} spacing={1}>
            <SelectWithTitle
              items={PAYMENT_TYPES}
              title='Вид оплаты'
              blankKey='paymentType'
            />
            {blank.paymentType?.name.toUpperCase() === 'НАЛИЧНЫЕ' && (
              <TextFieldWithTitle title='Почта' type='email' />
            )}
          </Grid>
        </Grid>

        <Button sx={{ alignSelf: 'end' }} variant='contained'>
          Сохранить
        </Button>
      </FormGroup>
    </Paper>
  );
};

export default PaymentBlock;
