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

const CouponCard = ({ title, date, description, discountValue }) => {
  return (
    <Flex
      boxShadow={"base"}
      borderRadius={"xl"}
      flexDirection={["column", "column", "row"]}
      gap={"4"}
    >
      <Img
        m={"auto"}
        w={["100%", "80%", "25%"]}
        src="https://i.ibb.co/68Bsfk0/istockphoto-1261324062-612x612.jpg"
      />
      <VStack
        px={["1", "1", "0"]}
        w={"full"}
        py={"2"}
        alignItems={["center", "center", "left"]}
        justifyContent={"space-between"}
      >
        <Box w={"full"} textAlign={["center", "center", "left"]}>
          <Heading fontSize={["lg", "xl", "2xl"]}>{title}</Heading>
          <Text mt={"1"}>{description}</Text>
        </Box>
        <HStack
          flexDirection={["column", "column", "row"]}
          w={"100%"}
          py={"2"}
          justifyContent={["left", "left", "space-between"]}
        >
          <Text fontWeight={"500"}>{new Date(date).toDateString()}</Text>
          <Text>{discountValue}</Text>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CouponCard;
