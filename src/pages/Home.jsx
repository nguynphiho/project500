import React from 'react';
import Header from '../components/header/Header';
import HeroBackground from '../components/heroBackgrounds/index';
import TrustedElement from '../components/trustedElement/index';
import SellingPosition from '../components/sellingPosition/index';
// import CarouselItems from '../components/carousel/index';
import MainCategory from '../components/mainCategory/index';
import FibBanner from '../components/fibBanner/index';
import LogoMaker from '../components/logoMaker/index';


const Home = () => {
  return (
    <div>
      <Header />
      <HeroBackground />
      <TrustedElement />
      <SellingPosition />
      <MainCategory />
      <FibBanner />
      <LogoMaker />
    </div>
  );
};

export default Home;
