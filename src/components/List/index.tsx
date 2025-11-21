import React, { FC, ReactNode } from 'react';
import styles from './List.module.scss';

interface ListProps {
  title: ReactNode;
  items: {
    title: string;
    description: ReactNode;
  }[];
}

const List: FC<ListProps> = ({ title, items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.number}>{index + 1}</div>
              <h5>{item.title}</h5>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
