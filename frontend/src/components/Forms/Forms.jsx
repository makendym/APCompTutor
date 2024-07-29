import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Forms = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Place form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={8}>
          <TextField
            required
            label="Your Name"
            variant="standard"
            fullWidth
            InputLabelProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
            }}
            InputProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
              sx: {
                "&::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&:hover:not(.Mui-disabled)::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&::after": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            label="Your Email"
            variant="standard"
            type="email"
            fullWidth
            InputLabelProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
            }}
            InputProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
              sx: {
                "&::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&:hover:not(.Mui-disabled)::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&::after": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            label="Your Message"
            variant="standard"
            multiline
            fullWidth
            InputLabelProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
            }}
            InputProps={{
              style: { color: "white", fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
              sx: {
                "&::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&:hover:not(.Mui-disabled)::before": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
                "&::after": {
                  borderBottomColor: "white",
                  borderBottomWidth: "2px",
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              color: "black",
              bgcolor: "white",
              paddingTop: "20px",
              paddingBottom: "20px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              "&:hover": {
                bgcolor: "white", // Keeps the button white on hover
                // If you don't want any change at all on hover, you can remove the opacity rule.
                opacity: 0.7, // Optional: Slight opacity change on hover for a feedback effect
              },
            }}
          >
            Share Your Feedback
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
