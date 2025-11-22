'use client';

import { Layer, Rect, Stage, Transformer } from 'react-konva';
import styles from './Editor.module.scss';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { IFurniture } from '@/types/Furniture';

interface Position {
  x: number;
  y: number;
}

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
}

const Editor = () => {
  const [isDragMove, setIsDragMove] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const transformerRef = useRef<any>();
  const shapesRef = useRef<{ [key: number]: any }>({});

  const [furnitures, setFurnitures] = useState<IFurniture[]>([
    { id: 1, x: 100, y: 0, title: 'A1', width: 100, height: 100, rotation: 0 },
    { id: 2, x: 0, y: 100, title: 'A2', width: 50, height: 100, rotation: 0 },
    { id: 3, x: 0, y: 0, title: 'A3', width: 100, height: 50, rotation: 0 },
  ]);

  useEffect(() => {
    if (selectedId && shapesRef.current[selectedId]) {
      transformerRef.current.nodes([shapesRef.current[selectedId]]);
    } else {
      transformerRef.current.nodes([]);
    }
  }, [selectedId]);

  const snapToGrid = (position: Position) => {
    return {
      x: Math.round(position.x / 50) * 50,
      y: Math.round(position.y / 50) * 50,
    };
  };

  const snapRotation = (rotation: number) => {
    return Math.round(rotation / 45) * 45;
  };

  const checkCollision = (rect1: BoundingBox, rect2: BoundingBox): boolean => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  const checkCollisions = (
    currentId: number,
    newPos: Position,
    width: number,
    height: number,
  ): boolean => {
    const currentRect: BoundingBox = {
      x: newPos.x,
      y: newPos.y,
      width: width,
      height: height,
    };

    for (const furniture of furnitures) {
      if (furniture.id === currentId) continue;

      const otherRect: BoundingBox = {
        x: furniture.x,
        y: furniture.y,
        width: furniture.width,
        height: furniture.height,
      };

      if (checkCollision(currentRect, otherRect)) {
        return true;
      }
    }
    return false;
  };

  const checkBoundaries = (pos: Position, width: number, height: number) => {
    let newX = pos.x;
    let newY = pos.y;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + width > 1000) newX = 1000 - width;
    if (newY + height > 600) newY = 600 - height;

    return { x: newX, y: newY };
  };

  const handleDragEnd = (e: any, id: number) => {
    setIsDragMove(false);
    const newPos = snapToGrid(e.target.position());
    const boundedPos = checkBoundaries(
      newPos,
      e.target.width(),
      e.target.height(),
    );

    const hasCollision = checkCollisions(
      id,
      boundedPos,
      e.target.width(),
      e.target.height(),
    );

    if (!hasCollision) {
      setFurnitures(prev =>
        prev.map(item =>
          item.id == id ? { ...item, x: boundedPos.x, y: boundedPos.y } : item,
        ),
      );
    } else {
      const furniture = furnitures.find(f => f.id === id);
      if (furniture) {
        e.target.position({ x: furniture.x, y: furniture.y });
        e.target.getLayer().batchDraw();
      }
    }
  };

  const handleDragMove = (e: any, id: number) => {
    const node = e.target;
    const newPos = snapToGrid({
      x: node.x(),
      y: node.y(),
    });

    const boundedPos = checkBoundaries(newPos, node.width(), node.height());

    const hasCollision = checkCollisions(
      id,
      boundedPos,
      node.width(),
      node.height(),
    );

    if (hasCollision) {
      node.fill('rgba(255, 100, 100, 0.7)');
    } else {
      node.fill('#f0f0f0');
    }

    node.position(boundedPos);
  };

  const handleTransform = (e: any) => {
    if (!selectedId) return;

    const node = shapesRef.current[selectedId];
    if (!node) return;

    const snappedRotation = snapRotation(node.rotation());
    node.rotation(snappedRotation);
  };

  const handleTransformEnd = (e: any) => {
    if (!selectedId) return;

    const node = shapesRef.current[selectedId];
    if (!node) return;

    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);

    const finalRotation = node.rotation();

    const furniture = furnitures.find(f => f.id === selectedId);
    if (furniture) {
      const newWidth = Math.max(10, node.width() * scaleX);
      const newHeight = Math.max(10, node.height() * scaleY);

      const newPos = snapToGrid({
        x: node.x(),
        y: node.y(),
      });

      const boundedPos = checkBoundaries(newPos, newWidth, newHeight);

      const hasCollision = checkCollisions(
        selectedId,
        boundedPos,
        newWidth,
        newHeight,
      );

      if (!hasCollision) {
        setFurnitures(prev =>
          prev.map(item =>
            item.id === selectedId
              ? {
                  ...item,
                  x: boundedPos.x,
                  y: boundedPos.y,
                  width: newWidth,
                  height: newHeight,
                  rotation: finalRotation,
                }
              : item,
          ),
        );
      } else {
        node.position({ x: furniture.x, y: furniture.y });
        node.width(furniture.width);
        node.height(furniture.height);
        node.rotation(furniture.rotation || 0);
        node.getLayer().batchDraw();
      }
    }
  };

  return (
    <Stage
      width={1000}
      height={600}
      className={clsx(styles.stage, isDragMove && styles.stageActive)}
      onMouseDown={e => {
        if (e.target === e.target.getStage()) {
          setSelectedId(null);
        }
      }}>
      <Layer>
        {furnitures.map(furniture => (
          <Rect
            key={furniture.id}
            ref={ref => {
              if (ref) {
                shapesRef.current[furniture.id] = ref;
                if (furniture.rotation) {
                  ref.rotation(furniture.rotation);
                }
              }
            }}
            draggable
            width={furniture.width}
            height={furniture.height}
            fill="#f0f0f0"
            stroke="#333"
            x={furniture.x}
            y={furniture.y}
            rotation={furniture.rotation || 0}
            onDragMove={e => handleDragMove(e, furniture.id)}
            onDragEnd={e => handleDragEnd(e, furniture.id)}
            onDragStart={() => setIsDragMove(true)}
            onClick={() => setSelectedId(furniture.id)}
            onTap={() => setSelectedId(furniture.id)}
            strokeWidth={selectedId === furniture.id ? 4 : 2}
          />
        ))}
        <Transformer
          ref={transformerRef}
          rotateEnabled={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
            'rotater',
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }

            if (newBox.x < 0) {
              newBox.width += newBox.x;
              newBox.x = 0;
            }
            if (newBox.y < 0) {
              newBox.height += newBox.y;
              newBox.y = 0;
            }
            if (newBox.x + newBox.width > 1000) {
              newBox.width = 1000 - newBox.x;
            }
            if (newBox.y + newBox.height > 600) {
              newBox.height = 600 - newBox.y;
            }

            return newBox;
          }}
          onTransform={handleTransform}
          onTransformEnd={handleTransformEnd}
        />
      </Layer>
    </Stage>
  );
};

export default Editor;
