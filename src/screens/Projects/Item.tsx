import React, { FC } from "react";
import styles from "./Projects.module.scss";
import { IProject } from "@/types/Project";
import Link from "next/link";
import Image from "next/image";

const Item: FC<IProject> = ({ id, title, preview }) => {
  return (
    <li className={styles.itemWrapper}>
      <Link href={`/editor/${id}`} className={styles.gridItem}>
        <Image
          className={styles.gridItemImg}
          src={preview || ""}
          alt="preview"
          width={250}
          height={100}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default Item;
