import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Header } from "../../components/Header";
import { BookASession } from "../../components/BookASession";
import { Services } from "../Services";
import { MeetYourTutor } from "../MeetYourTutor";
import { ApCsResources } from "../ApCsResources";
import "./style.css";

export const LandingPage = () => {
  return (
    <>
      <Container maxWidth={false} disableGutters className="landing-page">
        <Box className="overlap-group-wrapper">
          <Box className="overlap-group">
            <Header />
            <Box className="overlap">
              <Box className="circles">
                <Box className="ellipse" />
              </Box>
              <img
                className="white-logo"
                alt="White logo"
                src="https://c.animaapp.com/PIXQFewP/img/white-logo-transparent-background-1.png"
              />
            </Box>
            <Box className="book-a-session-instance">
              <BookASession />
            </Box>
          </Box>
        </Box>
      </Container>
      {/* <Divider variant="middle"  /> */}
      <Services />
      <Divider variant="middle" />
      <MeetYourTutor />
      <Divider variant="middle" />
      <ApCsResources />

    </>
  );
};
