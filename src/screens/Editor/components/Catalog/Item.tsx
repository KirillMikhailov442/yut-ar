import React, { FC } from 'react';
import Image from 'next/image';
import product_img from '@images/chair.svg';
import styles from './Catalog.module.scss';
import { IFurniture } from '@/types/Furniture';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useCatalog } from '@store/catalog';
import clsx from 'clsx';
import { Info, Plus } from 'lucide-react';
import { useEditor } from '@store/editor';
import { useRouter } from 'next/navigation';

const Item: FC<IFurniture> = props => {
  const { setActiveFurniture, activeFurniture } = useCatalog();
  const editor = useEditor();
  const { push } = useRouter();
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
      title={props.title}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={clsx(
        styles.gridItem,
        activeFurniture == props.id && styles.gridItemActive,
      )}
      onClick={() => {
        setActiveFurniture(props.id);
      }}>
      {props.id == activeFurniture && (
        <nav className="flex gap-1 absolute right-0 -bottom-3">
          <button
            onClick={e => {
              e.stopPropagation();
              setActiveFurniture(0);
              editor.addFurniture({ ...props, x: 0, y: 0 });
            }}
            className="flex items-center justify-center rounded-full !bg-[var(--yellow)] !text-white w-[30px] aspect-square">
            <Plus size={20} />
          </button>
          <button
            onClick={() => push(`/products/${props.id}`)}
            className="flex items-center justify-center rounded-full !bg-[var(--yellow)] !text-white w-[30px] aspect-square">
            <Info size={20} />
          </button>
        </nav>
      )}
      <Image
        width={90}
        height={90}
        src={props.img || product_img}
        alt="product"
      />
    </li>
  );
};

export default Item;
