import { Container, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CouponCard from "../Components/Coupons/CouponCard";

const Coupons = () => {
  const [couponsData, setCouponsData] = useState([]);

  const fetchCoupons = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    try {
      const response = await fetch(
        "https://shopziel.up.railway.app/api/customers/offers",
        {
          method: "GET",
          headers: myHeaders,
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        setCouponsData(responseData);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <Container minH={"90vh"} minW={["100%", "90%", "70%"]} mt={"5"}>
      <Heading fontWeight={"500"}>Coupons</Heading>

      <Divider my={"10"} color={"gray.200"}></Divider>

      <Grid
        maxW={"100%"}
        templateColumns={["repeat(2,1fr)", "repeat(2,1fr)"]}
        gap={"5"}
      >
        {couponsData.length > 0
          ? couponsData.map((coupon, index) => {
              return (
                <GridItem key={index}>
                  <CouponCard
                    title={coupon.offerName}
                    description={coupon.offerDescription}
                    date={coupon.offerExpiresOn}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Container>
  );
};

export default Coupons;
