'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Contacts.module.scss';
import gsap from 'gsap';

const Contacts = () => {
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(contactsRef.current, {
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactsRef.current,
        start: '30% bottom',
        end: '70% bottom',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={contactsRef} className={styles.container}>
        <div className={styles.logo}>
          <h4>
            УЮТ
            <br />
            AR
          </h4>
          <p>От идеи к реальности — визуализация интерьера.</p>
        </div>
        <div className={styles.contacts}>
          <h4 className="text-center text-[40px] mb-4">Контакты</h4>
          <h5 className="text-lg">
            <a href="mailto:masha.mazume@mail.ru">
              e-mail: masha.mazume@mail.ru
            </a>
          </h5>
          <p>Коротких Мария Игоревна</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
