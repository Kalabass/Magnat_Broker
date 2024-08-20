import { useBlankStore } from '@/shared/stores/useBlankStore';
import { FormGroup, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import TextFieldWithTitle from '../ClientBlock/TextFieldWithTitle';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';
import SelectWithTitle from '../GeneralInfoBlock/SelectWithTitle';

const BANKS: itemData[] = [
  { id: 0, name: 'Сбербанк' },
  { id: 1, name: 'Совкомбанк' },
];

const ObjectBlock: FC = () => {
  const { getBlank } = useBlankStore();
  const blank = getBlank();
  return (
    <Paper sx={{ borderRadius: '10px', padding: '40px' }}>
      <FormGroup>
        <Grid container spacing={5}>
          <Grid container item xs={6} spacing={1}>
            {blank.insurance_type?.name.toUpperCase() !== 'ИПОТЕКА' && (
              <TextFieldWithTitle title='Название' />
            )}
            <TextFieldWithTitle title='Страховая сумма' />
          </Grid>
          <Grid container item xs={6} spacing={1}>
            {blank.insurance_type?.name.toUpperCase() !== 'ИПОТЕКА' && (
              <TextFieldWithTitle title='Мощность' />
            )}
            <SelectWithTitle items={BANKS} blankKey='bank' title='Банк' />
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default ObjectBlock;
