import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
