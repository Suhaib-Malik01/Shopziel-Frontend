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
import ProductSearch from "./ProductSearch";
import Coupons from "./Coupons";
import Payments from "./Payments";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/cart/payments" element={<Payments />} />
        <Route path="/products/search/:keyword" element={<ProductSearch />} />
        <Route path="/coupons" element={<Coupons />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AllRoutes;
