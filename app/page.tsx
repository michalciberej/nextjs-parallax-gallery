'use client';

import styles from './page.module.scss';
import Column from './components/index';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform } from 'framer-motion';
import useWindowSize from './hooks/useWindowSize';
import { AiOutlineArrowDown } from 'react-icons/ai';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg',
  '/image10.jpg',
  '/image11.jpg',
  '/image12.jpg',
];

export default function Home() {
  const container = useRef(null);
  const { height } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <section>
        <div className={styles.blank}>
          <h1>Scroll down</h1> <AiOutlineArrowDown />
        </div>
      </section>
      <section>
        <div className={styles.mask}>
          <div
            className={styles.gallery}
            ref={container}>
            <Column
              images={[images[0], images[1], images[2]]}
              y={y}
            />
            <Column
              images={[images[3], images[4], images[5]]}
              y={y2}
            />
            <Column
              images={[images[6], images[7], images[8]]}
              y={y3}
            />
            <Column
              images={[images[9], images[10], images[11]]}
              y={y4}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.blank} />
      </section>
    </main>
  );
}
