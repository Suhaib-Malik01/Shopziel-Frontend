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
import SellerDashboard from "./SellerDashboard";
import SellerRequest from "./SellerRequest";
import { Flex, Stack } from "@chakra-ui/react";
import SellerProduct from "../Components/SellerProduct";

const OpenRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

const CustomerRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart/payments" element={<Payments />} />
        <Route path="/products/search/:keyword" element={<ProductSearch />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/seller-request" element={<SellerRequest />} />
      </Routes>
      <Footer />
    </>
  );
};

const SellerRoute = () => {
  return (
    <Flex>
      <SellerDashboard />
      <Stack w={"85%"}>
        <Routes>
          <Route path="/products" element={<SellerProduct />} />
        </Routes>
      </Stack>
    </Flex>
  );
};

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<OpenRoutes />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path="/seller/*" element={<SellerRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
