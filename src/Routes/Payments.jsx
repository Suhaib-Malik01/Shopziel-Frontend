import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CheckoutBox from "../Components/Cart/CheckoutBox";
import Address from "../Components/Payments/address";
import { IoMdAdd } from "react-icons/io";
import AddAddress from "../Components/Payments/AddAddress";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const [Addresses, setAddresses] = useState([]);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getCustomerAddress = async () => {
    const myHeader = new Headers();
    myHeader.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    try {
      let response = await fetch(
        "https://shopziel.up.railway.app/api/customers/address",
        {
          method: "GET",
          headers: myHeader,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      getCustomerAddress();
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Box minH={"75vh"} w={["100%", "90%", "68%"]} m={"auto"}>
        <Heading my={"5"}>Delivery Address</Heading>

        <Divider mb={"5"} />

        <Flex
          gap={"5"}
          px={["4", "4", "0"]}
          alignItems={["center", "center", "flex-start"]}
          flexDirection={["column", "column", "row"]}
        >
          <VStack w={"90%"} alignItems={"left"}>
            <RadioGroup defaultValue="0">
              {Addresses.map((ele, index) => {
                return (
                  <Radio value={index}>
                    <Address
                      addressType={ele.addressType}
                      city={ele.city}
                      state={ele.state}
                      country={ele.country}
                      postalCode={ele.postalCode}
                      street={ele.street}
                      address={ele.address}
                    />
                  </Radio>
                );
              })}
            </RadioGroup>

            <Flex justifyContent={"right"}>
              <Button
                _hover={{ bg: "buttonColor", boxShadow: "lg" }}
                color={"white"}
                bg={"buttonColor"}
                borderRadius={"3xl"}
                onClick={onOpen}
              >
                <IoMdAdd /> <Text ml={"2"}>Add New Address</Text>
              </Button>
            </Flex>
          </VStack>

          <CheckoutBox cartData={{}} />
        </Flex>
      </Box>

      <AddAddress isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Payments;
