import { HStack, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const CategoryCard = () => {
  return (
    <VStack
      borderRadius="2xl"
      p="1rem"
      boxShadow="sm"
      bgRepeat="no-repeat"
      bg={"white"}
      bgImage="https://ciseco-nextjs.vercel.app/_next/static/media/explore1.bafb60cf.svg"
      h="350px"
      spacing={20}
      bgSize="100%"
      justifyContent={"space-between"}
      alignItems={"left"}
      transition={"all 0.2s"}
      _hover={{
        boxShadow: "base",
        "& .categoryCollection": {
          color: "blue.500",
        },
        cursor: "pointer",
      }}
    >
      <HStack justifyContent="space-between">
        <Img
          w="20"
          borderRadius="50%"
          bg="blackAlpha.100"
          src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.fcfa959c.png&w=828&q=75"
        />
        <Text fontWeight={500}>{"55 Products"}</Text>
      </HStack>

      
        <Heading fontSize={"3xl"} fontWeight={500}>{"Category Name"}</Heading>
    
      <Text
        fontSize="md"
        display="flex"
        fontWeight={"600"}
        alignItems="center"
        gap={2}
        className="categoryCollection"
      >
        See Collection <AiOutlineArrowRight />
      </Text>
    </VStack>
  );
};

export default CategoryCard;
