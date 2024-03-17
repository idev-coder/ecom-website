import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, useMediaQuery } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function MultiActionAreaCard() {
  const isMediumScreen = useMediaQuery("(max-width:890px)");
  const isSmallScreen = useMediaQuery("(max-width:380px)");

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isSmallScreen
          ? "1fr"
          : isMediumScreen
          ? "1fr 1fr"
          : "1fr 1fr 1fr 1fr",
        placeContent: "center",
        alignContent: "center",
        gap: 0.5,
        my: 3,
        p: 0.5,
      }}
    >
      <Card sx={{ border: "1px solid black", background: "#FAFDD6" }}>
        <CardActionArea>
          <CardMedia
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MonetizationOnIcon
              sx={{
                fontSize: 40,
                background: "#539165",
                borderRadius: "50%",
                marginRight: isMediumScreen ? 4 : 10,
                color: "white",
              }}
            />
            <Typography gutterBottom variant="h6" component="div">
              Income
            </Typography>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10K
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ border: "1px solid black", background: "#FAFDD6" }}>
        <CardActionArea>
          <CardMedia
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <LocalShippingIcon
              sx={{
                fontSize: 40,
                background: "#40A2E3",
                borderRadius: "50%",
                marginRight: isMediumScreen ? 4 : 10,
                color: "white",
              }}
            />
            <Typography gutterBottom variant="h6" component="div">
              Shipped Orders
            </Typography>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10K
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ border: "1px solid black", background: "#FAFDD6" }}>
        <CardActionArea>
          <CardMedia
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <LeaderboardIcon
              sx={{
                fontSize: 40,
                background: "#DF826C",
                borderRadius: "50%",
                marginRight: isMediumScreen ? 4 : 10,
                color: "white",
              }}
            />
            <Typography gutterBottom variant="h6" component="div">
              Marget Share
            </Typography>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10K
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ border: "1px solid black", background: "#FAFDD6" }}>
        <CardActionArea>
          <CardMedia
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <PeopleAltIcon
              sx={{
                fontSize: 35,
                background: "#539165",
                borderRadius: "50%",
                marginRight: isMediumScreen ? 4 : 10,
                color: "white",
              }}
            />
            <Typography gutterBottom variant="h6" component="div">
              New Customer
            </Typography>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10K
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
