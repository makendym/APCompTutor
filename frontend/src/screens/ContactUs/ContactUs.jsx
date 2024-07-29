import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Forms } from "../../components/Forms";
import { ContactUSComponent } from "../../assets";
import "./style.css";
export const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="contact-us-container">
      <Grid
        container
        spacing={isMobile ? 2 : 5}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Form */}
        <Grid item xs={12} md={5}>
          <Forms />
        </Grid>

        {/* Image and paragraph text */}
        <Grid item xs={12} md={4} textAlign="center">
          <img
            src={ContactUSComponent}
            alt="Contact Us"
            style={{ width: "100%", height: "auto", paddingBottom: "80px",
          }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              textAlign: "left",
              paddingBottom: "80px",
              color: "white"
            }}
          >
            It is very important for us to keep in touch with you so we are
            always ready to answer any question that interests you. Send that
            message!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
