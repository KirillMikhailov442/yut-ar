import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import about_img from '@images/about-lines.png';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.bgLine} src={about_img} alt="line" />
      <div className={styles.container}>
        <div className="flex flex-col">
          <h5 className={styles.title}>уютar</h5>
          <b className={styles.subtitle}>
            это ваш помощник в дизайне интерьера.{' '}
          </b>
        </div>
        <div className="flex flex-col flex-grow justify-between max-lg:flex-grow-0">
          <div>
            <p className={styles.textLeft}>
              Создавайте проект своей мечты самостоятельно: выбирайте мебель и
              декор из ассортимента пермских производителей, планируйте
              расстановку и визуализируйте результат в режиме дополненной
              реальности.
            </p>
          </div>
          <div>
            <p className={styles.textRight}>
              Сервис рассчитает бюджет, поможет подобрать оптимальные решения и
              покажет, как будет выглядеть ваш интерьер еще до начала ремонта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
