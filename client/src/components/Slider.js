import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="absolute inset-0 bg-no-repeat bg-cove"><img src="/3.jpg" className="w-full h-full object-cover" alt="" /></div><h1>Home</h1></SwiperSlide> 
        <SwiperSlide><div className="absolute inset-0 bg-no-repeat bg-cove"><img src="/1.jpg" className="w-full h-full object-cover" alt="" /></div><h1>Home</h1></SwiperSlide> 
        <SwiperSlide><div className="absolute inset-0 bg-no-repeat bg-cove"><img src="/4.jpg" className="w-full h-full object-cover" alt="" /></div><h1>Home</h1></SwiperSlide> 
      </Swiper>
    </>
  );
}
