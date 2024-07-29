import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SERVICES_DATA } from "../../constants";
import { Card } from "../../components/Card"; // Import the Card component
import "./style.css";

export const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="services-container" sx={{padding: "80px"}}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Poppins", Helvetica, sans-serif',
          fontWeight: 800,
          fontSize: isMobile ? "32px" : "48px",
        }}
        className="services-title"
      >
        Services
      </Typography>

      <Box className="services-cards">
        {SERVICES_DATA.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            learnMoreLink={service.learnMoreLink}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
