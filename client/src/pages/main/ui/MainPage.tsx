import NavBar from '@/widgets/NavBar/ui/NavBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const MainPage: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
