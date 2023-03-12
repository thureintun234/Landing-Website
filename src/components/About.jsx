import React, { useEffect } from 'react';
import styles from './About.module.css';
import IpadImg from '../assets/ipad-about.png';
import Button from './global/button/Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
    // else {
    //   control.start('hidden');
    // }
  }, [control, inView]);

  return (
    <motion.div ref={ref} variants={boxVariants} initial='hidden' animate={control} className={styles.about__container}>
      <div className={styles.about__text}>
        <h1 style={{ marginBottom: '2rem' }}>
          <span style={{ borderBottom: '3px solid var(--primary-color)' }}>ABOUT</span>{' '}
          <span style={{ color: 'var(--primary-color)' }}>TRIPPRO</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nemo beatae modi voluptatem alias, quae nostrum
          ipsa eos nam quibusdam distinctio voluptatum. Modi quis placeat provident? Ullam aspernatur maiores itaque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nemo beatae modi voluptatem alias, quae nostrum
          ipsa eos nam quibusdam distinctio voluptatum. Modi quis placeat provident? Ullam aspernatur maiores itaque.
        </p>

        <Button style={{ marginTop: '2rem' }}>TOUR TO WEBSITE</Button>
      </div>
      <div className={styles.about__img}>
        <img src={IpadImg} alt='IpadImg' />
      </div>
    </motion.div>
  );
};

export default About;
