import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import homeLogo from "../utils/main_logo.jpeg";

export default function Header() {
  return (
    <Box
      sx={{
        color: "rgb(242, 247, 239)",
        zIndex: 1,
        position: "sticky",
        top: 0,
        backgroundColor: "#333333",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "black",
            padding: "1rem",
          }}
        >
          <Box>
            <img
              alt="Main_logo"
              src={homeLogo}
              style={{ maxWidth: "20%", height: "50%" }}
            />
          </Box>
          <Box>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
