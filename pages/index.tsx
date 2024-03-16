import React from "react";
import Navbar from "@/component/navbar";
import SwipeCarousel from "@/component/carousel";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import {
  CardProductInfo,
  CardBrand,
  CardCategory,
  CardProductRecommend,
} from "@/component/items/card";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CardProductInfo {
  id: number;
  imgPath: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCategory {
  id: number;
  imgPath: string;
  category: string;
}

const Home: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery("(max-width:360px)");
  const isSmallScreen = useMediaQuery("(max-width:490px)");
  const isMediumScreen = useMediaQuery("(max-width:820px)");

  const GridTemplateColumns = () => {
    if (isExtraSmallScreen) return "1fr 1fr ";
    if (isSmallScreen) return "1fr 1fr 1fr";
    if (isMediumScreen) return "1fr 1fr 1fr ";
    return "1fr 1fr 1fr 1fr 1fr 1fr";
  };

  const GridTemplateColumnsCardCategory = () => {
    const isExtraExtraSmallScreen = useMediaQuery("(max-width:370px)");
    if (isExtraExtraSmallScreen) return "1fr 1fr";
    if (isMediumScreen) return "1fr 1fr 1fr ";
    return "1fr 1fr 1fr 1fr 1fr 1fr";
  };

  const limitCardProduct = () => {
    return 6;
  };

  const limitCardCategory = () => {
    if (isMediumScreen) return 6;
    return 12;
  };

  const productData: CardProductInfo[] = [
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
      imgPath: "images/1.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
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
      imgPath: "images/1.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
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
      imgPath: "images/1.jpg",
      name: "Cactus",
      description:
        "This is a most beautiful cactus from Sahara desert, the hottest desert in the world.",
      price: 100,
    },
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

  const ProductCategory: ProductCategory[] = [
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
    { id: 1, imgPath: "/images/1.jpg", category: "SmartPhone" },
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
          my: 4,
        }}
      >
        {productData
          .slice(0, limitCardProduct())
          .map((product: CardProductInfo) => (
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
        <Swiper
          slidesPerView={6}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {productData.map((product: CardProductInfo) => (
            <SwiperSlide key={product.id}>
              <CardBrand
                key={product.id}
                id={product.id}
                name={product.name}
                imgPath={product.imgPath}
                description={product.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h5">Categories</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: GridTemplateColumnsCardCategory(),
          }}
        >
          {ProductCategory.slice(0, limitCardCategory()).map(
            (category: ProductCategory) => (
              <CardCategory
                id={category.id}
                imgPath={category.imgPath}
                category={category.category}
              />
            )
          )}
        </Box>
      </Container>
      <Container>
        <Box>
          <Typography variant="h5">Recommended</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: GridTemplateColumns(),
            gap: 2,
          }}
        >
          {productData.map((product: CardProductInfo) => (
            <CardProductRecommend
              key={product.id}
              id={product.id}
              imgPath={product.imgPath}
              name={product.name}
              description={product.description}
              price={product.price}
              star={4}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
