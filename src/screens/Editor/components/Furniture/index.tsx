import { FC, useEffect, useState } from 'react';
import styles from './Furrniture.module.scss';
import { IFurniture } from '@/types/Furniture';
import { Group, Image, Rect, Text } from 'react-konva';
import { useEditor } from '@/store/editor';
import { CELL_SIZE } from '@/constants/cell';
import user_img from '@images/user.webp';

const Furniture: FC<IFurniture> = ({ id, x, y, width, height, title }) => {
  const { setDragging, setFurniturePosition } = useEditor();
  const [position, setPosition] = useState({ x, y });
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const imageSrc = user_img.src;
    if (imageSrc) {
      const img = new window.Image(user_img.width, user_img.height);
      img.src = imageSrc;
      img.onload = () => {
        setImage(img);
      };
    }
  }, []);

  const snapToGrid = (pos: number) => {
    return Math.round(pos / CELL_SIZE) * CELL_SIZE;
  };

  return (
    <Group
      x={position.x}
      y={position.y}
      width={width}
      height={height}
      draggable
      onDragEnd={event => {
        const newX = snapToGrid(event.target.x());
        const newY = snapToGrid(event.target.y());

        setFurniturePosition(id, newX, newY);
        setPosition({
          x: newX,
          y: newY,
        });
        setDragging(false);
        setIsDragging(false);
      }}
      dragBoundFunc={pos => ({
        x: snapToGrid(pos.x),
        y: snapToGrid(pos.y),
      })}
      onDragMove={event => {
        setPosition({
          x: snapToGrid(event.target.x()),
          y: snapToGrid(event.target.y()),
        });
      }}
      onDragStart={() => {
        setDragging(true);
        setIsDragging(true);
      }}>
      <Rect
        width={width}
        height={height}
        fill={isDragging ? '#aaaaaa' : '#cccccc'}
        stroke="#000000"
      />
      {image && (
        <Image
          image={image}
          width={width}
          height={height}
          // width={width * 0.8}
          // height={height * 0.8}
          // x={width * 0.1}
          // y={height * 0.1}
        />
      )}
      {/* <Text
        y={height / 2 - 10}
        width={width}
        text={title}
        fontSize={16}
        fill="#000000"
        align="center"
      /> */}
    </Group>
  );
};

export default Furniture;
