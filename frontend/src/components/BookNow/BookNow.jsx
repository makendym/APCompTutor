import React from 'react';
import Button from '@mui/material/Button';

export const BookNow = ({ title, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: '#3A9E3E', // Green background color
        '&:hover': {
          backgroundColor: '#357a38', // Darker green on hover
        },
        borderRadius: '9px', // Rounded corners
        color: '#ffffff', // White text color
        padding: '10px 20px', // Padding
        fontFamily: '"Poppins", Helvetica, sans-serif', // Font family
        fontSize: '16px', // Font size
        fontWeight: 700, // Font weight
        textTransform: 'none', // No uppercase transform
        boxShadow: 'none', // No box-shadow
        transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
        ':hover': {
          bgcolor: '#357a38', // Darker green on hover
        },
      }}
    >
      {title}
    </Button>
  );
};
