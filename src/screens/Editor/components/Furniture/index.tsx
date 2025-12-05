import { FC, useEffect, useState } from "react";
import { IFurniture } from "@/types/Furniture";
import { Group, Image, Rect } from "react-konva";
import { useEditor } from "@/store/editor";
import { CELL_SIZE } from "@/constants/cell";
import user_img from "@images/chair.svg";
import { STEP_ANGLE } from "@/constants/angle";

const Furniture: FC<IFurniture> = ({
  id,
  x,
  y,
  width,
  height,
  rotation,
  img,
}) => {
  const {
    setActiveFurniture,
    setDragging,
    setFurniturePosition,
    setFurnitureRotation,
    furnitures,
    size,
    activeFurniture,
  } = useEditor();
  const [position, setPosition] = useState({ x, y });
  const [currentRotation, setCurrentRotation] = useState(rotation);
  const [isDragging, setIsDragging] = useState(false);
  const [isCollision, setIsCollision] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const imageSrc = img || user_img.src;
    if (imageSrc) {
      const img = new window.Image(width, height);
      img.src = imageSrc;
      img.onload = () => {
        setImage(img);
      };
    }
  }, []);

  const snapToGrid = (pos: number) => {
    return Math.round(pos / CELL_SIZE) * CELL_SIZE;
  };

  const snapRotation = (angle: number) => {
    return Math.round(angle / STEP_ANGLE) * STEP_ANGLE;
  };

  return (
    <Group
      id={String(id)}
      x={position.x}
      y={position.y}
      width={width}
      height={height}
      rotation={currentRotation}
      draggable
      onTransformStart={() => setDragging(true)}
      onTransformEnd={(event) => {
        const newRotation = snapRotation(event.target.rotation());
        setCurrentRotation(newRotation);
        setFurnitureRotation(id, newRotation);
        setDragging(false);
      }}
      onClick={(e) => {
        e.cancelBubble = true;
        setActiveFurniture(id);
      }}
      onTap={(e) => {
        e.cancelBubble = true;
        setActiveFurniture(id);
      }}
      onDragEnd={(event) => {
        const newX = snapToGrid(event.target.x());
        const newY = snapToGrid(event.target.y());

        setFurniturePosition(id, newX, newY);
        setPosition({
          x: newX,
          y: newY,
        });
        setDragging(false);
        setIsDragging(false);
        setActiveFurniture(0);
      }}
      dragBoundFunc={(pos) => {
        let newX = snapToGrid(pos.x);
        let newY = snapToGrid(pos.y);

        if (newX < 0) newX = 0;
        else if (newX > size.width - width) newX = size.width - width;

        if (newY < 0) newY = 0;
        else if (newY > size.height - height) newY = size.height - height;

        return {
          x: newX,
          y: newY,
        };
      }}
      onDragMove={(event) => {
        const newX = snapToGrid(event.target.x());
        const newY = snapToGrid(event.target.y());

        for (const furniture of furnitures) {
          if (furniture.id === id) continue;

          if (
            newX < furniture.x + furniture.width &&
            newX + width > furniture.x &&
            newY < furniture.y + furniture.height &&
            newY + height > furniture.y
          ) {
            setIsCollision(true);
          } else {
            setIsCollision(false);
          }
        }

        setPosition({
          x: newX,
          y: newY,
        });
      }}
      onDragStart={() => {
        setDragging(true);
        setIsDragging(true);
        setActiveFurniture(id);
      }}
    >
      <Rect
        width={width}
        height={height}
        fill={"#fff"}
        stroke={
          isCollision
            ? "#CA2A30"
            : activeFurniture == id
            ? "#efbc18"
            : "#DDD9D9"
        }
      />
      {image && (
        <Image
          image={image}
          width={width * 0.65}
          height={height * 0.9}
          x={x / width + 15}
          y={y / height + 5}
        />
      )}
    </Group>
  );
};

export default Furniture;
