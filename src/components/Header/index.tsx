import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
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
        <Link href={'/editor'} className={styles.button}>
          создать проект <br />
          прямо сейчас
        </Link>
      </div>
    </header>
  );
};

export default Header;
