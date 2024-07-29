import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AP_CS_RESOURCES_DATA } from "../../constants";
import { Card } from "../../components/Card";

export const ApCsResources = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="services-container">
      <Box className="inner-container" sx={{ padding: "80px", display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 800,
            fontSize: isMobile ? "32px" : "48px",
            textAlign: "left",
          }}
          className="services-title"
        >
          AP CS Resources
        </Typography>

        <Box className="services-cards" sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {AP_CS_RESOURCES_DATA.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ApCsResources;
