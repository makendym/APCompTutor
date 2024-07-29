import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

export const LoginForm = ({
  onSubmit,
  setEmail,
  setPassword,
  googleSignIn,
  error,
}) => {
  // Add state handling for email and password if needed

  return (
    <Box
      sx={{
        bgcolor: "rgba(18, 18, 18, 0.8)", // Dark background with opacity
        p: 2, // Padding
        borderRadius: 2, // Rounded corners
        boxShadow: 4, // Shadow for depth effect
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // This centers the children horizontally
        justifyContent: 'center', // This centers the children vertically (useful for the entire column)
        width: '100%', // Ensures the box takes the full width
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          color: "white",
          mb: 2, // Add margin bottom for spacing
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 300,
          color: "white",
          mb: 5,
          width: 300,
        }}
      >
        Ready to continue your learning journey? Sign in to pick up where you
        left off.
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={8}>
            <TextField
              required
              label="Email"
              variant="standard"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: {
                  color: "white",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                },
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
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: {
                  color: "white",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                },
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
          {error && (
            <Grid item xs={8}>
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid item xs={8}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                color: "black",
                bgcolor: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "white", // Keeps the button white on hover
                  // If you don't want any change at all on hover, you can remove the opacity rule.
                  opacity: 0.7, // Optional: Slight opacity change on hover for a feedback effect
                },
              }}
            >
              Log In
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            textAlign="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Divider sx={{ flexGrow: 1, bgcolor: "white" }} />
            <Typography sx={{ color: "white", mx: 2 }}>OR</Typography>
            <Divider sx={{ flexGrow: 1, bgcolor: "white" }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={googleSignIn}
              style={{ width: "100%" }} // Make Google button full width
            />
          </Grid>
          <Grid item xs={12} md={8} textAlign="left">
            <Typography variant="body2" sx={{ color: "white", mb:4 }}>
              Don't have an account?
              <Link to="/signup" style={{ color: "inherit" }}>
                Sign up
              </Link>
            </Typography>

            <Typography variant="body2" sx={{ color: "white" }}>
              <Link to="/forgot-password" style={{ color: "inherit" }}>
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
