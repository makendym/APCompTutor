import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Card = ({
  title,
  subtitle,
  image,
  description,
  learnMoreLink,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(learnMoreLink);
  };

  return (
    <Box className="service-section">
      {image && (
        <Box sx={{ width: "100%", height: 250, overflow: "hidden" }}>
          <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
        </Box>
      )}
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 300,
            textAlign: "left",
          }}
          className="service-title"
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Poppins", Helvetica, sans-serif',
          fontWeight: 800,
          textAlign: subtitle ? "left" : "center",
        }}
        className="service-title"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Poppins", Helvetica, sans-serif',
          fontWeight: 300,
          textAlign: subtitle ? "left" : "center",
        }}
        className="service-description"
      >
        {description}
      </Typography>
      {learnMoreLink && (
        <Button
          color="primary"
          sx={{
            color: "#fff",
            padding: "20px",
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 300,
          }}
          onClick={handleNavigate}
          className="learn-more-button"
        >
          Learn more
        </Button>
      )}
    </Box>
  );
};
