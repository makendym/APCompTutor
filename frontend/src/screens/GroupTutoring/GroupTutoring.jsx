import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { GROUP_TUTORING_DATA } from "../../constants";
import { groupTutoring } from "../../assets";
import { Card } from "../../components/Card";
import "./style.css";

export const GroupTutoring = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="services-container">
      <Box
        className="header-container"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "80px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 800,
            fontSize: isMobile ? "32px" : "48px",
            flex: isMobile ? "1 0 auto" : "1",
            textAlign: isMobile ? "center" : "left",
          }}
          className="services-title"
        >
          Group Tutoring and Workshops Will Be
        </Typography>
        <Box
          className="images-container"
          sx={{ flex: isMobile ? "1 0 auto" : "1" }}
        >
          <img
            src={groupTutoring}
            alt="One-on-One Session"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      <Box className="services-cards">
        {GROUP_TUTORING_DATA.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GroupTutoring;
