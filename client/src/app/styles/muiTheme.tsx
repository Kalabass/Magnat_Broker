import { createTheme } from '@mui/material';

const miniUnit = 8;

const muiTheme = createTheme({
  spacing: (factor: number) => `${factor * miniUnit}px`,
});

export default muiTheme;
