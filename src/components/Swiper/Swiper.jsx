import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const slide1 = [require("../../assets/pain.webp")];
const slide2 = [require("../../assets/viennoiseries.webp")];
const slide3 = [require("../../assets/pain-baguette.jpg")];
const slide4 = [require("../../assets/pain-baguette-2.jpeg")];

const MySwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, 
          pauseOnMouseEnter: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
        speed={3000}
      >
        <SwiperSlide><img src={slide1} alt='slide 1'/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slide 2'/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='slide 3'/></SwiperSlide>
        <SwiperSlide><img src={slide4} alt='slide 4'/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default MySwiper

/* {<SwiperSlide><img src={slide1} alt='slide 1'/></SwiperSlide>
<SwiperSlide><img src={slide2} alt='slide 2'/></SwiperSlide>
<SwiperSlide><img src={slide3} alt='slide 3'/></SwiperSlide>
<SwiperSlide><img src={slide4} alt='slide 4'/></SwiperSlide>} */