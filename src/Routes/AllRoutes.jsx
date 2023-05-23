import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import SignUp from "../Components/UserAuth/SignUp";
import Login from "../Components/UserAuth/Login";
import Footer from "../Components/Footer";
import Homepage from "./Homepage";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AllRoutes;
