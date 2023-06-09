import { Flex } from '@chakra-ui/react';
import React from 'react';
import PurchaseFlowCard from './PurchaseFlowCard';

const PurchaseFlow = () => {
  return (
    <Flex w={"80%"} gap={"5"} m={"auto"} justifyContent={"center"}>
      <PurchaseFlowCard />
      <PurchaseFlowCard />
      <PurchaseFlowCard />
      <PurchaseFlowCard />
    </Flex>
  );
}

export default PurchaseFlow;
