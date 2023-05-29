import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" mt={"5rem"} py={6}>
      <Flex justify="center" align="center" direction="column">
        <Text fontSize="sm" mb={2}>
          &copy; 2023 Your E-commerce Website. All rights reserved.
        </Text>
        <Text fontSize="sm">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by uchiha clan
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
