'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import user_img from '@images/user.webp';
import Link from 'next/link';
import { Button, useMediaQuery } from '@chakra-ui/react';
import { Armchair } from 'lucide-react';
import { useModals } from '@/store/modals';
import Cookies from 'js-cookie';
import { IUser } from '@/types/User';

const NavBar = () => {
  const [isLaptop] = useMediaQuery(['(max-width: 1024px)']);
  const { openModal, modals } = useModals();
  const [user, _] = useState(JSON.parse(Cookies.get('user') || '') as IUser);

  return (
    <div className={styles.navbar}>
      <Link href={'/'}>
        <h5>УЮТ AR</h5>
      </Link>
      <nav className={styles.nav}>
        <Link href={'/projects'}>Проекты</Link>
      </nav>
      <div className={styles.account}>
        {isLaptop && (
          <Button
            onClick={() => openModal('furnitures')}
            colorPalette={'yellow'}>
            <Armchair />
          </Button>
        )}
        <Image
          className={styles.avatar}
          src={user_img}
          width={35}
          height={35}
          alt="account"
        />
        <p className={styles.fullName}>
          {user.name} {user.surname}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
