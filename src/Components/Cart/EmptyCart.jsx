import { Heading, Img, VStack } from "@chakra-ui/react";
import React from "react";

const EmptyCart = () => {
  return (
    <VStack>
      <Img
        src="https://i.ibb.co/d2gKYRH/preview.png"
       
      />
      <Heading>Cart is Empty</Heading>
    </VStack>
  );
};

export default EmptyCart;
