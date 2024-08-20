import { Grid, TextField, Typography } from '@mui/material';
import { FC, HTMLInputTypeAttribute } from 'react';

interface TextFieldWithTitleProps {
  title: string;
  inputNum?: number;
  type?: HTMLInputTypeAttribute;
  xs?: number;
}

const TextFieldWithTitle: FC<TextFieldWithTitleProps> = ({
  title,
  type = 'text',
  inputNum = 1,
  xs = 4,
}) => {
  const custom_xs = (12 - xs) / inputNum;

  return (
    <>
      <Grid
        item
        xs={xs}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography>{title}</Typography>
      </Grid>

      {Array.from({ length: inputNum }).map((_, index) => (
        <Grid item xs={custom_xs} key={index}>
          <TextField size='small' fullWidth type={type} />
        </Grid>
      ))}
    </>
  );
};

export default TextFieldWithTitle;
