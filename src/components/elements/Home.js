import React, { useEffect } from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import homeImage from "../utils/home2.png";
import bgImage from "../utils/bg.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import anime from "animejs";

export default function Home() {
  const navigate = useNavigate();
  const Roles = ["Software Engineer", "Front-End Developer", "Collaborator"];
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const targetElement = document.querySelector(".text-transition");

    const animateText = () => {
      anime({
        targets: targetElement,
        translateY: [0, -20],
        opacity: [1, 0],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % Roles.length);
          targetElement.innerText = Roles[index];
          anime({
            targets: targetElement,
            translateY: [20, 0],
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
      style={{
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        minHeight: "90vh",
        marginTop: "3rem",
        gap: "3rem",
      }}
      id="home"
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          marginBottom: "2rem",
          width: "max-content",
          marginLeft:'1rem'
        }}
      >
        <Typography variant="h3">Hello!!</Typography>
        <Typography variant="h3" marginTop={"1rem"}>
          I'm{" "}
          <span
            style={{
              fontStyle: "oblique",
              fontFamily: "sans-serif",
            }}
          >
            Varshik Chebrolu,
          </span>
        </Typography>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Typography variant="h6">Passionate</Typography>
          <div
            className="text-transition"
            style={{
              fontSize: "1.5rem",
              color: "#39e1ec",
              background:
                "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {Roles[index]}
          </div>
        </div>
        <Typography variant="h6">
          crafting exceptional applications beyond the ordinary.
        </Typography>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
        >
          <Button
            variant="contained"
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              background:
                "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
            }}
            onClick={() => navigate("/resume")}
          >
            Resume
          </Button>
          <Link to="contact" smooth={true} duration={1000}>
            <Button
              variant="outlined"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                ":hover": {
                  backgroundColor: "#5E21E0",
                  borderColor: "#5E21E0",
                },
                color: "white",
                borderColor: "#5E21E0",
              }}
            >
              Hire Me
            </Button>
          </Link>
        </Grid>
        <Box
          style={{
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
            target="_blank"
            fgColor="black"
            bgColor="grey"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/varshikchebrolu/"
            bgColor="#0A66C2"
            fgColor="#FFFFFF"
            target="_blank"
          />
        </Box>
      </Box>

      <Box
        style={{
          marginBottom: "1rem",
        }}
      >
        <img src={homeImage} alt="homeImage" width="600rem" className="home-image"/>
      </Box>
    </Box>
  );
}
