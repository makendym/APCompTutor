import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ABOUT_US_DATA } from "../../constants";
import "./style.css";

export const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="services-container" sx={{ padding: "80px" }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Poppins", Helvetica, sans-serif',
          fontWeight: 800,
          fontSize: isMobile ? "32px" : "48px",
          textAlign: isMobile ? "center" : "left",
        }}
        className="services-title"
      >
        {ABOUT_US_DATA.title}
      </Typography>
      <Box
        className="header-container"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="images-container"
          sx={{ flex: isMobile ? "0 1 30%" : "0 1 40%" }}
        >
          <img
            src={ABOUT_US_DATA.image}
            alt="About Us"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{
            flex: isMobile ? "1 0 auto" : "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Align items to center for both mobile and desktop
            marginLeft: isMobile ? "0" : "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", Helvetica, sans-serif',
              fontWeight: 300,
              fontSize: "20px",
              textAlign: "left", // Center align the text
            }}
            className="about-description"
          >
            {ABOUT_US_DATA.description1}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", Helvetica, sans-serif',
              fontWeight: 300,
              fontSize: "20px",
              textAlign: "left", // Center align the text
            }}
            className="about-description"
          >
            {ABOUT_US_DATA.description2}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", Helvetica, sans-serif',
              fontWeight: 300,
              fontSize: "20px",
              textAlign: "left", // Center align the text
            }}
            className="about-description"
          >
            {ABOUT_US_DATA.description3}
          </Typography>
        </Box>
      </Box>
      <Box sx={{width:"10%"}}>
        <img
          src={ABOUT_US_DATA.logo}
          alt="Logo"
          style={{ width: "100%", height: "auto" }} // Added margin-top for spacing
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
