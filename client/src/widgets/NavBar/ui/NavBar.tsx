import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link to={'/'}>
          <Typography fontWeight={1000} fontSize={36}>
            Magnat.Broker
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
