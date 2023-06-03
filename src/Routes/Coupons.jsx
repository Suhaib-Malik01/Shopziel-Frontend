import { Container, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import CouponCard from "../Components/Coupons/CouponCard";

const Coupons = () => {

    const fetchCoupons = () => {

        const myHeaders = new Headers();

        myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem("token")}`)

        try{

            const response = fetch('')
        }
        catch(err){

        }

    }



  return (
    <Container minH={"90vh"} minW={["100%", "90%", "70%"]} mt={"5"}>
      <Heading fontWeight={"500"}>Coupons</Heading>

      <Divider my={"10"} color={"gray.200"}></Divider>

      <Grid
        maxW={"100%"}
        templateColumns={["repeat(2,1fr)", "repeat(2,1fr)"]}
        gap={"5"}
      >
        <GridItem>
          <CouponCard />
        </GridItem>
        <GridItem>
          <CouponCard />
        </GridItem>
        <GridItem>
          <CouponCard />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Coupons;
