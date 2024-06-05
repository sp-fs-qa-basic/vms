import Navbar from '@/components/navbar/Navbar';
import * as S from './layout.module.css';

function Layout ({children}) {
  return (
    <div className={S.container}>
      <div className={S.navbarContainer}>
        <Navbar />
      </div>
      <div className={S.mainContent}>
        {children}
      </div>
    </div>
  )
}

export default Layout