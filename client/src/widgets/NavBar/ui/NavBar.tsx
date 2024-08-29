import { AppRoutes } from '@/shared/const/AppRoutes';
import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
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

        <ButtonGroup variant='text'>
          <Button sx={{ color: 'white' }}>
            <Link to={AppRoutes.CONTRACT_CREATION}>Новый</Link>
          </Button>
          <Button sx={{ color: 'white' }}>
            <Link to={AppRoutes.CONTRACTS}>Все</Link>
          </Button>
          <Button sx={{ color: 'white' }}>
            <Link to={AppRoutes.CONTRACT_DETAILS}>детали</Link>
          </Button>
          <Button sx={{ color: 'white' }}>
            <Link to={AppRoutes.HOME}>дом</Link>
          </Button>
          <Button sx={{ color: 'white' }}>
            <Link to={AppRoutes.AUTH}>AUTH</Link>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
