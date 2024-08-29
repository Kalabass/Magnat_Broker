import CustomTextField from '@/shared/ui/CustomTextField';
import { Checkbox, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { formatDate, getDefaultDates } from '../../lib/dateUtils';
import { useInitializeDates } from '../../lib/useInitializeData';

// TODO: добавить кнопки для указания периода использования(год, 10 мес, 6 мес и тд)
// TODO: добавить автоматическую дату при пролонгации полиса

const TimeBlock: FC = () => {
  useInitializeDates();
  const { defaultStartDate, defaultEndDate } = getDefaultDates();

  const [isMatches, setIsMatches] = useState(true);

  return (
    <>
      <Grid item xs={4}>
        <Typography>Дата заключения</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          type='date'
          value={formatDate(defaultStartDate)}
          globalStoreKey='conclusionDate'
        />
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Typography>Срок действия</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          type='date'
          value={formatDate(defaultStartDate)}
          globalStoreKey='activeDateFrom'
        />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField
          type='date'
          value={formatDate(defaultEndDate)}
          globalStoreKey='activeDateTo'
        />
      </Grid>
      <Grid item xs={4}>
        Равен периоду использования
      </Grid>
      <Grid item xs={8}>
        <Checkbox
          checked={isMatches}
          onChange={() => setIsMatches(!isMatches)}
        />
      </Grid>
      {!isMatches && (
        <>
          <Grid item xs={4}>
            <Typography>Период использования</Typography>
          </Grid>
          <Grid item xs={4}>
            <CustomTextField
              type='date'
              value={formatDate(defaultStartDate)}
              globalStoreKey='useDateFrom'
            />
          </Grid>
          <Grid item xs={4}>
            <CustomTextField
              type='date'
              value={formatDate(defaultEndDate)}
              globalStoreKey='useDateTo'
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default TimeBlock;
