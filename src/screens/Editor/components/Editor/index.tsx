'use client';

import { Layer, Rect, Stage, Transformer } from 'react-konva';
import styles from './Editor.module.scss';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { IFurniture } from '@/types/Furniture';
import { KonvaEventObject } from 'konva/lib/Node';
import { Rect as KonvaRect } from 'konva/lib/shapes/Rect';
import { Transformer as KonvaTransformer } from 'konva/lib/shapes/Transformer';
import { X } from 'lucide-react';
import { Input } from '@chakra-ui/react';
import { useEditor } from '@/store/editor';
import Furniture from '../Furniture';
import { useDroppable } from '@dnd-kit/core';

const Editor = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { furnitures, isDragging } = useEditor();

  const { setNodeRef } = useDroppable({
    id: 'editor',
  });

  return (
    <div ref={setNodeRef} className={styles.wrapper}>
      <Stage
        width={1000}
        height={600}
        className={clsx(styles.stage, isDragging && styles.stageActive)}
        onMouseDown={e => {
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}>
        <Layer>
          {furnitures.map(furniture => (
            <Furniture key={furniture.id} {...furniture} />
          ))}
        </Layer>
      </Stage>
      <footer className={styles.footer}>
        <Input
          type="number"
          placeholder="Высота:"
          size={'xs'}
          style={{ width: 150 }}
        />
        <X size={20} />
        <Input
          type="number"
          placeholder="Ширина:"
          size={'xs'}
          style={{ width: 150 }}
        />
      </footer>
    </div>
  );
};

export default Editor;
