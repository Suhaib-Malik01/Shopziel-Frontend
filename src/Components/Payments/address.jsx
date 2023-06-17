import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AddressDetails = ({
  addressType,
  city,
  state,
  country,
  postalCode,
  street,
  address,
}) => {
  return (
    <Box m="5" w="full">
      <Heading py={"2"} fontSize="xl">
        {addressType}
      </Heading>

      <Text fontSize={"md"} fontWeight={"500"}>
        <b>Address:</b> {address}, {street}, {city}, {state}, {postalCode}, {country}
      </Text>
    </Box>
  );
};

export default AddressDetails;
