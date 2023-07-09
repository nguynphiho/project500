import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from 'react';
import CategoryCard from '../category/index';
import styles from './Carousel.module.scss';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'
import { Container } from 'react-bootstrap';

const Index = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <div className={ styles.carouselContainer }>
      <div className={ styles.prevSlide} ref={ navigationPrevRef }>
        <ArrowLeftCircleFill />
      </div>
      <div className={ styles.nextSlide} ref={ navigationNextRef }>
        <ArrowRightCircleFill />
      </div>
      <h2 className={ styles.carouselTitle}> Popular services </h2>
      <Container>
        <div className={styles.cardContainer}>
          <Swiper
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              370: {
                slidesPerView: 2,
              },

              640: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[]}
            className={styles.mySwiper}
          >
            {/* {
              data.map(item => (
                <SwiperSlide key={item.id}>
                  
                </SwiperSlide>
              ))
            } */}

            <SwiperSlide>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Index;
