import React, { useEffect } from 'react';
import styles from './Problems.module.css';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import iMacImg from '../assets/imac.jpg';
import iphonesImg from '../assets/iphones.jpg';
import { BsArrowRight, BsCircleFill } from 'react-icons/bs';
import Button from './global/button/Button';
import { ImMobile } from 'react-icons/im';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Problems = () => {
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
    <motion.div ref={ref} variants={boxVariants} initial='hidden' animate={control}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.swiper__container}
      >
        <SwiperSlide>
          <div className={styles.problem__slide}>
            <div>
              <img className={styles.problem__slide_img} src={iMacImg} alt='desktopImg' />
            </div>
            <div className={styles.problem__slide_text}>
              <h1>Their Old Website & Problems</h1>

              {[1, 2, 3, 4].map((item) => (
                <p key={item}>
                  <BsArrowRight /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, odio error ab
                  laboriosam beatae inventore laborum eaque provident nemo qui.
                </p>
              ))}

              <Button
                style={{
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                Desktop <BsCircleFill />
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.problem__slide}>
            <div>
              <img className={styles.problem__slide_img} src={iphonesImg} alt='iphonesImg' />
            </div>
            <div className={styles.problem__slide_text}>
              <h1>Their Old Website & Problems</h1>

              {[1, 2, 3, 4].map((item) => (
                <p key={item}>
                  <BsArrowRight /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, odio error ab
                  laboriosam beatae inventore laborum eaque provident nemo qui.
                </p>
              ))}

              <Button
                style={{
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <BsCircleFill /> <ImMobile /> Mobile
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Problems;
