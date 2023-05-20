import { Button, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const CarouselCard = () => {
  return (
    <Flex
      w={["95%", "90%", "78%"]}
      h={"full"}
      py={"2rem"}
      alignItems={"center"}
      
      m={"auto"}
      textAlign={"left"}
    >
      <VStack alignItems={"left"} spacing={10} px={"2"}>
        <Heading fontSize={["3xl","4xl","6xl"]}>
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
          <Text mr={"2"}>Explore Now</Text> <AiOutlineSearch />
        </Button>
      </VStack>

      <VStack display={["none","block","block"]}>
        <Img src=""/>
      </VStack>
    </Flex>
  );
};

export default CarouselCard;
