import React, { useEffect } from 'react';
import styles from './Footer.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import logo1 from '../assets/footer/footer1.png';
import logo2 from '../assets/footer/footer2.png';
import logo3 from '../assets/footer/footer3.png';
import logo4 from '../assets/footer/footer4.png';
import logo5 from '../assets/footer/footer5.png';
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

const Footer = () => {
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
    <motion.div
      className={styles.container}
      ref={ref}
      aria-hidden='true'
      initial='hidden'
      animate={control}
      variants={characterAnimation}
    >
      <motion.div
        className={styles.footer__container}
        ref={ref}
        aria-hidden='true'
        initial='hidden'
        animate={control}
        variants={characterAnimation}
      >
        <div>
          <p style={{ fontSize: '20px' }}>QUICK LINKS</p>
          <ul className={styles.footer__list}>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Quotation</li>
            <li>Partnership</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: '20px' }}>OUR SERVICES</p>
          <ul className={styles.footer__list}>
            <li>Web Development</li>
            <li>Web Design</li>
            <li>Responsive Website Design</li>
            <li>CMS Website Design</li>
            <li>Custom Website Design</li>
            <li>UI & UX Website Design</li>
            <li>360 Virtual Tour</li>
          </ul>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li>Ecommerce Development</li>
            <li>WooCommerce Development</li>
            <li>osCommerce Development</li>
            <li>Magneto Development</li>
            <li>BigCommerce Development</li>
            <li>SSL Certificate</li>
            <li>Promotion Video</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: '20px' }}>VISIBLE ONE SINGAPORE</p>
          <ul className={styles.footer__list} style={{ listStyleType: 'none', fontWeight: 'bold' }}>
            <li>
              <p style={{ fontSize: '22px' }}>+65 6248 0838</p>
            </li>
            <li>
              <AiOutlineMail /> info@visibleone.com
            </li>
            <li>
              24 Sin Ming Lane Midview City #07-93
              <br />
              Singapore 573970
            </li>
            <li>Office Hour: Mon-Fri(9am-6pm)</li>
            <li>
              <button className={styles.footer__button} style={{ marginRight: '1rem' }}>
                Contact Us
              </button>{' '}
              Contact HK Office
            </li>
          </ul>
        </div>
      </motion.div>

      <div className={styles.footer__logos}>
        <div>
          {[logo1, logo2, logo3, logo4, logo5].map((img) => (
            <img key={img} src={img} alt='logo' width={80} height={40} />
          ))}
        </div>
        <div className={styles.footer__logos_contact}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Subscribe to our news, tips and guidelines</span>
            <input placeholder='123@test.com' />
          </div>

          <button className={styles.footer__button}>SUBMIT</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
