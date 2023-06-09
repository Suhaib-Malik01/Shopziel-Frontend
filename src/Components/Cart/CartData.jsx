import { Divider, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CartProduct from "./CartProduct";
import CheckoutBox from "./CheckoutBox";

const CartData = ({ cartData, fetchCartData }) => {
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
              return (
                <CartProduct
                  orderItemData={ele}
                  key={index}
                  fetchCartData={fetchCartData}
                />
              );
            })
          : null}
      </VStack>

      <Divider orientation="vertical" />

      {/* Checkout box */}
      <CheckoutBox cartData={cartData} />
    </HStack>
  );
};

export default CartData;
