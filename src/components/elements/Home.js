import React,{useEffect} from "react";
import { Box, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import homeImage from "../utils/home.png";
import "../Styles/Home.css";
import TextTransition, { presets } from "react-text-transition";
import anime from "animejs/lib/anime.es.js";


export default function Home() {
  const Roles = ["Software Developer", "Front-End Developer", "Collobarator"];
  const [index, setIndex] = React.useState(0);

    useEffect(() => {
      const targetElement = document.querySelector(".text-transition");
      
      const animateText = () => {
        anime({
          targets: targetElement,
          translateY: [0, -20], // Move current text upwards
          opacity: [1, 0],
          duration: 500,
          easing: "easeInOutQuad",
          complete: () => {
            setIndex((prevIndex) => (prevIndex + 1) % Roles.length);
            targetElement.innerText = Roles[index];
            anime({
              targets: targetElement,
              translateY: [20, 0], // Move new text downwards
              opacity: [0, 1],
              duration: 500,
              easing: "easeInOutQuad"
            });
          }
        });
      };
      
    const intervalId = setInterval(
      animateText, 3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box
      container
      sx={{
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
              color:'black'
            }}
          >
            <Typography sx={{ fontSize: "3.5rem" }}> Hello!!</Typography>

            <Typography sx={{ fontSize: "3rem" }}>
              {" "}
              I'm{" "}
              <span style={{ fontStyle: "oblique", fontFamily: "sans-serif" }}>
                {" "}
                Varshik Chebrolu,
              </span>
            </Typography>

            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              justifyContent={"flex-start"}
            >
              <Typography sx={{ fontSize: "2rem" }}>An ordinary</Typography>
              <div className="text-transition" style={{
      fontSize: "2rem",
      marginLeft: "1vh",
      marginTop: "0.8vh",
      marginRight: '1vh',
      color: "#39e1ec",
      transform: "translateY(0)",
      opacity: 1
    }}>
      {Roles[index]}
    </div>
              <Typography sx={{ fontSize: "2rem", marginTop:'0.5vh' }}>
                trying to build extra ordinary applications
              </Typography>
            </Box>

           
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
