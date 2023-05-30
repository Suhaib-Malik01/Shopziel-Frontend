import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryBox = ({ arr }) => {
  return (
    <VStack
      w={["100%", "78%"]}
      m="auto"
      p={["10", "16", "28"]}
      bg={"gray.100"}
      borderRadius={"3xl"}
      spacing={"12"}
    >
      <Heading fontSize={["3xl", "4xl", "5xl"]}>Start Exploring.</Heading>
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
        {arr.map((ele) => (
          <GridItem key={ele.name}>
            <CategoryCard
              id={ele.categoryId}
              img={ele.image}
              title={ele.name}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default CategoryBox;
