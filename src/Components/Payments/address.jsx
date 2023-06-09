import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AddressDetails = () => {
  const address = {
    street: "123 Main Street",
    city: "Example City",
    state: "Example State",
    postalCode: "12345",
    country: "Example Country",
  };

  return (
    <Box m="5" w="full">
      <Heading py={"2"} fontSize="xl">
        Home
      </Heading>

      <Text fontSize={"md"} fontWeight={"500"}>
        <b>Address:</b> {address.street}, {address.city}, {address.state},{" "}
        {address.postalCode}, {address.country}
      </Text>
    </Box>
  );
};

export default AddressDetails;
