'use client';

import Header from '@/components/Header';
import { useModals } from '@/store/modals';
import { Drawer } from 'antd';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useMediaQuery } from '@chakra-ui/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { modals, closeModal } = useModals();
  const [isTablet] = useMediaQuery(['(max-width: 769px)']);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.3,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      return () => {
        ScrollSmoother.get()?.kill();
      };
    });

    return () => mm.revert();
  }, [isTablet]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
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
      </div>
    </div>
  );
};

export default MainLayout;
