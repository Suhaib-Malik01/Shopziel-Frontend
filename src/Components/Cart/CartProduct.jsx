import { Box, Flex, IconButton, Img, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";

const CartProduct = () => {
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
          <Flex flexDirection={["column", "column", "column", "column"]} gap={"2"}>
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
              px={["0", "0", "0", "0"]}
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
  );
};

export default CartProduct;
