import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainAppBar } from '../AppBar/MainAppBar';

export const Layout = () => {
  return (
    <>
      <MainAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
