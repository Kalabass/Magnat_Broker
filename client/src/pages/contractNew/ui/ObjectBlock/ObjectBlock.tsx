import { useBanks } from '@/entities/bank';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { useInsuranceObjectStore } from '@/shared/stores/useInsuranceObjectStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { FormGroup, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import CustomSelect from '../GeneralInfoBlock/SelectWithTitle';
//TODO: объеденить с payment блоком
// const BANKS: itemData[] = [
//   { id: 0, name: 'Сбербанк' },
//   { id: 1, name: 'Совкомбанк' },
// ];

const ObjectBlock: FC = () => {
  const { getBlank } = useBlankStore();
  const blank = getBlank();

  const { updateInsuranceObjectField } = useInsuranceObjectStore();

  const { data: BANKS } = useBanks();
  return (
    <Paper sx={{ borderRadius: '10px', padding: '40px' }}>
      <FormGroup>
        <Grid container spacing={5}>
          <Grid container item xs={6} spacing={1}>
            {blank.insuranceType !== 4 && (
              <>
                <Grid item xs={2}>
                  Имя
                </Grid>
                <Grid item xs={10}>
                  <CustomTextField
                    onBlurHandler={(value: string) => {
                      updateInsuranceObjectField('name', value);
                    }}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={2}>
              <Typography>Страховая сумма</Typography>
            </Grid>
            <Grid item xs={10}>
              <CustomTextField
                type='number'
                onBlurHandler={(value: string) => {
                  updateInsuranceObjectField('sum', Number(value));
                }}
              />
            </Grid>
          </Grid>
          <Grid container item xs={6} spacing={1}>
            {blank.insuranceType !== 4 && (
              <>
                <Grid item xs={2}>
                  Мощность
                </Grid>
                <Grid item xs={10}>
                  <CustomTextField
                    type='number'
                    onBlurHandler={(value: string) => {
                      updateInsuranceObjectField('horsePowers', Number(value));
                    }}
                  />
                </Grid>
              </>
            )}
            {/* TODO: подумать насчет кредитованных объектов, каким образом это указывать, сейчас я вижу 2 пути: 
              1)Вместо решения брокера добавить чекбокс, при нажатии которого будет появляться поле банк
              2) заузать решение брокера, но тогда надо подумать над реализацие, либо добавить пустой элемент в массив банков(что звучит как жижа) или как-то добавить дефолтное значение в селект  */}
            {BANKS && (
              <>
                <Grid item xs={2}>
                  <Typography>Банк</Typography>
                </Grid>
                <Grid item xs={10}>
                  <CustomSelect
                    items={BANKS}
                    onChangeHandler={(value: number) => {
                      updateInsuranceObjectField('bank', value);
                    }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default ObjectBlock;
