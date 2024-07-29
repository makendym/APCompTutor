import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SignupForm } from "../../components/Forms";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box className="signup-container">
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
            Sign Up
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "500px", textAlign: "center" }}>
          <SignupForm
            onSubmit={handleSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
