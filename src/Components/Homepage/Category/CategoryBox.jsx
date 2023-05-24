import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryBox = () => {
  return (
    <VStack w={["100%", "78%"]} m="auto" p={["10","16","28"]} bg={"gray.100"} borderRadius={"3xl"} spacing={"12"}>
      <Heading fontSize={["3xl","4xl","5xl"]}>Start Exploring.</Heading>
      <Grid templateColumns={["1fr", "repeat(1, 1fr)", "repeat(1, 1fr)","repeat(2,1fr)","repeat(3,1fr)"]} w="full" gap="2rem">
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
        <GridItem>
          <CategoryCard />
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default CategoryBox;
