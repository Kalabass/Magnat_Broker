import { useBlanks } from '@/entities/blank';
import { Container, Grid, Typography } from '@mui/material';
import { FC } from 'react';

export const ContractsPage: FC = () => {
  const { data } = useBlanks();
  const blanks = data;

  function formatDate(date: string | Date): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <Container
      sx={{
        background: 'lightBlue',
        padding: '40px 0 40px 0 ',
        marginTop: '64px',
      }}
    >
      {blanks && (
        <Grid container>
          {blanks.map((blank, index) => (
            <Grid item container key={index} spacing={5}>
              <Grid item container>
                <Grid item sx={{ border: '1px solid black' }} xs={0.5}>
                  <Typography>{index + 1}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{formatDate(blank.createdAt)}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.insuranceType.name}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.insuranceCompany.name}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.client.name}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.employee.name}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.sellingPoint.name}</Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>
                    {blank.series} {blank.number}
                  </Typography>
                </Grid>
                <Grid item sx={{ border: '1px solid black' }} xs={1}>
                  <Typography>{blank.premium}</Typography>
                </Grid>
                {/* {Object.entries(blank).map(([key, value], idx) => (
                  <Grid item key={idx} sx={{ border: '1px solid black' }}>
                    <Typography variant='body1'>{String(value)}</Typography>
                  </Grid>
                ))} */}
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
