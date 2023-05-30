import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import EmptyCart from "../Components/Cart/EmptyCart";
import CartData from "../Components/Cart/CartData";

const Cart = () => {
  return (
    <Container
      minW={["100%", "90%", "80%", "90%", "70%"]}
      minH={"100vh"}
      px={"5"}
    >
      <Box my={"3rem"}>
        <Heading fontWeight={"500"}>Shopping Cart</Heading>
      </Box>
      <Divider color={"gray.200"} />
      {true ? <CartData /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
