import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const CheckoutBox = ({ cartData }) => {
  return (
    <Box w={["full", "full", "full", "50%"]} px={["0", "0", "10"]}>
      <VStack w={"full"} alignItems={"left"}>
        <Heading pb={"5"} fontSize={"2xl"}>
          Order Summary
        </Heading>
        <Flex w={"full"} justifyContent={"space-between"}>
          <Text color={"gray.600"} fontWeight={"600"}>
            Total Products
          </Text>
          <Text fontWeight={"700"}>{cartData.totalProducts}</Text>
        </Flex>
        <Divider />
        <Flex w={"full"} justifyContent={"space-between"}>
          <Text color={"gray.600"} fontWeight={"600"}>
            Sub Total
          </Text>
          <Text fontWeight={"700"}>{cartData.cartTotal}</Text>
        </Flex>
        <Divider />
        <Flex w={"full"} justifyContent={"space-between"}>
          <Text color={"gray.600"} fontWeight={"600"}>
            Payable Amount
          </Text>
          <Text fontWeight={"700"}>{cartData.cartTotal}</Text>
        </Flex>
        <Divider />
        <Button
          borderRadius={"3xl"}
          _hover={{ bg: "buttonColor", boxShadow: "lg" }}
          fontWeight={"400"}
          fontSize={"xl"}
          h={"3rem"}
          color={"white"}
          bg={"buttonColor"}
          id="rzp-button1"
        >
          Proceed to Checkout
        </Button>
      </VStack>
    </Box>
  );
};

export default CheckoutBox;
