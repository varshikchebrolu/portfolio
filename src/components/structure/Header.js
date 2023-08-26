import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/logo.png";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        color: "rgb(242, 247, 239)",
        zIndex: 1,
        position: "sticky",
        top: 0,
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background:
              "linear-gradient(90deg, #166088 18.97%, #4F6D7A 60%, #C0D6DF 90%, #DBE9EE 127.31%)",
              maxHeight:'1rem'
          }}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Link to="home" smooth={true} duration={500} offset={-100}>
              <Link1
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  alt="Main_logo"
                  src={homeLogo}
                  style={{ maxWidth: "3.5rem", height: "3.5rem" }}
                />
              </Link1>
            </Link>
          </Box>
          <Box color="black">
            <Link to="home" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                <Link1
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link1>
              </Button>
            </Link>

            <Link to="about" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                <Link1
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About
                </Link1>
              </Button>
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                <Link1
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Skills
                </Link1>
              </Button>
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                <Link1
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Experience
                </Link1>
              </Button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                <Link1
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Projects
                </Link1>
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
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
            <Link1
              to="/resume"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                color="primary"
                variant="contained"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Resume
              </Button>
            </Link1>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
