import styles from './Hero.module.scss';
import line_img from '@images/bg-lines.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image className={styles.bgLines} src={line_img} alt="line" />
      <div className={styles.container}>
        <div>
          <h4 className={styles.title}>УЮТ AR</h4>
          <p className={styles.subtitle}>
            это не только помощник в дизайне интерьера, но и пространство для
            мебельных брендов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
