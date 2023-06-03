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
import React from "react";
import CartProduct from "./CartProduct";

const CartData = ({ cartData,fetchCartData }) => {

    
  return (
    <HStack
      mt={"2rem"}
      alignItems={"flex-start"}
      gap={"10"}
      flexDirection={["column", "column", "column", "row"]}
    >
      <VStack
        rowGap={"5"}
        overflowY={"auto"}
        maxH={"75vh"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        {cartData.cartItems.length > 0
          ? cartData.cartItems.map((ele, index) => {
              return <CartProduct orderItemData={ele} key={index} fetchCartData={fetchCartData} />;
            })
          : null}
      </VStack>

      <Divider orientation="vertical" />

      {/* Checkout box */}
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
          >
            Proceed to Checkout
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

export default CartData;
