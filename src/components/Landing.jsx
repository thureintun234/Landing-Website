import React from 'react';
import styles from './Landing.module.css';
import laptopImg from '../assets/landing-mac.png';
import { AiOutlineDesktop } from 'react-icons/ai';
import { FaWordpress } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';

const Landing = () => {
  return (
    <div className={styles.landing__container}>
      <div className={styles.landing__background}>
        <div className={styles.landing_text}>
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
        </div>
      </div>
      <div className={styles.landing__img}>
        <img src={laptopImg} alt='laptopImg' />
      </div>
    </div>
  );
};

export default Landing;
