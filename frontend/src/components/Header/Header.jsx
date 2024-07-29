import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BookNow } from "../BookNow";
import { NAV_LINKS, DRAWER_LINKS, LOGIN_LINK } from "../../constants";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  // Routes where the header should not be displayed
  const hideOnRoutes = ["/login", "/signup"];

  // Check if the current route is one of the routes to hide the header
  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };



  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleDrawerNavigation = (path) => {
    setDrawerOpen(false); // Close the drawer on navigation
    navigate(path);
  };
  // Drawer content with navigation links and login button
  const drawerContent = (
    <Box
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
      sx={{ width: 250 }} // You can adjust the width as needed
    >
      <List>
        {DRAWER_LINKS.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton onClick={() => handleDrawerNavigation(link.path)}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleDrawerNavigation(LOGIN_LINK.path)}
          >
            <ListItemText primary={LOGIN_LINK.title} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className="app-bar"
        elevation={0}
        sx={{ background: "none", boxShadow: "none" }}
      >
        <Toolbar className="toolbar">
          {/* Desktop Links */}
          {!isMobile && (
            <Box className="nav-links">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.title}
                  color="inherit"
                  onClick={() => handleNavigation(link.path)}
                  sx={{
                    fontFamily: '"Poppins", Helvetica, sans-serif',
                    fontWeight: 200,
                  }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Side Content and Drawer Toggle Button */}
          <Box className="auth-buttons">
            {!isMobile && (
              <>
                <Button
                  color="inherit"
                  onClick={() => handleNavigation(LOGIN_LINK.path)}
                  sx={{
                    fontFamily: '"Poppins", Helvetica, sans-serif',
                    fontWeight: 200,
                  }}
                >
                  {LOGIN_LINK.title}
                </Button>
                <BookNow
                  title="Book Now"
                  onClick={() => console.log("Button clicked")}
                />{" "}
              </>
            )}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer on the right */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        className="drawer"
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
