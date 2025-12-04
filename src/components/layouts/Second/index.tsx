'use client';

import React, { useState } from 'react';
import styles from './Second.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import user_img from '@images/user.webp';
import { Provider } from '@/components/ui/provider';
import AddProjectModal from '@/components/Modals/AddProject';
import Cookies from 'js-cookie';
import { IUser } from '@/types/User';

const SecondLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, _] = useState(JSON.parse(Cookies.get('user') || '') as IUser);
  return (
    <Provider>
      <AddProjectModal />
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <Link href={'/'}>
            <h5>УЮТ AR</h5>
          </Link>
          <div className={styles.account}>
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
        {children}
      </div>
    </Provider>
  );
};

export default SecondLayout;
