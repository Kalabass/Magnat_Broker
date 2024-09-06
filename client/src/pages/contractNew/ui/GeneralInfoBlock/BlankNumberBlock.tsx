import { useBlankStore } from '@/shared/stores/useBlankStore';
import { Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { itemData } from './GeneralInfoBlock';
import SelectWithTitle from './SelectWithTitle';

interface BlankNumberBlock {
  items: itemData[];
}
//TODO: менять этот блок в зависимости от типа страхования
const BlankNumberBlock: FC<BlankNumberBlock> = ({ items }) => {
  const { getBlank } = useBlankStore();
  const blank = getBlank();
  return (
    <>
      <Grid item xs={4}>
        <Typography>Полис</Typography>
      </Grid>
      <Grid item container xs={8} spacing={1}>
        {blank.insuranceType?.name.toUpperCase() !== 'ИПОТЕКА' && (
          <Grid item xs={3}>
            <SelectWithTitle items={items} blankKey='blankSeries' />
          </Grid>
        )}
        <Grid
          item
          container
          xs={blank.insuranceType?.name.toUpperCase() !== 'ИПОТЕКА' ? 9 : 12}
        >
          <TextField fullWidth size='small' />
        </Grid>
      </Grid>
    </>
  );
};

export default BlankNumberBlock;
