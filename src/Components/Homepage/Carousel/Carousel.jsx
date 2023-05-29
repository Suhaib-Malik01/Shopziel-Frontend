import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./Carousel.scss";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { Flex } from "@chakra-ui/react";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  const cards = [1];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: "2500" }}
        // navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {cards.map((ele, index) => (
          <SwiperSlide key={index}>
            <Flex bg={"#e3ffe6"} w={"full"} h={"full"}>
              <CarouselCard />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
