import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./ProductCard";

const ProductSlider = ({ title, subTitle, data }) => {
  const swiper = React.useRef(null);

  const slidePrev = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext();
    }
  };

  return (
    <VStack w={"full"} mt={20}>
      <Flex
        w={"78%"}
        justifyContent={"space-between"}
        flexDirection={["column", "column", "row"]}
      >
        <Heading fontSize={["2xl", "3xl", "4xl"]}>
          {title} <span style={{ color: "gray" }}>{subTitle}</span>
        </Heading>

        <HStack ml={"auto"}>
          <IconButton
            borderRadius={"50%"}
            variant={"ghost"}
            onClick={slidePrev}
            icon={<MdKeyboardArrowLeft size={"20px"} />}
          />
          <IconButton
            borderRadius={"50%"}
            variant={"ghost"}
            onClick={slideNext}
            icon={<MdKeyboardArrowRight size={"20px"} />}
          />
        </HStack>
      </Flex>
      <Flex width={["95%", "90%", "80%"]} height="auto" alignItems="center">
        <Swiper
          slidesPerView={1.5}
          loop
          spaceBetween={15}
          ref={swiper}
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },

            1440: {
              slidesPerView: 5,
            }
          }}
        >
          {data.map((ele) => (
            <SwiperSlide>
              <ProductCard key={ele.id} title={ele.title} price={ele.price} description={ele.description} img={ele.image} rating={ele.rating.rate}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </VStack>
  );
};

export default ProductSlider;
