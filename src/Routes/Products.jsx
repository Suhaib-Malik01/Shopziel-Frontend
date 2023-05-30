import { Container, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Products/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
  const [category, setCategory] = useState();
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

      console.log(data);
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  },[])

  return (
    <Container minW={["100%", "90%", "70%"]} my={"5"}>
      <Heading fontWeight={"500"}>Products</Heading>

      <Divider my={"10"} />

      <Grid
        templateColumns={[
          "1fr",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        w="full"
        gap="2rem"
      >
        <GridItem>
          <ProductCard />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Products;
