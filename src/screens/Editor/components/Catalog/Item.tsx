// Item.tsx
import React, { FC, useState } from "react";
import Image from "next/image";
import product_img from "@images/chair.svg";
import styles from "./Catalog.module.scss";
import { IFurniture } from "@/types/Furniture";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Item: FC<IFurniture> = (props) => {
  const [showPopover, setShowPopover] = useState(false);
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
      data: props,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  const handleClick = (e: React.MouseEvent) => {
    // Открываем popover только если не было перетаскивания
    if (!isDragging) {
      setShowPopover(true);
    }
  };

  return (
    <>
      <li
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={styles.gridItem}
        onClick={handleClick}
      >
        <Image width={90} height={90} src={props.img || ""} alt="product" />
      </li>
    </>
  );
};

export default Item;
