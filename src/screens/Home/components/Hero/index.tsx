import React from 'react';
import styles from './Hero.module.scss';
import chair_img from '@images/chair.svg';
import line_img from '@images/bg-lines.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <Image
          className={styles.chair}
          data-speed="0.85"
          src={chair_img}
          alt="clair"
        />
        <h5 data-speed="0.9" className={styles.title}>
          От идеи к реальности — <br /> визуализация интерьера.
        </h5>
      </div>
    </div>
  );
};

export default Hero;
