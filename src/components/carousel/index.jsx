import React from 'react';
import Slider from 'react-slick';
import { Button, Container } from 'react-bootstrap';
import styles from './Carousel.module.scss'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const CustomPrevArrow = ({ onClick }) => (
  <Button className={styles.prevSlide} variant="light" onClick={onClick}>
    <ArrowLeft />
  </Button>
);

const CustomNextArrow = ({ onClick }) => (
  <Button className={styles.nextSlide} variant="light" onClick={onClick}>
    <ArrowRight />
  </Button>
);

const Index = ({title, data, backgroundColor, slidesToShow, slidesToScroll}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  return (
    <div style={{ backgroundColor }}  className={styles.carouselContainer}> 
      <Container>
        <h1 className={styles.carouselTitle}>{ title }</h1>
        <Slider {...settings}>
          {
            data.map((item, idx) => (
              <div key={idx}>
                {item}
              </div>
            ))
          }
        </Slider>
      </Container>
    </div>
  );
}

export default Index;
