'use client';

import { useModals } from '@/store/modals';
import { Input } from 'antd';
import { Sheet } from 'react-modal-sheet';
import styles from './Furnitures.module.scss';

const FurnituresSheet = () => {
  const { modals, closeModal } = useModals();
  return (
    <Sheet
      isOpen={modals.furnitures}
      onClose={() => {
        closeModal('furnitures');
      }}>
      <Sheet.Backdrop />
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className={styles.wrapper}>
            <Input placeholder="Поиск" variant="filled" size={'large'} />
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
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default FurnituresSheet;
