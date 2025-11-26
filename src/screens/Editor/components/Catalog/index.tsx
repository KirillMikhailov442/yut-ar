import styles from './Catalog.module.scss';
import Input from 'antd/es/input/Input';
import Furnitures from './Furnitures';

const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder="Поиск" variant="filled" size={'large'} />
      <div className={styles.categories}>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
      </div>
      <Furnitures
        items={[
          {
            id: 1,
            x: 1,
            y: 1,
            title: 'A1',
            height: 100,
            width: 100,
            rotation: 0,
          },
          {
            id: 2,
            x: 1,
            y: 1,
            title: 'A2',
            height: 100,
            width: 100,
            rotation: 0,
          },
          {
            id: 3,
            x: 1,
            y: 1,
            title: 'A3',
            height: 100,
            width: 100,
            rotation: 0,
          },
        ]}
      />
    </div>
  );
};

export default Catalog;
