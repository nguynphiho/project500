import React from 'react';
import Header from '../components/header/Header';
import HeroBackground from '../components/heroBackgrounds/index';
import TrustedElement from '../components/trustedElement/index';
import SellingPosition from '../components/sellingPosition/index';
import CarouselItems from '../components/carousel/index';
import MainCategory from '../components/mainCategory/index';
import FibBanner from '../components/fibBanner/index';
import LogoMaker from '../components/logoMaker/index';
import FiverrGuides from '../components/fiverrGuides/index';
import Footer from '../components/footer/Footer';
import { popularServiceData, workMadeServiceData } from "../fakedata";
import CardImageOverlay from "../components/CardImageOverlay/index";
import CardCap from "../components/CardCap/index";


const Home = () => {
  const popularServiceCards = popularServiceData.map(item => <CardImageOverlay data={item}/>)
  const workMadeCard = workMadeServiceData.map(item => <CardCap data={item}/>)
  return (
    <div>
      <Header />
      <HeroBackground />
      <TrustedElement />
      <CarouselItems 
        data={popularServiceCards}
        title="Popular services"
        backgroundColor={'white'}
        slidesToShow={5}
        slidesToScroll={1}
      />
      <SellingPosition />
      <MainCategory />
      <FibBanner />
      <LogoMaker />
      <CarouselItems
        data={workMadeCard}
        title="Inspiring work made on Fiverr"
        backgroundColor={''}
        slidesToShow={4}
        slidesToScroll={1}
      />
      <FiverrGuides/>
      <Footer/>
    </div>
  );
};

export default Home;
