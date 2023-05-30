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
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, price, description, img, rating }) => {
  const navigate = useNavigate();

  return (
    <Card
      minH={"400px"}
      maxW={"300px"}
      onClick={() => navigate(`/product/${id}`)}
      _hover={{
        cursor: "pointer",
        "& .productTitle": {
          color: "blue.500",
        },
      }}
    >
      <CardBody>
        <Box height="200px" width="100%" position="relative">
          <Image
            src={img}
            alt="Product"
            objectFit="cover"
            height="100%"
            width="100%"
            position="absolute"
            top="0"
            left="0"
            borderRadius={"2xl"}
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
            {String(description).substring(0, 70) + "..."}
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
      <CardFooter gap={"3"} alignItems={"center"}>
        <HStack w={"full"} gap={"1"} justifyContent={"space-between"}>
          <AiOutlineHeart fontSize={"25px"} />
          <Button
            size={["sm", "md"]}
            borderRadius={"2rem"}
            bg={"#0f172a"}
            colorScheme=""
            _hover={{ boxShadow: "lg" }}
            color={"white"}
          >
            <BsBag /> <Text ml={"2"}>Add To Cart</Text>
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
