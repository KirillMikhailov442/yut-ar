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
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
      </ul>
    </div>
  );
};

export default ProjectScreen;
