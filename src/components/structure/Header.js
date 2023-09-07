import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/logo.png";
import { Link } from "react-scroll";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const scrollButtonStyles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    cursor: "pointer",
    backgroundColor: "#7D3DE4",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "50%",
    fontSize: "16px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (path, section) => {
    navigate(path); // Navigate to the root path '/'
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 150); // Delay to allow time for routing to '/'
  };

  return (
    <Box
      sx={{
        color: "white",
        zIndex: 1,
        position: "sticky",
        top: 0,
      }}
    >
      <AppBar>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: "black",
            maxHeight: "1.5rem",
          }}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Link to="home" smooth={true} duration={1000}>
              <img
                alt="Main_logo"
                src={homeLogo}
                style={{ maxWidth: "3.5rem", height: "3.5rem" }}
                onClick={() => scrollToSection("/", "home")}
              />
            </Link>
          </Box>
          <Box color="white">
            <Link to="home" smooth={true} duration={1000} offset={-100}>
              
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={() => scrollToSection("/", "home")}
              >
                 Home
              </Button>
            </Link>

            <Link to="about" smooth={true} duration={1000} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={() => scrollToSection("/", "about")}
              >
                About
              </Button>
            </Link>
            <Link to="skills" smooth={true} duration={1000} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={() => scrollToSection("/", "skills")}
              >
                Skills
              </Button>
            </Link>
            <Link to="experience" smooth={true} duration={1000} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={() => scrollToSection("/", "experience")}
              >
                Experience
              </Button>
            </Link>
            <Link to="projects" smooth={true} duration={1000} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={() => scrollToSection("/", "projects")}
              >
                Projects
              </Button>
            </Link>

            <Link to="contact" smooth={true} duration={1000} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Contact
              </Button>
            </Link>
            <Link to="resume" smooth={true} duration={1000} offset={-100}>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  background:
                    "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
                }}
                onClick={() => navigate("/resume", "resume")}
              >
                Resume
              </Button>
            </Link>
            <Link
              to="top"
              smooth={true}
              duration={1000}
              style={scrollButtonStyles}
              onClick={scrollToTop}
            >
              <ArrowCircleUpIcon />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
