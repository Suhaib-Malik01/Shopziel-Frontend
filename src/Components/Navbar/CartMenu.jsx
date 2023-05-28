import {
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <AiOutlineShoppingCart size={"25px"} />
      </MenuButton>
      
    </Menu>
  );
};

export default CartMenu;
