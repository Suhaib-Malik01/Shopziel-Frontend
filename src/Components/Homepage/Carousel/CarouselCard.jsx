import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import animationData from "../../AnimatedAssets/Clothes_store.json";
import { Player } from "@lottiefiles/react-lottie-player";

const CarouselCard = () => {
  return (
    <Flex
      w={["95%", "90%", "78%"]}
      h={"full"}
      py={"2rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
      m={"auto"}
      bgImage={"https://ciseco-nextjs.vercel.app/_next/static/media/Moon.d5aa06ae.svg"}
      bgSize={"100% 100%"}
      textAlign={"left"}
    >
      <VStack alignItems={"left"} spacing={10} px={"2"}>
        <Heading fontSize={["3xl", "4xl", "6xl"]}>
          <Text fontSize={"2xl"}>In this season, find the best 🔥</Text>
          Exclusive collection
          <br />
          for everyone
        </Heading>
        <Button
          w={"180px"}
          bg={"#0f172a"}
          color={"white"}
          borderRadius={"3xl"}
          colorScheme=""
          size={"lg"}
        >
          <Text mr={"2"}>Explore Now</Text> <BsSearch />
        </Button>
      </VStack>

      <VStack justifyContent={"flex-end"}  w={"40%"} display={["none", "block", "block"]} alignItems="center">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: "100%", height: "90%" }}
        />
      </VStack>
    </Flex>
  );
};

export default CarouselCard;
