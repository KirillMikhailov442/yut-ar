import { Input } from '@chakra-ui/react';
import styles from './Catalog.module.scss';
import { useCatalog } from '@/store/catalog';
import Item from './Item';
import { useDroppable } from '@dnd-kit/core';

const Catalog = () => {
  const { furnitures } = useCatalog();
  const { setNodeRef } = useDroppable({
    id: 'catalog',
  });
  return (
    <div className={styles.wrapper}>
      <Input placeholder="Поиск" size={'sm'} />
      <div className={styles.categories}>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
        <button className={styles.categoriesItem}>Каталог</button>
      </div>
      <ul ref={setNodeRef} className={styles.grid}>
        {furnitures.map((item, index) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
