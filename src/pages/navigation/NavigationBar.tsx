import { Outlet } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <>
      <h1 style={{ backgroundColor: 'red' }}>NavBar</h1>
      <Outlet />
    </>
  );
};
