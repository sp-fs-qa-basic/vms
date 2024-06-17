import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';
import * as S from './layout.module.css';

function Layout () {
  return (
    <div className={S.container}>
      <div className={S.navbarContainer}>
        <Navbar />
      </div>
      <div className={S.mainContent}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout