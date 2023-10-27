import Image from 'next/image';
import styles from './styles.module.scss';
import { MotionValue, motion } from 'framer-motion';

export const index = ({
  images,
  y,
}: {
  images: string[];
  y: MotionValue<number>;
}) => {
  return (
    <motion.div
      className={styles.column}
      style={{ y }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={image}
            alt={image}
            fill
          />
        </div>
      ))}
    </motion.div>
  );
};
