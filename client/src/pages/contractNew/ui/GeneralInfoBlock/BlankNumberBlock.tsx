import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { itemData } from './GeneralInfoBlock';
import CustomSelect from './SelectWithTitle';

interface BlankNumberBlock {
  items: itemData[];
}
//TODO: менять этот блок в зависимости от типа страхования
//FIXME:кривые стили
const BlankNumberBlock: FC<BlankNumberBlock> = ({ items }) => {
  const { getBlank, updateBlankField } = useBlankStore();
  const blank = getBlank();
  return (
    <>
      <Grid item xs={4}>
        <Typography>Полис</Typography>
      </Grid>
      <Grid item container xs={8} spacing={1}>
        {blank.insuranceType !== 4 && (
          <Grid item xs={3}>
            <CustomSelect
              items={items}
              onChangeHandler={(value) => {
                updateBlankField('blankSeries', value);
              }}
            />
          </Grid>
        )}
        <Grid item xs={blank.insuranceType === 4 ? 12 : 9}>
          <CustomTextField
            onBlurHandler={(value) => {
              updateBlankField('blankNumber', value);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BlankNumberBlock;
