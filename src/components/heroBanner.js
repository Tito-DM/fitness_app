import { Box, Button, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      p="20px"
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#ff2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            xs: "40px",
            lg: "44px",
          },
        }}
        mb="20px"
        mt="20px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb="20px">
        Check out the mosteffective exercise
      </Typography>
      <Button 
      variant="contained"
      sx={{
        backgroundColor: "#ff2625",
        padding: "10px",
      }}
      color="error" href="#exercises">
        Explore Exercices
      </Button>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px "
        sx={{
          opacity: 0.1,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
