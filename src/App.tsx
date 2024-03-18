import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { NavigationBar } from './pages/navigation/NavigationBar';

export const App = () => {
  return (
    <Routes>
      <Route element={<NavigationBar />}>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
