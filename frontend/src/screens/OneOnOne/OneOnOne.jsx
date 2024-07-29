import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ONE_ON_ONE_DATA } from "../../constants";
import { oneOnOne } from "../../assets";
import { Card } from "../../components/Card";

export const OneOnOne = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="services-container">
      <Box className="inner-container" sx={{ paddingTop: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box className="images-container" sx={{ width: "60%", height: "auto", display: "flex", justifyContent: "center" }}>
          <img
            src={oneOnOne}
            alt="One-on-One Session"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 800,
            fontSize: isMobile ? "32px" : "48px",
            textAlign: "center",
          }}
          className="services-title"
        >
          Our Session Will Be
        </Typography>

        <Box className="services-cards" sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {ONE_ON_ONE_DATA.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OneOnOne;
