import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CardActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export const BioCard = ({ info }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : "100%",
        background: "rgba(18, 18, 18, 0.8)", // 80% opacity
        textAlign: "center",
        mx: isMobile ? 1 : "auto", // margin horizontal
      }}
    >
      <Avatar
        alt={info.name}
        src={info.image}
        sx={{
          width: isMobile ? theme.spacing(7) : theme.spacing(15),
          height: isMobile ? theme.spacing(7) : theme.spacing(15),
          margin: "auto",
          mb: 2,
        }}
      />
      <CardContent>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="h2"
          sx={{
            mb: 2,
            color: "white",
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 600,
          }}
        >
          {info.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            my: 2,
            color: "white",
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 300,
          }}
        >
          Introduction
        </Typography>
        <Typography
          variant="body2"
          sx={{
            my: 2,
            background: "rgba(18, 18, 18, 0.8)", // 80% opacity
            padding: "8px",
            borderRadius: "8px",
            color: "white",
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 300,
            textAlign: "left",
          }}
        >
          {info.introduction}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          sx={{
            mx: "auto",
            mb: 2,
            color: "#ffffff",
            padding: "20px",
            fontFamily: '"Poppins", Helvetica, sans-serif',
            fontWeight: 300,
          }}
        >
          Download my resume
        </Button>
      </CardActions>
    </Card>
  );
};
