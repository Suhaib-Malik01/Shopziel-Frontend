import {
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductCard from "../Components/Products/ProductCard";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const { products } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container minW={["100%", "90%", "70%"]} my={"5"}>
      <Heading fontWeight={"500"}>Products</Heading>

      <Divider my={"10"} />

      <HStack gap={"20"} justifyContent={"right"}>
        <Select borderRadius={"3xl"} placeholder="Sort By"></Select>
      </HStack>

      <Grid
      mt={"5"}
        px={["5", "5", "0"]}
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        w="full"
        gap={"5"}
      >
        {products
          ? products.map((ele) => {
              return (
                <GridItem m={"auto"}>
                  <ProductCard
                    id={ele.productId}
                    title={ele.name}
                    img={ele.image}
                    description={ele.description}
                    price={ele.price}
                    rating={ele.rating}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Container>
  );
};

export default Products;
