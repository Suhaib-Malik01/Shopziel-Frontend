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
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShop,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { HiOutlineUser } from "react-icons/hi";
import UserInfo from "./UserInfo";

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

  const toast = useToast();

  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleSearchInput = (e) => {
    if (e.keyCode === 13) {
      navigate(`/customer/products/search/${e.target.value}`);
    }
  };

  const getUserData = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      let response = await fetch(
        "https://shopziel.up.railway.app/api/customers/",
        requestOptions
      );

      if (response.ok) {
        let data = await response.json();
        setUser(data);
      } else {
        sessionStorage.removeItem("token");
        toast({
          title: "Login",
          description: "Login Expired...",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getUserData();
    }
  }, []);

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
                  onKeyDown={handleSearchInput}
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
                    onKeyDown={handleSearchInput}
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
                <MenuItem
                  onClick={() =>
                    sessionStorage.getItem("token")
                      ? navigate("/customer/cart")
                      : navigate("/signin")
                  }
                >
                  Cart
                </MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                {sessionStorage.getItem("token") ? (
                  <MenuItem
                    onClick={() => {
                      sessionStorage.removeItem("token");
                      navigate("/");
                    }}
                  >
                    Sign out
                  </MenuItem>
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
                {sessionStorage.getItem("token") ? (
                  <MenuItem>
                    <UserInfo userData={user} />
                  </MenuItem>
                ) : null}
                <MenuItem
                  onClick={() =>
                    sessionStorage.getItem("token")
                      ? navigate("/")
                      : navigate("/signin")
                  }
                >
                  Orders
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    sessionStorage.getItem("token")
                      ? navigate("/customer/coupons")
                      : navigate("/signin")
                  }
                >
                  Coupons
                </MenuItem>
                <MenuDivider />
                {sessionStorage.getItem("token") ? (
                  <MenuItem
                    onClick={() => {
                      sessionStorage.removeItem("token");
                      navigate("/");
                    }}
                  >
                    Sign out
                  </MenuItem>
                ) : (
                  <RouteLink to={"/signin"}>
                    <MenuItem>
                      <Button
                        colorScheme="green"
                        borderRadius={"3xl"}
                        variant={"outline"}
                      >
                        Sign In
                      </Button>
                    </MenuItem>
                  </RouteLink>
                )}
              </MenuList>
            </Menu>
            <AiOutlineShoppingCart
              onClick={() =>
                sessionStorage.getItem("token")
                  ? navigate("/customer/cart")
                  : navigate("/signin")
              }
              size={"25px"}
            />
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
