import React from 'react';
import styles from './Footer.module.scss';
import center_img from '@images/footer-center.png';
import left_img from '@images/footer-left.png';
import right_img from '@images/footer-right.png';
import Image from 'next/image';
import { Bookmark, Heart } from 'lucide-react';
import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          scrub: true,
          once: true,
        },
      },
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          scrub: true,
          once: true,
        },
      },
    );
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h4 ref={titleRef} className={styles.title}>
          Экспериментируйте!
        </h4>
        <p ref={subtitleRef} className={styles.subtitle}>
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
