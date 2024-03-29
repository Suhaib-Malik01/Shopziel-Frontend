import {
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/Products/ProductCard";

const ProductSearch = () => {
  const { keyword } = useParams();

  const [products, setProducts] = useState();

  const toast = useToast();

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://shopziel.up.railway.app/api/products/search/${keyword}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        let fetchedProducts = await response.json();
        setProducts(fetchedProducts);
      } else {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          position: "top",
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [keyword]);

  return (
    <Container minH={"100vh"} minW={["100%", "90%", "70%"]} my={"10"}>
      <Heading fontSize={"3xl"} fontWeight={"500"}>
        Search Result for : {keyword}
      </Heading>

      <Divider my={"5"} />

      <HStack gap={"20"} justifyContent={"right"} display={"none"}>
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
                    ele={ele}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Container>
  );
};

export default ProductSearch;
