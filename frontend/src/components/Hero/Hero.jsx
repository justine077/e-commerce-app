import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";
import { Pagination, Autoplay } from "swiper";
import HeroImg1 from './HeroImages/BannerImg1.png';
import HeroImg2 from './HeroImages/BannerImg2.png';
import HeroImg3 from './HeroImages/BannerImg3.png';
import HeroImg4 from './HeroImages/BannerImg4.png';



const Hero = () => {
  return (
    <div className="-z-10 mt-8">
      <Swiper
        // slidesPerView={1}
        centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        // loop={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><a href="/product"><img src={HeroImg1} alt='Hero1'/></a></SwiperSlide>
        <SwiperSlide><a href="/product"><img src={HeroImg2} alt='Hero2'/></a></SwiperSlide>
        <SwiperSlide><a href="/product"><img  src={HeroImg3} alt='Hero3'/></a></SwiperSlide>
        <SwiperSlide><a href="/product"><img  src={HeroImg4} alt='Hero4'/></a></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
