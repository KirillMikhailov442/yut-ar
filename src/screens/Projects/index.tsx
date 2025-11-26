import React from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';
import user_img from '@images/user.webp';
import Link from 'next/link';

const ProjectScreen = () => {
  return (
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
          <p className={styles.fullName}>Fake user</p>
        </div>
      </div>
      <ul className={styles.grid}>
        <li>
          <Link href={'/editor/1'} className={styles.gridItem}>
            Проект 1
          </Link>
        </li>
        <li>
          <Link href={'/editor/2'} className={styles.gridItem}>
            Проект 2
          </Link>
        </li>
        <li>
          <Link href={'/editor/3'} className={styles.gridItem}>
            Проект 3
          </Link>
        </li>
        <li>
          <Link href={'/editor/4'} className={styles.gridItem}>
            Проект 4
          </Link>
        </li>
        <li>
          <Link href={'/editor/5'} className={styles.gridItem}>
            Проект 5
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectScreen;
