import {
  Box,
  Flex,
  Avatar,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineShop,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

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
              <Heading fontWeight={"500"}>Shopziel</Heading>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              w={"full"}
              display={["none", "none", "block"]}
            >
              <InputGroup maxW={"500px"}>
                <Input
                  placeholder="Search for Products"
                  w={["100%", "100%", "100%"]}
                />
                <InputRightElement px={"2"} _hover={{ cursor: "pointer" }}>
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
              >
                <AiOutlineUser  size={"30px"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Cart</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                {localStorage.getItem("token") ? (
                  <MenuItem>Sign out</MenuItem>
                ) : (
                  <MenuItem>Sign In / Sign Up</MenuItem>
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
              >
                <AiOutlineUser size={"25px"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Orders</MenuItem>
                <MenuItem>Coupons</MenuItem>
                <MenuDivider />
                {localStorage.getItem("token") ? (
                  <MenuItem>Sign out</MenuItem>
                ) : (
                  <MenuItem>Sign In / Sign Up</MenuItem>
                )}
              </MenuList>
            </Menu>
            <AiOutlineShoppingCart size={"25px"} />
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
