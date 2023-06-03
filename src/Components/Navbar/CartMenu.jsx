import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CartProduct from "../Cart/CartProduct";

const CartMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton>
        <AiOutlineShoppingCart size={"25px"} />
      </MenuButton>
      <MenuList>
        <MenuGroup
          alignItems={"flex-start"}
          fontSize={"2xl"}
          maxW={"100px"}
          title="Cart"
        >
          <MenuItem minH={"100%"} maxW={"400px"}>
            <CartProduct />
          </MenuItem>
          <MenuItem minH={"100%"} maxW={"400px"}>
            <CartProduct />
          </MenuItem>
          <MenuItem minH={"100%"} maxW={"400px"}>
            <CartProduct />
          </MenuItem>
        </MenuGroup>
        <MenuItem _hover={{ bg: "none" }}>
          <Flex w={"full"} gap={"2"}>
            <Button
              onClick={() => navigate("/cart")}
              borderRadius={"3xl"}
              colorScheme={"blue"}
              variant={"outline"}
              w={"50%"}
            >
              View Cart
            </Button>
            <Button
              bg={"buttonColor"}
              color={"white"}
              colorScheme=""
              borderRadius={"3xl"}
              w={"50%"}
            >
              Checkout
            </Button>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CartMenu;
