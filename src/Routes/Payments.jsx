import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CheckoutBox from "../Components/Cart/CheckoutBox";
import Address from "../Components/Payments/address";
import { IoMdAdd } from "react-icons/io";

const Payments = () => {
  return (
    <Box minH={"75vh"} w={["100%", "90%", "68%"]} m={"auto"}>
      <Heading my={"5"}>Delivery Address</Heading>

      <Divider mb={"5"} />

      <Flex gap={"5"}>
        <VStack w={"90%"} alignItems={"left"}>
          <RadioGroup defaultValue="1">
            <Radio value="1">
              <Address />
            </Radio>
            <Radio value="2">
              <Address />
            </Radio>
            
          </RadioGroup>

          <Flex justifyContent={"right"}>
            <Button
              _hover={{ bg: "buttonColor", boxShadow: "lg" }}
              color={"white"}
              bg={"buttonColor"}
              borderRadius={"3xl"}
            >
              <IoMdAdd /> <Text ml={"2"}>Add New Address</Text>
            </Button>
          </Flex>
        </VStack>

        <CheckoutBox cartData={{}} />
      </Flex>
    </Box>
  );
};

export default Payments;
