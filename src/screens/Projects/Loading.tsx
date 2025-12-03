import { Skeleton } from 'antd';
import styles from './Projects.module.scss';

const Loading = () => {
  return (
    <ul className={styles.grid}>
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
      <Skeleton.Node active style={{ width: '100%', height: '100%' }} />
    </ul>
  );
};

export default Loading;
