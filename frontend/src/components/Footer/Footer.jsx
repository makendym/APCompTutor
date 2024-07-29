import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { darkTransparentLogo } from "../../assets";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  // Routes where the header should not be displayed
  const hideOnRoutes = ["/login", "/signup", "/ChatGPT"];

  // Check if the current route is one of the routes to hide the header
  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ width:200, height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Adjust width and height as needed */}
              <img src={darkTransparentLogo} alt="Logo" style={{ width: "100%", height: "auto", objectFit: 'contain' }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | support@apcomptutor.com | (862) 263-0183`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
             Made by Makendy Midouin
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
