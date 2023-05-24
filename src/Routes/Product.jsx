import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { TbExchange, TbShoppingBag, TbTruckDelivery } from "react-icons/tb";
import { RiFlashlightFill, RiRefund2Line } from "react-icons/ri";

const Product = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Flex
      width={["100%", "90%", "70%"]}
      gap={"2rem"}
      flexDirection={["column", "column", "row"]}
      m={"auto"}
      mt={"5"}
      p={"5"}
    >
      <VStack w={"full"}>
        <Img
          borderRadius={"3xl"}
          src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail1.38019683.jpg&w=640&q=75"
        />
      </VStack>
      <VStack px={"3"} w={"full"} alignItems={"left"} spacing={"4"}>
        <Heading>Nike Shoe</Heading>
        <Flex gap={"4"}>
          <Text fontSize={"xl"} fontWeight={"500"}>
            ₹ 2000
          </Text>
          <Divider color={"gray"} orientation="vertical" />
          <Flex alignItems={"center"} gap={"2"}>
            <StarIcon fontSize={"lg"} color={"gold"} />
            <Text fontWeight={"400"} fontSize={"md"}>
              4.5
            </Text>
            <Text as={"u"} fontWeight={"500"} justifySelf={"right"}>
              139 Rating
            </Text>
          </Flex>
        </Flex>
        <Heading fontSize={"xl"} bg={"gray.100"} p={"2"} borderRadius={"lg"}>
          Description:
        </Heading>
        <Text fontSize={"md"} textAlign={"justify"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nostrum eos tempore impedit illum rem nisi dicta accusamus dolor amet
          dolorem alias nobis veritatis eveniet ipsam sequi itaque a natus.
        </Text>
        <HStack>
          <Flex
            alignItems={"center"}
            gap={"4"}
            borderRadius={"3xl"}
            bg={"gray.50"}
            h={"4rem"}
            px={"3"}
            py={"1"}
          >
            <IconButton
              icon={<GrFormSubtract />}
              border={"1px solid"}
              borderColor={"blackAlpha.400"}
              borderRadius={"full"}
              onClick={decreaseQuantity}
            />
            <Text fontSize={"lg"}>{quantity}</Text>
            <IconButton
              icon={<AiOutlinePlus />}
              border={"1px solid"}
              borderColor={"blackAlpha.400"}
              borderRadius={"full"}
              onClick={increaseQuantity}
            />
          </Flex>
          <Button
            w={"full"}
            borderRadius={"full"}
            h={"4rem"}
            bg={"#0f172a"}
            fontSize={"lg"}
            color={"white"}
            _hover={{ boxShadow: "lg" }}
          >
            <TbShoppingBag fontSize={"20px"} />{" "}
            <Text ml={"2"}>Add To Cart</Text>
          </Button>
        </HStack>
        <Heading fontSize={"xl"} bg={"gray.100"} p={"2"} borderRadius={"lg"}>
          Brand Details
        </Heading>
        <Text fontSize={"md"} textAlign={"justify"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint
          omnis cupiditate enim illum tempora ab dolorem esse! Hic nemo adipisci
          dignissimos praesentium placeat deserunt mollitia laborum corporis
          dolorem impedit? Voluptatum quia adipisci assumenda illo tempora totam
          odit commodi eum reiciendis quo, pariatur error deserunt cupiditate
          doloremque earum sit odio aliquam magni alias id quas aut. Labore
          voluptatum aliquid beatae? Sequi asperiores labore doloribus inventore
          dignissimos odit natus ad doloremque ex sit animi dolore repellendus
          fugiat, beatae error ea dicta non architecto harum odio cum facere
          provident. Sint, eum doloribus?
        </Text>
        <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={"3"}>
          <GridItem>
            <VStack
              bg={"#fef2f2"}
              py={"2"}
              px={"4"}
              borderRadius={"xl"}
              spacing={"2"}
              alignItems={"left"}
            >
              <TbTruckDelivery fontSize={"25px"} />
              <Heading fontSize={"lg"} fontWeight={"500"}>
                Free Shipping
              </Heading>
              <Text>On orders over ₹500</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack
              bg={"#f0f9ff"}
              py={"2"}
              px={"4"}
              borderRadius={"xl"}
              spacing={"2"}
              alignItems={"left"}
            >
              <TbExchange fontSize={"25px"} />
              <Heading fontSize={"lg"} fontWeight={"500"}>
                Very easy to return
              </Heading>
              <Text>On orders over ₹500</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack
              bg={"#f0fdf4"}
              py={"2"}
              px={"4"}
              borderRadius={"xl"}
              spacing={"2"}
              alignItems={"left"}
            >
              <RiFlashlightFill fontSize={"25px"} />
              <Heading fontSize={"lg"} fontWeight={"500"}>
                Fast Delivery
              </Heading>
              <Text>Get your order in 3 days</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack
              bg={"#fffbeb"}
              py={"2"}
              px={"4"}
              borderRadius={"xl"}
              spacing={"2"}
              alignItems={"left"}
            >
              <RiRefund2Line fontSize={"25px"} />
              <Heading fontSize={"lg"} fontWeight={"500"}>
                Refund Policy
              </Heading>
              <Text>15 day easy return</Text>
            </VStack>
          </GridItem>
        </Grid>

        <Heading fontSize={"xl"} bg={"gray.100"} p={"2"} borderRadius={"lg"}>
          Review
        </Heading>

        {/* Reviews Data... */}
        <VStack alignItems={"left"} justifyContent={"center"} >
          <Flex gap={"3"} alignItems={"start"}>
            
            <Avatar src="https://i.ibb.co/zncSFwz/download.jpg"/>
            <VStack w={"full"} alignItems={"left"} >
              <Text fontSize={"md"} fontWeight={"500"}>
                Itachi Uchiha
              </Text>
              
              <HStack >
                <Img borderRadius={"lg"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJI3Djxuzw_afMJAQpDkUgU9ivgZQNe3-3g&usqp=CAU" />
              </HStack>
              <Text fontSize={"md"}>Great Shoes, good for running, party, casual,</Text>
            </VStack>
          </Flex>
          
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Product;
