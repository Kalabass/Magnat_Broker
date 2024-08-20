import { Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';

// TODO: добавить кнопки для указания периода использования(год, 10 мес, 6 мес и тд)
// TODO: добавить автоматическу дату при пролонгации полиса

const TimeBLock: FC = () => {
  const today = new Date();
  const defaultValue = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
  const defaultValue2 = `${nextYear.getFullYear()}-${String(
    nextYear.getMonth() + 1,
  ).padStart(2, '0')}-${String(nextYear.getDate()).padStart(2, '0')}`;
  return (
    <>
      <Grid item xs={4}>
        <Typography>Дата заключения</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          multiline={false}
          type='date'
          defaultValue={defaultValue}
          size='small'
        ></TextField>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Typography>Срок действия</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          size='small'
          type='date'
          defaultValue={defaultValue}
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          size='small'
          type='date'
          defaultValue={defaultValue2}
        ></TextField>
      </Grid>

      <Grid item xs={4}>
        <Typography>Период использования</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          size='small'
          type='date'
          defaultValue={defaultValue}
        ></TextField>
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          size='small'
          type='date'
          defaultValue={defaultValue2}
        ></TextField>
      </Grid>
    </>
  );
};

export default TimeBLock;
