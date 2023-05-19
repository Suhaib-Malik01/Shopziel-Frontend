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
  Img,
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
          boxSize="120px"
          objectFit="contain"
          m={"auto"}
          borderRadius={"lg"}
          src={img}
        />

        <Stack mt="6" spacing="3" textAlign={"justify"}>
          <Heading size="md" fontWeight={"500"}>
            {String(title).substring(0, 20)}
          </Heading>
          <Text>{String(description).substring(0, 60)+"..."}</Text>
        </Stack>
        <Flex alignItems={"center"} gap={1}>
          <Text fontSize={"xl"}>{rating}</Text>
          <StarIcon color={"gold"} fontSize={"md"} />
        </Flex>
      </CardBody>
      <Divider color={"gray.200"} />
      <CardFooter justifyContent={"space-between"}>
        <Text color="black" fontSize="xl">
          ₹{price}
        </Text>
        <Button size={["sm","md"]} borderRadius={"xl"} colorScheme="blackAlpha">
          <BsBag /> <Text ml={"2"}>Add To Cart</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
