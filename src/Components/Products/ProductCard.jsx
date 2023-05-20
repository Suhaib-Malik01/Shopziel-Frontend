import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";

const ProductCard = ({ title, price, description, img, rating }) => {
  return (
    <Card minH={"400px"} maxW={"300px"}>
      <CardBody>
        <Image
          boxSize="140px"
          objectFit="contain"
          m={"auto"}
          borderRadius={"lg"}
          src={img}
        />

        <Stack h={"130px"} mt={"10"} spacing="2" textAlign={"justify"}>
          <Heading size="20px" fontWeight={"500"}>
            {String(title).substring(0, 20)}
          </Heading>
          <Text>{String(description).substring(0, 60) + "..."}</Text>
        </Stack>
        <Flex alignItems={"center"} gap={1.5}>
          <Text fontSize={"xl"}>{rating} </Text>
          <StarIcon color={"gold"} fontSize={"md"} />
          <Text fontSize={"sm"}>{" 39 Reviews"}</Text>
        </Flex>
      </CardBody>
      <Divider color={"gray.200"} />
      <CardFooter justifyContent={"space-between"} alignItems={"center"}>
        <Text color="black" fontSize="17px">
          ₹{price}
        </Text>
        <Button
          size={["sm", "md"]}
          borderRadius={"2rem"}
          colorScheme="blackAlpha"
        >
          <BsBag /> <Text ml={"2"}>Add To Cart</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
