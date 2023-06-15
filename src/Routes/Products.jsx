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
import ProductCard from "../Components/Products/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  const getCategoryProducts = async () => {
    const headers = new Headers();

    headers.append("Auhtorization", `Bearer ${localStorage.getItem("token")}`);

    const requestOptions = {
      method: "GET",
      headers: headers,

      redirect: "follow",
    };
    try {
      let response = await fetch(
        `https://shopziel.up.railway.app/api/category/${id}`,
        requestOptions
      );

      let data = await response.json();

      
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryProducts();
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <Container minW={["100%", "90%", "70%"]} minH={"80vh"} my={"5"}>
      <Heading fontWeight={"500"}>Products</Heading>

      <Divider my={"10"} />

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
        {category.products
          ? category.products.map((ele) => {
              return (
                <GridItem>
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
