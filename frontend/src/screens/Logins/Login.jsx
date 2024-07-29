import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LoginForm } from "../../components/Forms"; // Adapted Forms component
import { useUserAuth } from "../../context/UserAuthContext";
import "./style.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box className="login-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            textAlign: "center",
            mb: isMobile ? 3 : 0, // Add bottom margin on mobile
            mr: isMobile ? 0 : 50, // Add right margin on desktop
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              color: "white",
            }}
          >
            Sign In
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "500px", textAlign: "center" }}>
          <LoginForm
            onSubmit={handleSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
            googleSignIn={handleGoogleSignIn}
            error={error}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
