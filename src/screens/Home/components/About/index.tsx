'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import about_img from '@images/about-lines.png';
import gsap from 'gsap';

const About = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftTextRef = useRef<HTMLParagraphElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
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

      gsap.fromTo(
        leftTextRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: leftTextRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            scrub: true,
            once: true,
          },
        },
      );

      gsap.fromTo(
        rightTextRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: rightTextRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            scrub: true,
            once: true,
          },
        },
      );
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Image className={styles.bgLine} src={about_img} alt="line" />
      <div className={styles.container}>
        <div className="flex flex-col">
          <h5 ref={titleRef} className={styles.title}>
            уютar
          </h5>
          <h6 ref={subtitleRef} className={styles.subtitle}>
            это ваш помощник в дизайне интерьера.{' '}
          </h6>
        </div>
        <div className="flex flex-col gap-3 flex-grow justify-between max-lg:flex-grow-0">
          <div>
            <p ref={leftTextRef} className={styles.textLeft}>
              Создавайте проект своей мечты самостоятельно: выбирайте мебель и
              декор из ассортимента пермских производителей, планируйте
              расстановку и визуализируйте результат в режиме дополненной
              реальности.
            </p>
          </div>
          <div>
            <p ref={rightTextRef} className={styles.textRight}>
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
