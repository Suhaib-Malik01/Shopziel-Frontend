import { Box, Button, Divider, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SellerProductCard from "./Products/SellerProductCard";

const SellerProduct = () => {
  return (
    <Box>
      <Heading mt={"5"}>Products</Heading>
      <Divider my={"5"} />

      <Box>
        <Flex justifyContent={"right"} px={"5"}>
            <Button borderRadius={"3xl"} bg={"buttonColor"} color={"white"} _hover={{bg:"buttonColor" , boxShadow : "base"}}>Add Product</Button>
        </Flex>

        <Grid>
            <SellerProductCard />
        </Grid>

      </Box>


    </Box>
  );
};

export default SellerProduct;
