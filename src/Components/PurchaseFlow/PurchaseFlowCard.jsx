import { Heading, Img, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PurchaseFlowCard = () => {
  return (
    <VStack>
      <Img
        w={"40%"}
        src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75"
      />
      <Tag colorScheme={"red"}>Step 1</Tag>
      <Heading fontSize={"lg"} fontWeight={"500"}>Filter & Discover</Heading>
      <Text w={"70%"} textAlign={"center"} fontSize={"md"}>
        Smart filtering and suggestions make it easy to find
      </Text>
    </VStack>
  );
};

export default PurchaseFlowCard;
