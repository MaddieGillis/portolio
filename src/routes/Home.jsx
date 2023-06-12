import React from "react";
import {
  ArrowRightAltRounded,
  BugReportRounded,
  Computer,
  PeopleAltRounded,
  WaterfallChartRounded,
  Savings,
  Folder,
  Contacts,
  Article,
} from "@mui/icons-material";
import {
  Grid,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  faYoutube,
  faTwitch,
  faTwitter,
  faDiscord,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconCard } from "../components/IconCard";
import { Link } from "react-router-dom";

import VideoCard from "../components/VideoCard";

const Home = () => {
  const gradientText = {
    root: {
      background: "-webkit-linear-gradient(45deg, #d32f2f 30%, #9f1a1a 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  const textStyles = {
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    redLink: {
      color: "#d32f2f",
      textDecoration: "none",
    },
    footerHeading: {
      color: "#fff",
      fontWeight: "bold",
      marginBottom: 10,
    },
    footerText: {
      color: "#f7f7f7",
    },
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: { sm: 8, md: 15 }, py: 10 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={7}>
            <Typography variant="h2" component="h1" fontWeight="bold">
            Passionate Junior Web Developer
              
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
            As a new full stack web developer, I'm looking to work for a company where I can grow my skills. I recieved my cetificate from the EdX fullstack bootcamp at the end of April. As a result I'm proficient in:
           
            <ul> 
              <li>
                JavaScript
              </li>
              <li>
                jQuery
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Express.js
              </li>
              <li>
                React.js
              </li>
              <li>
                Node.js
              </li>
              <li>
                Database Intergrations
              </li>
              <li>
                MongoDB
              </li>
              <li>
                MySQL
              </li>
            </ul> 
            </Typography>
            <Stack direction="row" gap={2}>
              <Button
                color="error"
                variant="outlined"
                endIcon={<ArrowRightAltRounded />}
                sx={{ mt: 3 }}
                size="large"
                disableElevation
              >
                <Link to="/portfolio" style={textStyles.redLink}>
                  Portfolio
                </Link>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xxl" sx={{ bgcolor: "#f7f7f7", py: 10 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Check out my work
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} sx={{ height: "-webkit-fill-available" }}>
              <IconCard
                icon={<Folder color="success" />}
                text="Check out my work"
                heading="Portfolio"
                url="/portfolio"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconCard
                icon={<Contacts color="success" />}
                text="Ways to get in contact with me"
                heading="Contact"
                url="/contact"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconCard
                icon={<Article color="success" />}
                text="Interested in hiring? Come checkout my resume!"
                heading="Resume"
                url="/resume"
              />
            </Grid>

          </Grid>
        </Container>
      </Container>
         </>
  );
};

export default Home;
