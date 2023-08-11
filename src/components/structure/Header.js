import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/main_logo.jpeg";
import { Link } from "react-scroll";


export default function Header() {
  return (
    <Box
      sx={{
        color: "rgb(242, 247, 239)",
        zIndex: 1,
        position: "sticky",
        top: 0,
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: 'linear-gradient(90deg, #166088 18.97%, #4F6D7A 60%, #C0D6DF 90%, #DBE9EE 127.31%)',
          }}
        >
          <Box sx={{cursor:'pointer'}}>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            {/* <img
              alt="Main_logo"
              src={}
              style={{ maxWidth: "20%", height: "50%" }}
            /> */}
            </Link>
          </Box>
          <Box color='black'>
            <Link to="home" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
              >
                Home
              </Button>
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
              >
                About
              </Button>
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
              >
                Skills
              </Button>
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
              >
                Experience
              </Button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
              >
                Projects
              </Button>
            </Link>
            <Button
              color="primary"
              variant="contained"
              sx={{ fontSize: "1rem", fontWeight: "bold",textTransform: "capitalize" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
