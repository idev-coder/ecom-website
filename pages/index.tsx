import React from "react";
import Navbar from "@/component/navbar";
import SwipeCarousel from "@/component/carousel";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { CardProductInfo, CardBrand } from "@/component/items/card";

interface Product {
  id: number;
  imgPath: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery("(max-width:320px)");
  const isSmallScreen = useMediaQuery("(max-width:490px)");
  const isMediumScreen = useMediaQuery("(max-width:820px)");

  const GridTemplateColumns = () => {
    if (isExtraSmallScreen) return "1fr 1fr";
    if (isSmallScreen) return "1fr 1fr 1fr";
    if (isMediumScreen) return "1fr 1fr 1fr ";
    return "1fr 1fr 1fr 1fr 1fr 1fr";
  };

  const limitCardProduct = () => {
    if (isExtraSmallScreen) return 4;
    return 6;
  };

  const limitCardBrand = () => {
    if (isMediumScreen) return 3;
    return 6;
  };

  const productData: Product[] = [
    {
      id: 1,
      imgPath: "images/1.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
    {
      id: 1,
      imgPath: "images/7.jpg",
      name: "Bag",
      description:
        "This is a most beautiful bag and useful from camel leather Sahara desert, the hottest desert in the world.",
      price: 100,
    },
    {
      id: 1,
      imgPath: "images/5.jpg",
      name: "Watch",
      description: "This is a most beautiful watch, Come with new technology!",
      price: 100,
    },
    {
      id: 1,
      imgPath: "images/3.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
    {
      id: 1,
      imgPath: "images/4.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
    {
      id: 1,
      imgPath: "images/2.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
  ];

  return (
    <>
      <Navbar />
      <SwipeCarousel />
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: GridTemplateColumns(),
          gap: 2,
          my: 5,
        }}
      >
        {productData.slice(0, limitCardProduct()).map((product: Product) => (
          <CardProductInfo
            key={product.id}
            id={product.id}
            imgPath={product.imgPath}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </Container>
      <Container>
        <Box>
          <Typography variant="h5">E-Mall</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: GridTemplateColumns(),
            gap: 2,
            my: 5,
          }}
        >
          {productData.slice(0, limitCardBrand()).map((product: Product) => (
            <CardBrand
              key={product.id}
              id={product.id}
              imgPath={product.imgPath}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
