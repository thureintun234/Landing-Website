import React, { useEffect, useState } from 'react';
import styles from './Challenges.module.css';
import cubeImg from '../assets/cube-challene.png';
import Button from './global/button/Button';
import { getPosts } from '../api/postService';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5, x: { duration: 1 }, default: { ease: 'linear' } },
  },
  hidden: { opacity: 0, scale: 0, y: 200 },
};

const Challenges = () => {
  const [visible, setVisible] = useState(5);
  const [items, setItems] = useState([]);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  const showMoreItems = () => {
    setVisible((previous) => previous + 5);
  };

  useEffect(() => {
    getPosts().then((res) => setItems(res));
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={boxVariants}
      initial='hidden'
      animate={control}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className={styles.challenge__container}
    >
      <div className={styles.challenge__img}>
        <img src={cubeImg} alt='cubeImg' />
      </div>
      <div className={styles.challenge__text}>
        <h1>
          OUR <span style={{ color: 'var(--primary-color)' }}>CHALLENGES</span>
        </h1>

        {/* api filter */}
        {items.slice(0, visible).map((item) => (
          <p key={item.id}>
            <span>{item.id}</span> {item.title}
          </p>
        ))}

        <Button style={{ marginTop: '1rem', marginLeft: '2rem' }} onClick={showMoreItems}>
          VIEW MORE
        </Button>
      </div>
    </motion.div>
  );
};

export default Challenges;
