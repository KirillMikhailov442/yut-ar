import React from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';
import line_img from '@images/partners-lines.png';

const Partners = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <h4 className={styles.title}>Партнеры</h4>
      </div>
    </div>
  );
};

export default Partners;
