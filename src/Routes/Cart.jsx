import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container minW={["100%", "90%", "80%","90%", "70%"]} minH={"100vh"} px={"5"}>
      <Box my={"3rem"}>
        <Heading fontWeight={"500"}>Shopping Cart</Heading>
      </Box>
      <Divider color={"gray.200"} />
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
          <Flex gap={"5"} alignItems={["center", "center", "normal"]}>
            <Img
              w={["25%"]}
              h={["40%"]}
              borderRadius={"xl"}
              src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail1.38019683.jpg&w=640&q=75"
            />
            <VStack
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"left"}
              px={"2"}
              py={"4"}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex
                  flexDirection={["column", "column", "column", "row"]}
                  gap={"2"}
                >
                  <Box>
                    <Text fontSize={["md", "md", "lg"]} fontWeight={"700"}>
                      Nike Air Pro Max
                    </Text>
                    <Text fontSize={["sm", "md", "md"]}>Size | Color</Text>
                  </Box>
                  <Flex
                    alignItems={"center"}
                    gap={"3"}
                    borderRadius={"3xl"}
                    h={"3rem"}
                    px={["0", "0", "0", "2"]}
                  >
                    <IconButton
                      icon={<GrFormSubtract />}
                      border={"1px solid"}
                      borderColor={"blackAlpha.400"}
                      borderRadius={"full"}
                      size={"sm"}
                      onClick={decreaseQuantity}
                    />
                    <Text fontSize={"md"}>{quantity}</Text>
                    <IconButton
                      icon={<AiOutlinePlus />}
                      border={"1px solid"}
                      borderColor={"blackAlpha.400"}
                      borderRadius={"full"}
                      size={"sm"}
                      onClick={increaseQuantity}
                    />
                  </Flex>
                </Flex>
                <Text fontSize={["md", "lg", "xl"]}> $ 2000</Text>
              </Flex>

              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  px={"2"}
                  borderRadius={"2xl"}
                  border={"1px"}
                  borderColor={"blackAlpha.300"}
                >
                  {true ? "In Stock" : "Out of Stock"}
                </Text>
                <Text color={"blue.500"} fontSize={"lg"} fontWeight={"700"}>
                  Remove
                </Text>
              </Flex>
            </VStack>
          </Flex>
          <Divider color={"gray.200"} />
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
                Sub Total
              </Text>
              <Text fontWeight={"700"}>80000</Text>
            </Flex>
            <Divider />
            <Flex w={"full"} justifyContent={"space-between"}>
              <Text color={"gray.600"} fontWeight={"600"}>
                Sub Total
              </Text>
              <Text fontWeight={"700"}>80000</Text>
            </Flex>
            <Divider />
            <Flex w={"full"} justifyContent={"space-between"}>
              <Text color={"gray.600"} fontWeight={"600"}>
                Sub Total
              </Text>
              <Text fontWeight={"700"}>80000</Text>
            </Flex>
            <Divider />
            <Button
              borderRadius={"3xl"}
              _hover={{ bg: "#0f172a", boxShadow: "lg" }}
              fontWeight={"400"}
              fontSize={"xl"}
              h={"3rem"}
              color={"white"}
              bg={"#0f172a"}
            >
              Proceed to Checkout
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Cart;
