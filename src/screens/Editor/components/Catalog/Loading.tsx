import React from "react";
import styles from "./Catalog.module.scss";
import { Skeleton } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton h={45} />
      <div className={styles.categories}>
        <Skeleton height={35} w={70} />
        <Skeleton height={35} w={70} />
        <Skeleton height={35} w={70} />
        <Skeleton height={35} w={70} />
        <Skeleton height={35} w={70} />
      </div>
      <div className={styles.grid}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default Loading;
