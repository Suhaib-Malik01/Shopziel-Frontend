import {
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SellerRequest = () => {
  return (
    <Container minH={"80vh"} minW={["100%", "100%", "70%"]}>
      <Heading mt={"4"} fontWeight={"500"}>
        Become a Seller
      </Heading>
      <Divider my={"8"} color={"gray.300"} />
      <VStack w={["100%","60%","50%","40%","30%"]} m={"auto"} spacing={4} align="left" >
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Username" />
        <Input type="tel" placeholder="Phone Number" />
        <Input type="text" placeholder="Address" />
        <Input type="text" placeholder="Bank Account Details" />
        <Input type="text" placeholder="Confirm Password"/>

        
        <Checkbox colorScheme="green">
        I understand that once I become a seller, my customer account will be deleted.
        </Checkbox>

        <Button bg={"buttonColor"} color={"white"} borderRadius={"3xl"} _hover={{bg:"buttonColor" , boxShadow:"base"}} type="submit">
          Become a Seller
        </Button>
      </VStack>
    </Container>
  );
};

export default SellerRequest;
