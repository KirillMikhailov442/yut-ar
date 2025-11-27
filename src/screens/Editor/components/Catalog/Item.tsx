import React, { FC } from 'react';
import Image from 'next/image';
import product_img from '@images/chair.svg';
import styles from './Catalog.module.scss';
import { IFurniture } from '@/types/Furniture';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const Item: FC<IFurniture> = props => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
      data: props,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles.gridItem}>
      <Image width={40} height={40} src={product_img} alt="product" />
    </li>
  );
};

export default Item;
