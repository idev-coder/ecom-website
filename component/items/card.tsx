import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import Router from "next/router";

interface CardProductInfo {
  id: number;
  imgPath: string;
  name: string;
  description: string;
  price: number;
}

export const CardProductInfo: React.FC<CardProductInfo> = ({
  id,
  imgPath,
  name,
  description,
  price,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:490px)");
  const isMediumScreen = useMediaQuery("(max-width:820px)");

  const ProductImgHeight = () => {
    if (isSmallScreen) return 100;
    if (isMediumScreen) return 140;
    return 160;
  };

  const ProductCardHeight = () => {
    if (isSmallScreen) return 260;
    if (isMediumScreen) return 340;
    return 340;
  };

  const LinkProductHandle = () => {
    Router.push(`/product/${id}`);
  };
  return (
    <div className="cardProductInfo" onClick={LinkProductHandle}>
      <Card
        sx={{
          maxWidth: 345,
          height: ProductCardHeight(),
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={ProductImgHeight()}
            image={imgPath}
            alt={name}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography
          variant="body1"
          color="maroon"
          sx={{ my: 1, position: "absolute", bottom: 5, left: 20 }}
        >
          {price} Bath
        </Typography>
      </Card>
    </div>
  );
};

export const CardBrand: React.FC<CardProductInfo> = ({
  id,
  imgPath,
  name,
  description,
  price,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:490px)");
  const isMediumScreen = useMediaQuery("(max-width:820px)");

  const ProductImgHeight = () => {
    if (isSmallScreen) return 100;
    if (isMediumScreen) return 140;
    return 160;
  };

  const ProductCardHeight = () => {
    if (isSmallScreen) return 260;
    if (isMediumScreen) return 300;
    return 320;
  };

  const LinkProductHandle = () => {
    Router.push(`/product/${id}`);
  };

  return (
    <div className="cardProductInfo" onClick={LinkProductHandle}>
      <Card
        sx={{
          maxWidth: 345,
          height: ProductCardHeight(),
          position: "relative",
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              height={ProductImgHeight()}
              image={imgPath}
              alt={name}
              sx={{ objectFit: "contain" }}
            />
            <CardMedia
              component="img"
              height={40}
              width={40}
              image="/images/logo2.jpg"
              alt="Logo"
              sx={{
                objectFit: "contain",
                position: "absolute",
                bottom: -20,
                width: 40,
                opacity: 0.9,
              }}
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ my: 2 }}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
