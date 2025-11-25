'use client';

import { Draggable, Droppable } from '@hello-pangea/dnd';
import { FC } from 'react';
import styles from './Catalog.module.scss';
import { IFurniture } from '@/types/Furniture';

interface IGrid {
  items?: IFurniture[];
}

const Furnitures: FC<IGrid> = ({ items }) => {
  return (
    <Droppable droppableId="sidebar" isDropDisabled>
      {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={styles.grid}>
          {items?.map((item, index) => (
            <Draggable
              key={item.id}
              index={index}
              draggableId={`sidebar-${item.id}`}>
              {(provided, snapshot) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={item.id}
                  className={styles.gridItem}>
                  {item.title}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default Furnitures;
