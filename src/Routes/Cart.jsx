import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import EmptyCart from "../Components/Cart/EmptyCart";
import CartData from "../Components/Cart/CartData";

const Cart = () => {
  const [cart, setCart] = useState({});

  const fetchCartData = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://shopziel.up.railway.app/api/customers/cart",
        requestOptions
      );
      let data = await response.json();

      setCart(data);
    } catch (error) {
      alert("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  },[]);

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
      {cart.cartItems && cart.cartItems.length ? (
        <CartData cartData={cart} fetchCartData={fetchCartData} />
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;
