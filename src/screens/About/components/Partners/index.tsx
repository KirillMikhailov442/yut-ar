'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';
import line_img from '@images/partners-lines.png';
import clsx from 'clsx';
import scriptAgency_img from '@images/script-agency.svg';
import gsap from 'gsap';

const Partners = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scriptAgencyRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
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
        scriptAgencyRef.current,
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
            trigger: scriptAgencyRef.current,
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
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <h4 ref={titleRef} className={styles.title}>
          Партнеры
        </h4>
        <ul className={styles.list}>
          <li
            ref={scriptAgencyRef}
            className={clsx(styles.card, styles.scriptAgency)}>
            <Image src={scriptAgency_img} alt="script-agency" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partners;
