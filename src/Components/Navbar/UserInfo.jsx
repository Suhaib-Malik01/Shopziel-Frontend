import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const UserInfo = ({userData}) => {
  return (
    <Flex gap={"2"}>
      <Avatar src={userData.profileImgUrl}/>
      <Box>
        <Text fontWeight={"500"} fontSize={"lg"}>{userData.firstName}</Text>
        <Text>{userData.email}</Text>
      </Box>
    </Flex>
  );
};

export default UserInfo;
