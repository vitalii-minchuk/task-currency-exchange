import { Outlet } from 'react-router-dom';
import CurrencyDisplay from '../CurrencyDisplay';
import Header from '../Header';

function Layout() {
  return (
    <>
      <Header />
      <CurrencyDisplay />
      <Outlet />
    </>
  );
}

export default Layout;
