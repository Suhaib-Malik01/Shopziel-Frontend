import {
  Box,
  Flex,
  IconButton,
  Img,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const CartProduct = ({ orderItemData, fetchCartData }) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const toast = useToast();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeOrderItem = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    try {
      const response = await fetch(
        `https://shopziel.up.railway.app/api/customers/cart/${orderItemData.itemId}`,
        {
          method: "DELETE",
          headers: myHeaders,
        }
      );

      if (response.ok) {
        fetchCartData();
        toast({
          title: "Product Removed From cart",
          status: "success",
          duration: 3000,
          position: "top",
        });
      } else {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          position: "top",
        });
      }
    } catch (err) {
      toast({
        title: { err },
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  return (
    <Flex w={"full"} gap={"5"} alignItems={["center", "center", "normal"]}>
      <Img
        w={["25%"]}
        h={["40%"]}
        borderRadius={"xl"}
        src={orderItemData ? orderItemData.product.image : null}
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
            flexDirection={["column", "column", "column", "column"]}
            gap={"2"}
          >
            <Box>
              <Text fontSize={["md", "md", "lg"]} fontWeight={"700"}>
                {orderItemData ? orderItemData.product.name : null}
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
              <Text fontSize={"md"}>
                {orderItemData ? orderItemData.quantity : null}
              </Text>
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
          <Text fontSize={["md", "lg", "xl"]}>
            {" "}
            ₹ {orderItemData ? orderItemData.product.price : null}
          </Text>
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
          <Text
            onClick={removeOrderItem}
            color={"blue.500"}
            fontSize={"lg"}
            fontWeight={"700"}
            cursor={"pointer"}
          >
            Remove
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default CartProduct;
