import { PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AddAddress = ({ isOpen, onClose }) => {


  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Select>
              <option value="">Address Type</option>
              <option value="HOME">Home</option>
              <option value="OFFICE">Office</option>
            </Select>
            <Input placeholder="Address" />
            <Input placeholder="Street" />
            <Input placeholder="City" />
            <Input placeholder="State" />
            <Flex gap={2}>
              <Input placeholder="Phone" />
              <Input placeholder="State" />
            </Flex>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            variant={"outline"}
            borderRadius={"3xl"}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>

          <Button
            bg={"buttonColor"}
            color={"white"}
            borderRadius={"3xl"}
            _hover={{
              bg: "buttonColor",
            }}
          >
            Add Address
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAddress;
