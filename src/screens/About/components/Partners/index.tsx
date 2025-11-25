import React from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';
import line_img from '@images/partners-lines.png';
import clsx from 'clsx';
import scriptAgency_img from '@images/script-agency.svg';

const Partners = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <h4 className={styles.title}>Партнеры</h4>
        <ul className={styles.list}>
          <li className={clsx(styles.card, styles.scriptAgency)}>
            <Image src={scriptAgency_img} alt="script-agency" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partners;
