import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { TbExchange, TbShoppingBag, TbTruckDelivery } from "react-icons/tb";
import {
  RiArrowDropDownLine,
  RiCloseFill,
  RiFlashlightFill,
  RiRefund2Line,
} from "react-icons/ri";
import ProductSlider from "../Components/Products/ProductSlider";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../Components/Review/reviewCard";
import PostReviewMenu from "../Components/Review/PostReviewMenu";

const Product = () => {
  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState(null);

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const fetchProductData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://shopziel.up.railway.app/api/products/${id}`,
        requestOptions
      );
      let data = await response.json();

      if (response.ok) {
        setProduct(data);
        fetchProducts(data.categoryId);
        console.log(data);
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  const fetchProducts = async (categoryId) => {
    try {
      const response = await fetch(
        `https://shopziel.up.railway.app/api/category/${categoryId}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setCategory(responseData);
      }
    } catch (err) {
      alert(err);
    }
  };

  const addToCart = async () => {
    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );

    myHeaders.append("Content-Type", "application/json");

    try {
      const response = await fetch(
        "https://shopziel.up.railway.app/api/customers/cart/add",
        {
          method: "POST",
          body: JSON.stringify({
            productId: product.productId,
            quantity: quantity,
          }),
          headers: myHeaders,
        }
      );
      if (response.ok) {
        toast({
          title: "Added to cart",
          status: "success",
          duration: 3000,
          position: "top",
        });
      }
    } catch (err) {
      toast({
        title: { err },
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Flex
        width={["100%", "90%", "70%"]}
        gap={"2rem"}
        flexDirection={["column", "column", "column", "row"]}
        m={"auto"}
        mt={"5"}
        p={"5"}
      >
        <VStack w={"full"}>
          <Img
            w={"90%"}
            borderRadius={"3xl"}
            src={product.image}
            border={"1px solid"}
            borderColor={"gray.100"}
          />
        </VStack>
        <VStack px={"3"} w={"full"} alignItems={"left"} spacing={"4"}>
          <Heading>{product.name}</Heading>
          <Flex gap={"4"}>
            <Text fontSize={"xl"} fontWeight={"500"}>
              ₹ {product.price}
            </Text>
            <Divider color={"gray"} orientation="vertical" />
            <Flex alignItems={"center"} gap={"2"}>
              <StarIcon fontSize={"lg"} color={"gold"} />
              <Text fontWeight={"400"} fontSize={"md"}>
                {product.rating}
              </Text>
              <Text as={"u"} fontWeight={"500"} justifySelf={"right"}>
                {product.reviews ? product.reviews.length : 0} Rating
              </Text>
            </Flex>
          </Flex>
          <Heading fontSize={"xl"} bg={"gray.100"} p={"2"} borderRadius={"lg"}>
            Description:
          </Heading>
          <Text fontSize={"md"} textAlign={"justify"}>
            {product.description}
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
              onClick={addToCart}
              borderRadius={"full"}
              h={"4rem"}
              bg={"buttonColor"}
              fontSize={"lg"}
              color={"white"}
              _hover={{ bg: "buttonColor", boxShadow: "lg" }}
            >
              <TbShoppingBag fontSize={"20px"} />{" "}
              <Text ml={"2"}>Add To Cart</Text>
            </Button>
          </HStack>
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
          <Heading
            onClick={() => setCheck(!check)}
            fontSize={"xl"}
            bg={"gray.100"}
            p={"2"}
            display={product.brandDetails ? "none" : "flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderRadius={"lg"}
          >
            Brand Details
            {!check ? <RiArrowDropDownLine /> : <RiCloseFill />}
          </Heading>

          {check ? (
            <Text fontSize={"md"} textAlign={"justify"}>
              Shopziel is a premier clothing brand that caters to
              outdoor enthusiasts who seek both style and functionality in their
              apparel. Inspired by the beauty of nature and the thrill of
              adventure, TrailTrek Apparel offers a range of high-performance
              outdoor clothing that empowers individuals to explore the great
              outdoors with confidence and comfort.
            </Text>
          ) : null}

          <Heading fontSize={"xl"} bg={"gray.100"} p={"2"} borderRadius={"lg"}>
            Review
          </Heading>

          {/* Reviews Data... */}
          <VStack gap={"2"} alignItems={"left"} justifyContent={"center"}>
            <Flex w={"full"} justifyContent={"right"}>
              <Button
                onClick={() =>
                  sessionStorage.getItem("token")
                    ? onOpen()
                    : navigate("/signin")
                }
                borderRadius={"3xl"}
                color={"white"}
                bg="buttonColor"
                _hover={{ bg: "buttonColor" }}
              >
                Post Review
              </Button>
            </Flex>

            <Divider />

            <Box maxH={"500px"} overflowY={"auto"}>
              {product.reviews
                ? product.reviews.map((review, index) => {
                    return (
                      <Box key={index}>
                        <ReviewCard
                          reviewMsg={review.review}
                          img={review.imageUrl}
                          reviewCustomer = {review.customer}
                        />
                        <Divider my={"2"} />
                      </Box>
                    );
                  })
                : null}
            </Box>
          </VStack>
        </VStack>
      </Flex>
      <ProductSlider
        title={"People Also buy"}
        data={category ? category.products : []}
      />

      <PostReviewMenu
        isOpen={isOpen}
        onClose={onClose}
        productId={product.productId}
        reloadProduct={fetchProductData}
      />
    </>
  );
};

export default Product;
