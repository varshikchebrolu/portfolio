import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import homeImage from "../utils/home.png";
import "../Styles/Home.css";
import anime from "animejs/lib/anime.es.js";
import { SocialIcon } from "react-social-icons";

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
            easing: "easeInOutQuad",
          });
        },
      });
    };

    const intervalId = setInterval(animateText, 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box
      container
      sx={{
        padding: "2rem",
        display: { xs: "inline-flex", md: "flex" },
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginLeft: "3rem",
        marginTop:'3rem'
      }}
      id="home"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color:'black'
        }}
      >
        <Typography sx={{ fontSize: "3.5rem" }}> Hello!!</Typography>

        <Typography sx={{ fontSize: "3rem" }}>
          {" "}
          I'm{" "}
          <span
            style={{
              fontStyle: "oblique",
              fontFamily: "sans-serif",
              background:' linear-gradient(90deg, hsla(55, 100%, 50%, 1) 0%, hsla(42, 100%, 47%, 1) 50%, hsla(23, 96%, 49%, 1) 100%)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent'
            }}
          >
            {" "}
            Varshik Chebrolu,
          </span>
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          width={"42rem"}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>Passionate</Typography>
          <div
            className="text-transition"
            style={{
              fontSize: "1.5rem",
              marginLeft: "1vh",
              marginTop: "0.5vh",
              marginX: "1vh",
                  color: "#39e1ec",
              transform: "translateY(0)",
              opacity: 1,
              
            }}
          >
            {Roles[index]}
          </div>
          <Typography sx={{ fontSize: "1.5rem", marginTop: "0.5vh" }}>
            crafting exceptional applications beyond the ordinary.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <a href="mailto:chebroluvarshik@gmail.com">
            <SocialIcon network="email" bgColor="white" fgColor="red" />
          </a>

          <SocialIcon
            url="https://github.com/varshikchebrolu"
            bgColor="black"
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/varshikchebrolu/"
            bgColor="#0A66C2"
            fgColor="#FFFFFF"
            target="_blank"
          />
        </Box>
      </Box>

      <Box>
        <img src={homeImage} alt="homeImage" width="500rem" />
      </Box>
    </Box>
  );
}
