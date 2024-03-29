import { Button, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const CarouselCard = () => {
  return (
    <Flex
      w={["95%", "90%", "78%"]}
      py={["5rem", "4rem", "4rem", "0rem"]}
      
      alignItems={"center"}
      justifyContent={"space-between"}
      m={"auto"}
      
      bgImage={
        "https://ciseco-nextjs.vercel.app/_next/static/media/Moon.d5aa06ae.svg"
      }
      bgSize={"100% 100%"}
      textAlign={["center", "center", "center", "left"]}
    >
      <VStack
        alignItems={["center", "center", "center", "flex-start"]}
        w={"full"}
        spacing={10}
        px={"2"}
      >
        <Heading fontSize={["3xl", "4xl", "4xl", "4xl", "6xl"]}>
          <Text fontSize={"2xl"}>In this season, find the best 🔥</Text>
          Exclusive collection
          <br />
          for everyone
        </Heading>
        <Button
          w={"180px"}
          bg={"buttonColor"}
          color={"white"}
          borderRadius={"3xl"}
          colorScheme=""
          size={"lg"}
        >
          <Text mr={"2"}>Explore Now</Text> <BsSearch />
        </Button>
      </VStack>

      <VStack
        justifyContent={"flex-end"}
        w={"full"}
        h={"full"}
        display={["none", "none", "none", "block"]}
        alignItems="flex-end"
        
      >
        {/* <Player
          autoplay
          loop
          src={animationData}
          style={{ width: "100%", height: "90%" }}
        /> */}

        <Img
          objectFit={"fill"}
          
          h={"full"}
          src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.a9b085d9.png&w=1080&q=75"
        />
      </VStack>
    </Flex>
  );
};

export default CarouselCard;
