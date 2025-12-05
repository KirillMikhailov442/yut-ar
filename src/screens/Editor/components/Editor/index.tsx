'use client';

import { Layer, Stage, Transformer } from 'react-konva';
import styles from './Editor.module.scss';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { Input } from '@chakra-ui/react';
import { useEditor } from '@/store/editor';
import Furniture from '../Furniture';
import { useDroppable } from '@dnd-kit/core';
import { CELL_SIZE } from '@/constants/cell';
import { useEffect, useRef } from 'react';
import { STEP_ANGLE } from '@/constants/angle';
import type { Transformer as TransformerType } from 'konva/lib/shapes/Transformer';
import type { Stage as StageType } from 'konva/lib/Stage';

const Editor = () => {
  const {
    furnitures,
    isDragging,
    size,
    activeFurniture,
    setSizeHeight,
    setSizeWidth,
    setActiveFurniture,
    setFurnitureRotation,
  } = useEditor();

  const { setNodeRef } = useDroppable({
    id: 'editor',
  });

  const trRef = useRef<TransformerType>(null);
  const stageRef = useRef<StageType>(null);

  useEffect(() => {
    if (!trRef.current) return;

    const transformer = trRef.current;
    const stage = transformer.getStage();

    if (!stage || !activeFurniture) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
      return;
    }

    const selectedNode = stage.findOne(`#${activeFurniture}`);

    if (selectedNode) {
      transformer.nodes([selectedNode]);
      transformer.getLayer()?.batchDraw();
    } else {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
    }
  }, [activeFurniture]);

  return (
    <div ref={setNodeRef} className={styles.wrapper}>
      <Stage
        ref={stageRef}
        width={size.width}
        height={size.height}
        className={clsx(styles.stage, isDragging && styles.stageActive)}
        onMouseDown={e => {
          const target = e.target as StageType;
          if (target === target.getStage()) {
            setActiveFurniture(0);
          }
        }}>
        <Layer>
          {furnitures.map(furniture => (
            <Furniture key={furniture.id} {...furniture} />
          ))}
          <Transformer
            ref={trRef}
            enabledAnchors={[]}
            resizeEnabled={false}
            rotateEnabled={true}
            rotateAnchorOffset={30}
            rotateAnchorCursor="crosshair"
            borderEnabled={true}
            borderStroke="#efbc18"
            borderStrokeWidth={1}
            borderDash={[5, 5]}
            anchorCornerRadius={10}
            anchorSize={10}
            anchorStroke="#efbc18"
            anchorFill="#efbc18"
            onTransformEnd={event => {
              const snappedRotation =
                Math.round(event.target.rotation() / STEP_ANGLE) * STEP_ANGLE;
              setFurnitureRotation(activeFurniture, snappedRotation);
            }}
          />
        </Layer>
      </Stage>
      <footer className={styles.footer}>
        <Input
          type="number"
          placeholder="Высота:"
          size={'xs'}
          defaultValue={size.height}
          min={200}
          max={1000}
          onChange={e => {
            setSizeHeight(Number(e.target.value));
          }}
          style={{ width: 150 }}
        />
        <X size={20} />
        <Input
          type="number"
          placeholder="Ширина:"
          size={'xs'}
          min={200}
          max={1000}
          step={CELL_SIZE}
          defaultValue={size.width}
          onChange={e => {
            setSizeWidth(Number(e.target.value));
          }}
          style={{ width: 150 }}
        />
      </footer>
    </div>
  );
};

export default Editor;
