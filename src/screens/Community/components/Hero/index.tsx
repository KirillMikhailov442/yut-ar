import React from 'react';
import styles from './Hero.module.scss';
import line_img from '@images/bg-lines.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <div>
          <h4 className={styles.title}>
            Добро пожаловать в сообщество УЮТ AR!
          </h4>
          <p className={styles.subtitle}>
            Здесь пользователи делятся идеями и вдохновением для интерьеров, а
            вы можете легко интегрировать понравившиеся дизайны в свой дом
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
