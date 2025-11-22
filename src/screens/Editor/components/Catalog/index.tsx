import styles from './Catalog.module.scss';
import { Splitter } from 'antd';
import Input from 'antd/es/input/Input';
import Furnitures from './Furnitures';

const Catalog = () => {
  return (
    <Splitter.Panel
      defaultSize={'25%'}
      min={'20%'}
      collapsible={{
        start: true,
        end: true,
        showCollapsibleIcon: true,
      }}>
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
            { id: 1, x: 1, y: 1, title: 'A1' },
            { id: 2, x: 1, y: 1, title: 'A2' },
            { id: 3, x: 1, y: 1, title: 'A3' },
          ]}
        />
      </div>
    </Splitter.Panel>
  );
};

export default Catalog;
