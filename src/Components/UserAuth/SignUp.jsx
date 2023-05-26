import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { CiLock, CiUnlock, CiUser } from "react-icons/ci";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [image, setImage] = useState("");

  let imageUrl;

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    console.log(imageUrl);
    setImage(URL.createObjectURL(file));

    const data = new FormData();
    console.log(file);

    data.append("file", file);
    data.append("upload_preset", "shopziel");
    data.append("cloud_name", "dicjkx0at");

    try {
      let response = await fetch(
        "https://api.cloudinary.com/v1_1/dicjkx0at/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      let result = await response.json();
      imageUrl = result.url;
    } catch (err) {
      alert(err);
    }
  };

  const signUp = async () => {

    let data = document.getElementsByClassName("data").map(ele => {
      return ele.value;
    });
    
    if(data[3]!==data[4]){
      return;
    }
    try {
      const response = fetch("https://online-shopping-application-production.up.railway.app/api/users", {
        method: "POST",
        body: {
            firstName:data[0],
            lastName: data[1],
            profileImgUrl: imageUrl,
            email: data[2],
            password : data[3],
        },

      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container h={"90vh"} px={"1rem"} py={"2rem"}>
      <VStack
        boxShadow={"lg"}
        spacing={"8"}
        px={"1rem"}
        py={"2rem"}
        borderRadius={"xl"}
      >
        <Img src="https://i.ibb.co/HhmvPmF/Artistic-Textured-Ink-Brush-Stroke-Brand-Logo.png" />

        <HStack
          justifyContent={"space-between"}
          flexDirection={["column-reverse", "row", "row"]}
          w={"full"}
          gap={"3"}
        >
          <VStack w={["100%", "90%", "90%"]} gap={"4"}>
            <Input placeholder="First Name" className="data"/>
            <Input placeholder="Last Name" className="data"/>
          </VStack>
          <Box>
            <Input
              type="file"
              id="profilePicture"
              onChange={handleFileChange}
              display="none"
            />
            <label htmlFor="profilePicture">
              <Avatar size="xl" src={image} />
            </label>
          </Box>
        </HStack>
        <InputGroup>
          <InputLeftElement>
            <CiUser fontSize={"20px"} />
          </InputLeftElement>
          <Input placeholder="Email" className="data" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            {showPassword ? (
              <CiUnlock fontSize={"20px"} />
            ) : (
              <CiLock fontSize={"20px"} />
            )}
          </InputLeftElement>
          <Input
            type={showPassword ? "Text" : "Password"}
            placeholder="Create Password"
            className="data"
          />
          <InputRightElement onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <CiLock fontSize={"20px"} />
          </InputLeftElement>
          <Input type="password" placeholder="Confirm Password" className="Data" />
        </InputGroup>
        <Button
          w={"full"}
          bg={"#0f172a"}
          color={"white"}
          colorScheme=""
          borderRadius={"3xl"}
          onClick={signUp}
        >
          Sign Up
        </Button>
        <Button
          w={"full"}
          maxW={"md"}
          borderColor={"#0f172a"}
          variant={"outline"}
          borderRadius={"3xl"}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        <Text fontSize={"md"}>
          Already a Member ? <Link to={"/signin"}>Sign In</Link>{" "}
        </Text>
      </VStack>
    </Container>
  );
};

export default SignUp;
