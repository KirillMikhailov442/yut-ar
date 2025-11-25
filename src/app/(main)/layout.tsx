'use client';

import Header from '@/components/Header';
import useMenu from '@/store/menu';
import { Drawer } from 'antd';
import Link from 'next/link';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { open, closeMenu } = useMenu();
  return (
    <>
      <Drawer
        title="Меню"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={closeMenu}
        open={open}>
        <Link onClick={closeMenu} className="menu-item" href={'/'}>
          главная
        </Link>
        <Link onClick={closeMenu} className="menu-item" href={'/about'}>
          о нас
        </Link>
        <Link onClick={closeMenu} className="menu-item" href={'/cooperation'}>
          сотрудничество
        </Link>
        <Link onClick={closeMenu} className="menu-item" href={'/community'}>
          сообщество
        </Link>
      </Drawer>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
