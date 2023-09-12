import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/logo.png";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    // Check the screen width and update the isMobile state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  if (isMobile) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
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
              paddingLeft:'1rem'
            }}
            onClick={() => scrollToSection("/", "home")}
          />
        </Box>
        <MenuIcon
          sx={{ color: "white", cursor: "pointer", marginLeft:'70vw'}}
          onClick={() => toggleDrawer()}
        />
        <Box>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                background: "white",
                width: "25vw",
                height: "20rem",
                borderRadius:'1rem',
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color:'#5E21E0'
              },
             
             
            }}
          >
            <List>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "home");
                }}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "about");
                }}
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "skills");
                }}
              >
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "experience");
                }}
              >
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "projects");
                }}
              >
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem
                Button
                onClick={() => {
                  toggleDrawer();
                  scrollToSection("/", "contact");
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
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
