import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="white"
      py={6}
      
      textAlign="center"
      position={"relative"}
      left={0}
      right={0}
      mt={"20"}
    >
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
    </Box>
  );
};

export default Footer;
