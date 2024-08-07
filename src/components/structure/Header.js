import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    setActiveSection(section);
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
    scrollToSection("/", section);
    setActiveSection(section);
  };

  const headerItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const checkActiveSection = () => {
      let active = false;
      const sections = headerItems.reduce((acc, item) => {
        acc.push(document.getElementById(item));
        return acc;
      }, []);
      const scrollHeight = window.innerHeight;
      sections.forEach(s => {
        if (s && s?.getBoundingClientRect().top >= 0 && s?.getBoundingClientRect().top <= scrollHeight &&!active) {
          setActiveSection(s.id);
          active = true;
        }
      });
    };
  
    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection();
  
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, [headerItems]);
  

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
            src={'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/logo.png'}
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
            sx={{ color: "white", cursor: "pointer", marginRight: "1rem" }}
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
            {headerItems.map((item) => {
              return (
                <MenuItem
                  sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  onClick={() => handleMenuItemClick(`${item}`)}
                >
                  {item}
                </MenuItem>
              );
            })}
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
            padding: "5px 10px",
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
              src={'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/logo.png'}
              style={{
                maxWidth: "3.5rem",
                height: "3.5rem",
                marginRight: "10px",
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
            {headerItems.map((item) => {
              return (
                <Button
                  sx={{
                    ...(activeSection === `${item}`
                      ? {
                          background:
                            "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : { color: "inherit" }),
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    marginRight: "10px",
                    borderBottom: activeSection === `${item}` ? "2px solid" : "",
                    borderImageSlice: 1,
                    borderImageSource:
                      activeSection === `${item}`
                        ? "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)"
                        : "inherit",
                  }}
                  onClick={() => scrollToSection("/", `${item}`)}
                >
                  {item}
                </Button>
              );
            })}

            <Button
              variant="contained"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "capitalize",
                background:
                  "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
                marginLeft: "10px",
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
                marginLeft: "10px",
              }}
              onClick={() => scrollToTop()}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
