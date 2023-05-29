import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  Heading,
  InputRightElement,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  // AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineShop,
  AiOutlineSearch,
} from "react-icons/ai";
import CartMenu from "./CartMenu";

import { HiOutlineUser } from "react-icons/hi";
import UserInfo from "./UserInfo";
import { smartObject } from "@cloudinary/url-gen/actions/psdTools";
import { useEffect, useState } from "react";

const Links = ["New Arrivals", "Sale"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [user,setUser] = useState({});

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaG9wemllbCIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoic3VoYWliNEBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9DVVNUT01FUiIsImlhdCI6MTY4NTMzMjMwNywiZXhwIjoxNjg1MzYyMzA3fQ.C3NqhQ1QUJsTf4cNEDElfQX9ZlCIH6KJDia2LGzpb-g"
  );

  const getUserData = async () => {
    const headers = new Headers();

    headers.append("Auhtorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    };
    try {
     let response = await fetch("https://shopziel.up.railway.app/api/customers/", requestOptions);

     let data = await response.json();
     console.log(data);

     setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    getUserData();

  },[]);

  return (
    <>
      <Box
        px={4}
        w={["100%", "100%", "70%"]}
        m={"auto"}
        position={"relative"}
        zIndex={"2"}
        bg={"white"}
      >
        <Flex minH={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Hamburger Menu */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            w={"full"}
            justifyContent={["center", "center", "left"]}
          >
            <HStack alignItems={"center"}>
              <AiOutlineShop size={"35px"} />
              <RouteLink to={"/"}>
                <Heading fontSize={"3xl"} fontWeight={"500"}>
                  Shopziel
                </Heading>
              </RouteLink>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              w={"full"}
              display={["none", "none", "block"]}
            >
              <InputGroup maxW={"500px"}>
                <Input
                  borderRadius={"3xl"}
                  px={"5"}
                  placeholder="Search for Products"
                  w={["100%", "100%", "100%"]}
                />
                <InputRightElement
                  px={"2"}
                  mr={"1"}
                  _hover={{ cursor: "pointer" }}
                >
                  <AiOutlineSearch size={"30px"} />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </HStack>

          <Flex
            display={["flex", "flex", "none"]}
            alignItems={"center"}
            gap={"3"}
          >
            <Menu>
              <MenuButton>
                <AiOutlineSearch size={"30px"} />
              </MenuButton>
              <MenuList minW={"full"} border={"none"} p={"2"}>
                <InputGroup>
                  <Input
                    placeholder="Search for Products"
                    w={["100%", "100%", "100%"]}
                  />
                  <InputRightElement />
                </InputGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={"black"}
              >
                <HiOutlineUser size={"30px"} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/cart")}>Cart</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                {localStorage.getItem("token") ? (
                  <MenuItem>Sign out</MenuItem>
                ) : (
                  <RouteLink to={"/signin"}>
                    <MenuItem>Sign In / Sign Up</MenuItem>
                  </RouteLink>
                )}
              </MenuList>
            </Menu>
          </Flex>

          {/* desktop screen */}

          <Flex
            gap={"3"}
            ml={["0", "1", "5"]}
            display={["none", "none", "flex"]}
          >
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={"black"}
              >
                <HiOutlineUser size={"25px"} />
              </MenuButton>
              <MenuList>
                {localStorage.getItem("token") ? (
                  <MenuItem>
                    <UserInfo userData={user}/>
                  </MenuItem>
                ) : null}
                <MenuItem>Orders</MenuItem>
                <MenuItem>Coupons</MenuItem>
                <MenuDivider />
                {localStorage.getItem("token") ? (
                  <MenuItem onClick={() => localStorage.removeItem("token")}>
                    Sign out
                  </MenuItem>
                ) : (
                  <RouteLink to={"/signin"}>
                    <MenuItem>Sign In / Sign Up</MenuItem>
                  </RouteLink>
                )}
              </MenuList>
            </Menu>
            <CartMenu />
            <AiOutlineHeart size={"25px"} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}