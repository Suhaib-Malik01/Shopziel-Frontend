import {
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

  return (
    <Container h={"90vh"} px={"1rem"} py={"3rem"}>
      <VStack
        boxShadow={"lg"}
        spacing={"8"}
        px={"1rem"}
        py={"2rem"}
        borderRadius={"xl"}
      >
        <Img src="https://i.ibb.co/HhmvPmF/Artistic-Textured-Ink-Brush-Stroke-Brand-Logo.png" />

        <HStack>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </HStack>
        <InputGroup>
          <InputLeftElement>
            <CiUser fontSize={"20px"} />
          </InputLeftElement>
          <Input placeholder="Email" />
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
          />
          <InputRightElement onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            {showPassword ? (
              <CiUnlock fontSize={"20px"} />
            ) : (
              <CiLock fontSize={"20px"} />
            )}
          </InputLeftElement>
          <Input type="password" placeholder="Confirm Password" />
        </InputGroup>
        <Button
          w={"full"}
          bg={"#0f172a"}
          color={"white"}
          colorScheme=""
          borderRadius={"3xl"}
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
        <Text fontSize={"md"}>Already a Member ? <Link to={"/signin"}>Sign In</Link> </Text>
      </VStack>
    </Container>
  );
};

export default SignUp;
