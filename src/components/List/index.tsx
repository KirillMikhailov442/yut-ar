import React from 'react';
import styles from './List.module.scss';

const List = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>
          С нами процесс ремонта - это не про стресс, а про{' '}
          <span>удовольствие от исполнения желаний</span>
        </h4>

        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.number}>1</div>
            <h5>Удобный интерфейс</h5>
            <p>
              Никаких сложных меню — откройте приложение и приступайте к
              созданию интерьера прямо сейчас!
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.number}>2</div>
            <h5>Интерьер, который можно купить</h5>
            <p>
              Не нужно искать похожие модели по всему интернету: в <b>УЮТAR</b>{' '}
              вы работаете с реальной мебелью местных производителей. Один клик
              — и вы на странице товара в магазине!
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.number}>3</div>
            <h5>Бюджет проекта перед глазами</h5>
            <p>Сервис расчитает затраты на проект за вас!</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
