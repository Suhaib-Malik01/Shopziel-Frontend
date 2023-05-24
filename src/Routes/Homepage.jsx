import { useEffect, useState } from "react";

import Carousel from "../Components/Homepage/Carousel/Carousel";
import ProductSlider from "../Components/Products/ProductSlider";
import { Divider } from "@chakra-ui/react";
import CategoryBox from "../Components/Homepage/Category/CategoryBox";

const Homepage = () => {
  const [productArr, setProductArr] = useState([]);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://online-shopping-application-production.up.railway.app/api/products/",
        requestOptions
      );
      let data = await response.json();
      
      console.log(data);
      if(!data.status) setProductArr(data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // const fetchCategory = async () => {


  // }


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

      <ProductSlider
        data={productArr ? productArr : []}
        title={"Best Rated."}
        subTitle={"things are waiting for you"}
      />
    </>
  );
};

export default Homepage;
