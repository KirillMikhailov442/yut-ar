import React from 'react';
import styles from './Projects.module.scss';

const ProjectScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <h5>УЮТ AR</h5>
      </div>
      <ul className={styles.grid}>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
        <li className={styles.gridItem}>1</li>
      </ul>
    </div>
  );
};

export default ProjectScreen;
