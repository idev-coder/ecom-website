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
import StarIcon from "@mui/icons-material/Star";
import Router from "next/router";

interface CardProductInfo {
  id: number;
  imgPath: string;
  name: string;
  description: string;
  price: number;
}

interface CardBrand {
  id: number;
  imgPath: string;
  name: string;
  description: string;
}

interface CardCategory {
  id: number;
  imgPath: string;
  category: string;
}

interface CardProductRecommend {
  id: number;
  imgPath: string;
  name: string;
  description: string;
  price: number;
  star: number;
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
    <div className="cardProductInfo" onClick={LinkProductHandle} key={id}>
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

export const CardBrand: React.FC<CardBrand> = ({
  id,
  imgPath,
  name,
  description,
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
    <div className="cardProductInfo" onClick={LinkProductHandle} key={id}>
      <Card
        sx={{
          maxWidth: 340,
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

export const CardCategory: React.FC<CardCategory> = ({
  id,
  imgPath,
  category,
}) => {
  const LinkProductHandle = () => {
    Router.push(`/category/${category}`);
  };
  return (
    <div className="cardProductInfo" onClick={LinkProductHandle} key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgPath}
            alt={category}
          />
          <CardContent>
            <Typography
              variant="body2"
              color={"black"}
              sx={{ textAlign: "center" }}
            >
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export const CardProductRecommend: React.FC<CardProductRecommend> = ({
  id,
  imgPath,
  name,
  description,
  price,
  star,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:490px)");
  const isMediumScreen = useMediaQuery("(max-width:820px)");

  const ProductImgHeight = () => {
    if (isSmallScreen) return 100;
    if (isMediumScreen) return 140;
    return 160;
  };

  const ProductCardHeight = () => {
    if (isSmallScreen) return 290;
    if (isMediumScreen) return 340;
    return 340;
  };

  const LinkProductHandle = () => {
    Router.push(`/product/${id}`);
  };

  // Example loop to render multiple components
  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < star; i++) {
      starsArray.push(
        <StarIcon sx={{ color: "#FFC700", fontSize: 15 }} key={i} />
      );
    }
    return starsArray;
  };

  return (
    <div className="cardProductInfo" onClick={LinkProductHandle} key={id}>
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
        <Box sx={{ my: 1, position: "absolute", bottom: 5, left: 20 }}>
          <Typography variant="body1" color="maroon">
            {price} Bath
          </Typography>
          {/* Render stars using the loop */}
          {renderStars()}
        </Box>
      </Card>
    </div>
  );
};
