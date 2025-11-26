'use client';

import Header from '@/components/Header';
import { useModals } from '@/store/modals';
import { Drawer } from 'antd';
import Link from 'next/link';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { modals, closeModal } = useModals();
  return (
    <>
      <Drawer
        title="Меню"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => closeModal('menu')}
        open={modals.menu}>
        <Link
          onClick={() => closeModal('menu')}
          className="menu-item"
          href={'/'}>
          главная
        </Link>
        <Link
          onClick={() => closeModal('menu')}
          className="menu-item"
          href={'/about'}>
          о нас
        </Link>
        <Link
          onClick={() => closeModal('menu')}
          className="menu-item"
          href={'/cooperation'}>
          сотрудничество
        </Link>
        <Link
          onClick={() => closeModal('menu')}
          className="menu-item"
          href={'/community'}>
          сообщество
        </Link>
      </Drawer>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
