import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PurchaseFlowCard from "./PurchaseFlowCard";

const PurchaseFlow = () => {
  let data = [
    {
      img: "https://i.ibb.co/ZhBP7fG/HIW1img.webp",
      title: "Filter & Discover",
      desc: "Smart filtering and suggestions make it easy to find",
      step: "Step 1",
      color: "green",
    },
    {
      img: "https://i.ibb.co/3f5k6F4/HIW2img.webp",
      title: "Add to bag",
      desc: "Easily select the correct items and add them to the cart",
      step: "Step 2",
      color: "blue",
    },
    {
      img: "https://i.ibb.co/Jc8ZYxb/HIW3img.webp",
      title: "Fast shipping",
      desc: "The carrier will confirm and ship quickly to you",
      step: "Step 3",
      color: "yellow",
    },
    {
      img: "https://i.ibb.co/MMxMh7w/HIW4img.webp",
      title: "Enjoy the product",
      desc: "Have fun and enjoy your 5-star quality products",
      step: "Step 4",
      color: "purple",
    },
  ];

  return (
    <Grid
      w={"80%"}
      gap={"5"}
      m={"auto"}
      justifyContent={"center"}
      templateColumns={[
        "1fr",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4,1fr)",
      ]}
    >
      {data.map((ele, index) => {
        return (
          <GridItem key={index}>
            <PurchaseFlowCard img={ele.img} step={ele.step} title={ele.title} desc={ele.desc} stepColor={ele.color}/>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PurchaseFlow;
