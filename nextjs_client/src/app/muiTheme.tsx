'use client';

import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const muiTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  spacing: '8px',
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
    },
  },
});

export default muiTheme;
