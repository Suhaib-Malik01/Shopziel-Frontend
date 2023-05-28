import {
  Button,
  Center,
  Container,
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const signIn = async () => {
    const data = Array.from(document.getElementsByClassName("data")).map(
      (ele) => {
        return ele.value;
      }
    );
    console.log(data);

    // try {
    //   let response = await fetch(
    //     "https://shopziel.up.railway.app/api/users/signIn",
    //     {
    //       headers: {
    //         Authorization: `Basic ${window.btoa(`${data[0]}:${data[1]}`)}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   if (response.ok) {
    //     const responseResult = await response.json();
    //     console.log(response)
    //     console.log(responseResult);
    //     console.log(response.headers.get("authorization"));
    //     console.log(response.headers);
    //   } else {
    //     console.log("Login failed:", response.status);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    fetch("https://shopziel.up.railway.app/api/users/signIn", {
    headers: {
      Authorization: `Basic ${window.btoa(`${data[0]}:${data[1]}`)}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      
      const token = response.headers.get("authorization");
      console.log(response)
      console.log(token);
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      alert(error.message);
    });
  };

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
            placeholder="Password"
            className="data"
          />
          <InputRightElement onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <Button
          w={"full"}
          bg={"#0f172a"}
          color={"white"}
          colorScheme=""
          borderRadius={"3xl"}
          onClick={signIn}
        >
          Sign In
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
          New Member ? <Link to={"/signup"}>Sign Up</Link>{" "}
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;
