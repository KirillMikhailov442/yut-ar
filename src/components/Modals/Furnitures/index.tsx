'use client';

import { useModals } from '@/store/modals';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import styles from './Furnitures.module.scss';
import { Input } from '@chakra-ui/react';
import { useCatalog } from '@/store/catalog';
import product_img from '@images/chair.svg';
import Image from 'next/image';
import { useEditor } from '@/store/editor';

const FurnituresSheet = () => {
  const { modals, closeModal } = useModals();
  const { furnitures, removeFurniture } = useCatalog();
  const { addFurniture } = useEditor();
  return (
    <BottomSheet
      className={styles.sheet}
      header={<h5>Каталог</h5>}
      snapPoints={({ maxHeight }) => [maxHeight * 0.9]}
      open={modals.furnitures}
      onDismiss={() => closeModal('furnitures')}>
      <div className={styles.wrapper}>
        <Input placeholder="Поиск" size={'xl'} />
        <div className={styles.categories}>
          <button className={styles.categoriesItem}>Каталог</button>
          <button className={styles.categoriesItem}>Каталог</button>
          <button className={styles.categoriesItem}>Каталог</button>
          <button className={styles.categoriesItem}>Каталог</button>
        </div>
        <ul className={styles.grid}>
          {furnitures.map(furniture => (
            <li
              onClick={() => {
                addFurniture(furniture);
                removeFurniture(furniture.id);
                closeModal('furnitures');
              }}
              key={furniture.id}
              className={styles.gridItem}>
              <Image width={100} height={100} src={product_img} alt="product" />
              {furniture.title}
            </li>
          ))}
        </ul>
      </div>
    </BottomSheet>
  );
};

export default FurnituresSheet;
