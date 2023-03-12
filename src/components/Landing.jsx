import React, { useEffect } from 'react';
import styles from './Landing.module.css';
import laptopImg from '../assets/landing-mac.png';
import { AiOutlineDesktop } from 'react-icons/ai';
import { FaWordpress } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: '3em',
  },
  visible: {
    opacity: 1,
    y: '0em',
    transition: {
      duration: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Landing = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div className={styles.landing__container}>
      <div className={styles.landing__background}>
        <motion.div
          className={styles.landing_text}
          ref={ref}
          aria-hidden='true'
          initial='hidden'
          animate={control}
          variants={characterAnimation}
        >
          <h1>TRIPPRO - AN ECOMMERCE SOLUTION</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam repellat maiores debitis, eaque.
            laborum ad quidem fugit soluta
          </p>
          <p>suscipit reprehenderit neque numquam delectus id laborum ad quidem fugit soluta porro voluptas.</p>

          <div className={styles.landing__info}>
            <div className={styles.info__div} style={{ borderRight: '3px solid white' }}>
              <div>
                <span className={styles.bold}>Built for:</span>
              </div>
              <div>
                <AiOutlineDesktop size='2.4rem' style={{ paddingRight: '1.4rem' }} />
              </div>
            </div>
            <div className={styles.info__div} style={{ borderRight: '3px solid white' }}>
              <div>
                Technologies:
                <br />
                <span className={styles.bold}>Wordpress</span>
              </div>
              <div>
                <FaWordpress size='2.4rem' style={{ paddingRight: '1.4rem' }} />
              </div>
            </div>
            <div className={styles.info__div}>
              <div>
                Industry:
                <br />
                <span className={styles.bold}>Ecommerce</span>
              </div>
              <TiShoppingCart size='2.4rem' /> <br />
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.landing__img}>
        <img src={laptopImg} alt='laptopImg' />
      </div>
    </div>
  );
};

export default Landing;
