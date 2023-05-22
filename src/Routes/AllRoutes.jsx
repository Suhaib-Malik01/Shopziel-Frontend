import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "../Components/Homepage/Carousel/Carousel";
import Navbar from "../Components/Navbar";
import ProductSlider from "../Components/Products/ProductSlider";
import { Divider } from "@chakra-ui/react";
import CategoryBox from "../Components/Homepage/Category/CategoryBox";
import SignUp from "../Components/UserAuth/SignUp";
import Login from "../Components/UserAuth/Login";

const Homepage = () => {
  const [productArr, setProductArr] = useState([]);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8888/api/products/",
        requestOptions
      );
      let data = await response.json();
      setProductArr(data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Carousel />
      <ProductSlider
        data={productArr ? productArr : []}
        title={"New Arrivals."}
        subTitle={"Gadgets & Laptop"}
      />

      <ProductSlider
        data={productArr ? productArr : []}
        title={"Discover more."}
        subTitle={"Good things are waiting for you"}
      />

      <Divider w={"80%"} m={"auto"} my={"4rem"} />

      <CategoryBox />
    </>
  );
};




const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
