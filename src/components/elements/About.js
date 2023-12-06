import React from "react";
import { Box, Typography } from "@mui/material";
import profilePhoto from "../utils/varshik.jpg";
import bgImage from "../utils/whitebg.jpg";

export default function About() {
  return (
    <Box
      container
      sx={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          display: "flex",
          marginBottom: "2rem",
          fontWeight: "bold",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        id="about"
      >
        Sneak Peak{" "}
        <Typography
          sx={{
            color: "#5E21E0",
            fontWeight: "bold",
            fontSize: "inherit",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          About
        </Typography>{" "}
        Me
      </Typography>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: "2rem",
        }}
      >
        <img
          src={profilePhoto}
          alt="Picture with profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography
        variant="body"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
        Welcome to my portfolio! I'm excited to have you here.
      </Typography>
      <Typography variant="p" sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        A Software Developer and Computer Science Graduate with experience in
        developing modern web applications.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
        My primary focus is on creating exceptional user experiences by crafting
        elegant and efficient solutions to complex problems.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
        I am interested in learning about Cloud, containerization, and Web
        Development.
      </Typography>
    </Box>
  );
}
