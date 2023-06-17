import { Box, Button, Heading, Img, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const RandomPage = () => {
  const navigate = useNavigate();
  return (
    <VStack
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      border={"1px"}
      gap={"4"}
    >
      <Box textAlign={"center"}>
        <Img src="https://i.ibb.co/fF4PYRp/3828537.jpg" />
        <Heading>Page not found</Heading>
      </Box>
      <Button
        py={"3"}
        onClick={() => navigate("/")}
        borderRadius={"3xl"}
        colorScheme="blue"
        variant={"outline"}
      >
        Go To Homepage
      </Button>
    </VStack>
  );
};

export default RandomPage;
