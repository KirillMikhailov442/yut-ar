import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import useMenu from '@/store/menu';

const Header = () => {
  const { openMenu } = useMenu();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.logo}>
          УЮТ
          <br />
          AR
        </Link>
        <Link href={'/about'} className={styles.link}>
          о нас
        </Link>
        <Link href={'/cooperation'} className={styles.link}>
          сотрудничество
        </Link>
        <Link href={'/community'} className={styles.link}>
          сообщество
        </Link>
        <div className="flex items-center gap-5">
          <Link href={'/editor'} className={styles.button}>
            создать проект <br />
            прямо сейчас
          </Link>
          <button onClick={openMenu} className={styles.menu}>
            <Menu size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
