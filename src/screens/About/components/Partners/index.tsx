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
  const bgRef = useRef<HTMLImageElement>(null);
  const scriptAgencyRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
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

    gsap.from(bgRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bgRef.current,
        start: 'top 30%',
        end: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

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
  }, []);

  return (
    <div className={styles.wrapper}>
      <Image ref={bgRef} className={styles.bgLines} src={line_img} alt="line" />
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
