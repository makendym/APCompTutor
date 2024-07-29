import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const BookASession = ({ onClick }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const dynamicStyles = {
    fontSize: isSmallScreen ? '16px' : (isMediumScreen ? '20px' : '24px'),
    padding: isSmallScreen ? '10px 20px' : '15px 30px',
    fontFamily: '"Poppins", Helvetica, sans-serif',
    fontWeight: 800,
    color: '#ffffff',
    borderRadius: '9px',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'background-color 0.3s',
    backgroundColor: '#3A9E3E', // static background color
    '&:hover': {
      backgroundColor: '#357a38', // darker green on hover
    },
    width: '100%', 
    height: '100%', 
  };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      className="book-a-session"
      sx={dynamicStyles}
    >
      Book a Session
    </Button>
  );
};
