import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import homeImage from "../utils/home.png";
import "../Styles/Home.css";
import TextTransition, { presets } from "react-text-transition";


export default function Home() {
  const Roles = ["Software Developer", "Front-End Developer", "Collobarator"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box
      container
      sx={{
        backgroundColor: "#4A6FA5",
        color: "white",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        paddingBottom: "2rem",
      }}
      id='home'
    >
      <Grid sx={{ display: "grid", gridTemplateColumns: "1.5fr 1fr" }}>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              paddingLeft: "7vw",
            }}
          >
            <Typography sx={{ fontSize: "3.5rem" }}> Hello!!</Typography>

            <Typography sx={{ fontSize: "3rem" }}>
              {" "}
              I'M{" "}
              <span style={{ fontStyle: "oblique", fontFamily: "sans-serif" }}>
                {" "}
                VARSHIK CHEBROLU
              </span>
            </Typography>

            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              justifyContent={"flex-start"}
            >
              <Typography sx={{ fontSize: "2rem" }}>An ordinary</Typography>
              <TextTransition
                springConfig={presets.wobbly}
                style={{
                  fontSize: "2rem",
                  marginLeft: "1vw",
                  marginTop: "0.5vw",
                  color: "orangered",
                }}
              >
                {Roles[index % Roles.length]}
              </TextTransition>
              <Typography sx={{ fontSize: "2rem" }}>
                trying to build extra ordinary applications
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "2.5rem" }}></Typography>
          </Box>
        </Grid>
        <Grid item>
          <img src={homeImage} alt="homeImage" width="750vw" />
        </Grid>
      </Grid>
      <Box
        sx={{ marginTop: "3%" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography sx={{ fontSize: "3rem", paddingBottom: "2vh" }}>
          {" "}
          Connect with me{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "30%",
          }}
        >
          <MailIcon
            style={{ fontSize: "2.5rem", width: "20%", margin: "0 auto" }}
          />
          <GitHubIcon
            style={{ fontSize: "2.5rem", width: "20%", margin: "0 auto" }}
          />
          <LinkedInIcon
            style={{ fontSize: "2.5rem", width: "20%", margin: "0 auto" }}
          />
          <InstagramIcon
            style={{ fontSize: "2.5rem", width: "20%", margin: "0 auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
