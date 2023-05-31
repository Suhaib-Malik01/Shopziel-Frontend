import { Container, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../Components/Products/ProductCard";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();

  const { products } = location.state;

  return (
    <Container minW={["100%", "90%", "70%"]} my={"5"}>
      <Heading fontWeight={"500"}>Products</Heading>

      <Divider my={"10"} />

      <Grid
        templateColumns={[
          "1fr",
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
