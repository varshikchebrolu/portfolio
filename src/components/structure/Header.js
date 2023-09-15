import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/logo.png";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {Menu,MenuItem} from '@mui/material'

export default function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (path, section) => {
    navigate(path); 
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 150); 
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (section) => {
    handleClose();
    scrollToSection('/',section)
  };

  if (isMobile) {
    return (
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          alt="Main_logo"
          src={homeLogo}
          style={{
            maxWidth: "3.5rem",
            height: "3.5rem",
            paddingLeft: "1rem",
          }}
          onClick={() => scrollToSection("/", "home")}
        />
      </Box>
      <Box>
      <MenuIcon
        sx={{ color: "white", cursor: "pointer", marginRight:'1rem' }}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
       
      >
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("home")}>Home</MenuItem>
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("about")}>About</MenuItem>
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("skills")}>Skills</MenuItem>
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("experience")}>Experience</MenuItem>
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("projects")}>Projects</MenuItem>
        <MenuItem sx={{fontWeight:'bold'}} onClick={() => handleMenuItemClick("contact")}>Contact</MenuItem>
      </Menu>
      </Box>
    </Box>
    );
  }

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
            padding: "5px 10px", // Increase padding for better mobile touch interaction
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              alt="Main_logo"
              src={homeLogo}
              style={{
                maxWidth: "3.5rem",
                height: "3.5rem",
                marginRight: "10px", // Add spacing between logo and text
              }}
              onClick={() => scrollToSection("/", "home")}
            />
          </Box>
          <Box
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "home")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "about")}
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "skills")}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "experience")}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "projects")}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/", "contact")}
            >
              Contact
            </Button>

            <Button
              variant="contained"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                background:
                  "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
                marginLeft: "10px", // Add spacing between buttons
              }}
              onClick={() => scrollToSection("/resume", "resume")}
            >
              Resume
            </Button>
            <ArrowCircleUpIcon
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                cursor: "pointer",
                backgroundColor: "#7D3DE4",
                padding: "10px 15px",
                borderRadius: "50%",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
                fontSize: "2rem",
                color: "white",
                marginLeft: "10px", // Add spacing between button and icon
              }}
              onClick={() => scrollToTop()}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
