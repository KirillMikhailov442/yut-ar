'use client';

import { Input } from '@chakra-ui/react';
import styles from './Catalog.module.scss';
import { useCatalog } from '@/store/catalog';
import Item from './Item';
import { useDroppable } from '@dnd-kit/core';
import Loading from './Loading';
import { useCategories } from '@hooks/useCategories';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useProducts } from '@hooks/useProducts';

const Catalog = () => {
  const { furnitures, setFurnitures } = useCatalog();
  const { setNodeRef } = useDroppable({
    id: 'catalog',
  });

  const categories = useCategories();
  const products = useProducts();
  const [selectedCat, setSelectedCat] = useState<number>();

  useEffect(() => {
    if (products.isSuccess) {
      const newFurnitures = products.data.items.map(item => ({
        x: 0,
        y: 0,
        rotation: 0,
        img: item.photos[0],
        ...item,
      }));
      setFurnitures(newFurnitures);
    }
  }, [products.isSuccess]);

  if (categories.isLoading || products.isLoading) return <Loading />;

  return (
    <div className={styles.wrapper}>
      <Input placeholder="Поиск" size={'sm'} />
      <div className={styles.categories}>
        {categories.data?.items?.map(category => (
          <button
            onClick={() => {
              setSelectedCat(category.id);
            }}
            className={clsx(
              styles.categoriesItem,
              selectedCat == category.id && styles.categoriesItemActive,
            )}
            key={category.id}>
            {category.name}
          </button>
        ))}
      </div>
      <ul ref={setNodeRef} className={styles.grid}>
        {furnitures.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
