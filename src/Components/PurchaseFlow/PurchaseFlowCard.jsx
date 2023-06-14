import { Heading, Img, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PurchaseFlowCard = ({ img, step, title, desc, stepColor }) => {
  return (
    <VStack>
      <Img w={"40%"} src={img} />
      <Tag colorScheme={stepColor}>{step}</Tag>
      <Heading fontSize={"lg"} fontWeight={"500"}>
        {title}
      </Heading>
      <Text w={"70%"} textAlign={"center"} fontSize={"md"}>
        {desc}
      </Text>
    </VStack>
  );
};

export default PurchaseFlowCard;
