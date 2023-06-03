import {
  Flex,
  VStack,
  Heading,
  Img,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import React from "react";

const CouponCard = () => {
  return (
    <Flex boxShadow={"base"} borderRadius={"xl"} flexDirection={["column","column","row"]}>
      <Img
      m={"auto"}
        w={["80%","80%","25%"]}
        src="https://i.ibb.co/68Bsfk0/istockphoto-1261324062-612x612.jpg"
      />
      <VStack
        px={"5"}
        w={"full"}
        py={"2"}
        alignItems={["center","center","left"]}
        justifyContent={"space-between"}
      >
        <Box textAlign={["center","center","left"]}>
          <Heading fontSize={"2xl"}>{"offerName"}</Heading>
          <Text mt={'1'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            consectetur adipisicing elit. consectetur adipisicing elit.
          </Text>
        </Box>
        <HStack flexDirection={["column","column","row"]} w={"100%"} py={"2"} justifyContent={["left","left","space-between"]}>
          <Text fontWeight={"500"}>{"offerExpiresOn"}</Text>
          <Text>{"Discount"}</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CouponCard;
