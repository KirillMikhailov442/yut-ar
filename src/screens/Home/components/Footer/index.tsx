import React from 'react';
import styles from './Footer.module.scss';
import center_img from '@images/footer-center.png';
import left_img from '@images/footer-left.png';
import right_img from '@images/footer-right.png';
import Image from 'next/image';
import { Bookmark, Heart } from 'lucide-react';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h4 className={styles.title}>Экспериментируйте!</h4>
        <p className={styles.subtitle}>
          Вдохновляйтесь идеями других пользователей в сообществе и переносите
          их в свои проекты. Убирайте или добавляйте предметы, пока не найдёте
          идеальный вариант — все в ваших руках!
        </p>
        <div className={styles.blog}>
          <div className={clsx(styles.item, styles.left)}>
            <Image src={left_img} alt="left" />
            <nav className={styles.nav}>
              <Heart size={25} />
              <Bookmark size={25} />
            </nav>
          </div>
          <div className={clsx(styles.item, styles.center)}>
            <Image src={center_img} alt="center" />
            <nav className={styles.nav}>
              <Heart size={25} />
              <Bookmark size={25} />
            </nav>
          </div>
          <div className={clsx(styles.item, styles.right)}>
            <Image src={right_img} alt="right" />
            <nav className={styles.nav}>
              <Heart size={25} />
              <Bookmark size={25} />
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
