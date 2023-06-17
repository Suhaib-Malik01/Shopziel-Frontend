import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { id, title, price, description, img, rating, ele } = props;

  const toast = useToast();

  const addToCart = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    myHeaders.append("Content-Type", "application/json");

    try {
      const response = await fetch(
        "https://shopziel.up.railway.app/api/customers/cart/add",
        {
          method: "POST",
          body: JSON.stringify({ productId: id, quantity: 1 }),
          headers: myHeaders,
        }
      );

      if (response.ok) {
        toast({
          title : "Added to Cart",
          status : "success",
          duration : 3000,
          isClosable : true,
          position : 'top'
        })
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Card h={"480px"}>
      <CardBody
        _hover={{
          cursor: "pointer",
          "& .productTitle": {
            color: "blue.500",
          },
        }}
        onClick={() => navigate(`/product/${id}`)}
      >
        <Box height="200px" width="100%" position="relative">
          <Image
            src={img}
            alt="Product"
            objectFit="cover"
            height="100%"
            width="100%"
            m={"auto"}

            borderRadius={"3xl"}
          />
        </Box>

        <Stack spacing="2" mt={"5"} textAlign={"justify"}>
          <Heading
            size={["16px", "18px", "20px"]}
            fontWeight={"500"}
            className="productTitle"
          >
            {String(title).substring(0, 20)}
          </Heading>
          <Text fontSize={["sm", "md", "md"]}>
            {String(description).split(" ").slice(0, 10).join(" ") + "..."}
          </Text>
        </Stack>
        <Flex alignItems={"center"} mt={"3"} gap={1.5}>
          <Text color="black" fontSize="17px">
            ₹ {price}
          </Text>
          <Text fontSize={"lg"} ml={"auto"}>
            {rating}{" "}
          </Text>
          <StarIcon color={"gold"} fontSize={"md"} />
        </Flex>
      </CardBody>
      <Divider color={"gray.200"} />
      <CardFooter alignItems={"center"}>
        <HStack w={"full"} gap={"1"} justifyContent={"space-between"}>
          <AiOutlineHeart fontSize={"25px"} />
          <Button
            size={["sm", "md"]}
            borderRadius={"2rem"}
            bg={"buttonColor"}
            color="white"
            onClick={() =>
              sessionStorage.getItem("token")
                ? addToCart()
                : navigate("/signin")
            }
            _hover={{ boxShadow: "lg" }}
          >
            <BsBag /> <Text ml={"2"}>Add To Cart</Text>
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
