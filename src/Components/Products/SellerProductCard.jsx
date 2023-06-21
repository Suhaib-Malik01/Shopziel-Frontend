import { StarIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SellerProductCard = () => {
  return (
    <Card>
      <CardBody >
        
        <Img borderRadius={"2xl"} src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'/>
        

        <VStack alignItems={"left"} >
        <Heading fontWeight={"500"} fontSize={"3xl"} mt={"2"}>Title</Heading>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quia ullam molestiae iste numquam ut, vero ab placeat iusto, velit quae neque a facere maxime assumen</Text>
        <HStack justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={1}>
        <Text fontSize={"lg"}>4.5</Text>
          <StarIcon fontSize={"lg"} color={"gold"} />
        </Flex>
        <Text>0 Reviews</Text>
        </HStack>
        </VStack>
      </CardBody>
      <CardFooter gap={"2"} justifyContent={"space-between"}>
        <Button borderRadius={"3xl"} bg={"buttonColor"} color={"white"} _hover={{bg:"buttonColor" , boxShadow : "base"}}>Add Quantity</Button>
        <Button borderRadius={"3xl"} colorScheme='red'>Delete Product</Button>
      </CardFooter>
    </Card>
  ); 
}

export default SellerProductCard;
