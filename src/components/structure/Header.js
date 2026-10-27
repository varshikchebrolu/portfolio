import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Fab, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokens, gradientText } from "../../theme";

const headerItems = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 820);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowTop(window.scrollY > 400);
      let active = false;
      headerItems.forEach((item) => {
        const el = document.getElementById(item);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top >= -80 && top <= window.innerHeight * 0.5 && !active) {
          setActiveSection(item);
          active = true;
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (section) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    setActiveSection(section);
  };

  const handleMenuItemClick = (section) => {
    setAnchorEl(null);
    scrollToSection(section);
  };

  const barBg = scrolled ? "rgba(10,10,15,0.8)" : "transparent";
  const barBorder = scrolled ? tokens.border : "transparent";

  const Logo = (
    <Box
      onClick={() => scrollToSection("home")}
      sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem" }}
    >
      <img
        alt="Varshik Chebrolu logo"
        src="https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/logo.png"
        style={{ height: "2.6rem" }}
      />
      <Box sx={{ fontWeight: 800, fontSize: "1.1rem", ...gradientText, display: { xs: "none", sm: "block" } }}>
        Varshik
      </Box>
    </Box>
  );

  const TopButton = (
    <Fade in={showTop}>
      <Fab
        size="small"
        aria-label="Back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1200,
          color: "#0a0a0f",
          background: tokens.gradient,
          "&:hover": { background: tokens.gradient, transform: "translateY(-3px)" },
          transition: "transform 0.25s ease",
        }}
      >
        <ArrowUpwardRoundedIcon />
      </Fab>
    </Fade>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: barBg,
          borderBottom: `1px solid ${barBorder}`,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", maxWidth: "1180px", width: "100%", mx: "auto", py: "0.5rem" }}>
          {Logo}

          {isMobile ? (
            <Box>
              <MenuIcon
                sx={{ color: tokens.text, cursor: "pointer" }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                  sx: { background: tokens.surface, border: `1px solid ${tokens.border}` },
                }}
              >
                {headerItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                    sx={{
                      fontWeight: 600,
                      textTransform: "capitalize",
                      color: activeSection === item ? tokens.accent : tokens.text,
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              {headerItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    color: activeSection === item ? tokens.accent : tokens.textMuted,
                    position: "relative",
                    "&:hover": { color: tokens.text, background: "transparent" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: activeSection === item ? "60%" : "0%",
                      height: "2px",
                      borderRadius: "2px",
                      background: tokens.gradient,
                      transition: "width 0.25s ease",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => navigate("/resume")}
                sx={{
                  ml: "0.75rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: "999px",
                  color: "#0a0a0f",
                  background: tokens.gradient,
                  "&:hover": { background: tokens.gradient, transform: "translateY(-2px)" },
                  transition: "transform 0.25s ease",
                }}
              >
                Resume
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {TopButton}
    </>
  );
}
