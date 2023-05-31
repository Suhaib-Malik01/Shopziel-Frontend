import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import Navbar from "../Components/Navbar/Navbar";
import SignUp from "../Components/UserAuth/SignUp";
import Login from "../Components/UserAuth/Login";
import Footer from "../Components/Footer";
import Homepage from "./Homepage";
import Product from "./Product";
import Products from "./Products";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AllRoutes;
