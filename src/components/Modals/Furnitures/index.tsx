'use client';

import { useModals } from '@/store/modals';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import styles from './Furnitures.module.scss';
import { Input } from '@chakra-ui/react';

const FurnituresSheet = () => {
  const { modals, closeModal } = useModals();
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
          <li className={styles.gridItem}></li>
        </ul>
      </div>
    </BottomSheet>
  );
};

export default FurnituresSheet;
