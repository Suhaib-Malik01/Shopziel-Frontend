import {
  Avatar,
  Flex,
  HStack,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ReviewCard = ({ reviewMsg, img,reviewCustomer}) => {
  return (
    <Flex gap={"4"} alignItems={"start"}>
      <Avatar src={reviewCustomer.profileImgUrl} />
      <VStack w={"full"} alignItems={"left"} mt={"2"}>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight={"500"}>
            {reviewCustomer.firstName + " " + reviewCustomer.lastName}
          </Text>
          <Menu>
            <MenuButton>
              <BsThreeDotsVertical fontSize={"20px"} />
            </MenuButton>
            <MenuList>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <HStack>
          <Img borderRadius={"lg"} src={img} />
        </HStack>
        <Text fontSize={"md"}>{reviewMsg}</Text>
      </VStack>
    </Flex>
  );
};

export default ReviewCard;
