import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import PurchaseFlowCard from './PurchaseFlowCard';

const PurchaseFlow = () => {

  let data = [{
    img : ""
  }]

  return (
    <Grid w={"80%"} gap={"5"} m={"auto"} justifyContent={"center"} templateColumns={[
      "1fr",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      
      "repeat(4,1fr)",
    ]}>
      <GridItem>
      <PurchaseFlowCard />
      </GridItem>
      <GridItem>
      <PurchaseFlowCard />
      </GridItem>
      <GridItem>
      <PurchaseFlowCard />
      </GridItem>
      <GridItem>
      <PurchaseFlowCard />
      </GridItem>
      
    </Grid>
  );
}

export default PurchaseFlow;
