import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { TimelineCard } from '../../components/TimelineCard';
import { BioCard } from '../../components/BioCard';
import { EXPERIENCES_DATA, BIO_CARD_DATA } from '../../constants';
import './style.css';

export const MeetYourTutor = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="services-container" sx={{padding: "80px"}}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Poppins", Helvetica, sans-serif',
          fontWeight: 800,
          fontSize: isMobile ? '32px' : '48px',
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: theme.spacing(3),
        }}
        className="services-title"
      >
        Meet Your Tutor
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={4}>
          <BioCard info={BIO_CARD_DATA[0]} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '20px' : '32px',
              textAlign: 'left',
              color: 'white',
              marginBottom: theme.spacing(2),
            }}
          >
            Education
          </Typography>
          <VerticalTimeline layout={isMobile ? '1-column' : '1-column-left'}>
            {EXPERIENCES_DATA.map((education, index) => (
              <TimelineCard key={index} education={education} />
            ))}
          </VerticalTimeline>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '20px' : '32px',
              textAlign: 'left',
              marginBottom: theme.spacing(2),
              color: 'white',
            }}
          >
            Experiences
          </Typography>
          <VerticalTimeline layout={isMobile ? '1-column' : '1-column-left'}>
            {EXPERIENCES_DATA.map((experience, index) => (
              <TimelineCard key={index} education={experience} />
            ))}
          </VerticalTimeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeetYourTutor;
