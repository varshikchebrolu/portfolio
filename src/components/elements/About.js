import React from "react";
import { Box, Typography } from "@mui/material";
import profilePhoto from "../utils/varshik.jpg";

export default function About() {
  return (
    <Box
      container
      sx={{
        color: "#BECCD5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
      id='about'
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "2.5rem",
          fontFamily: "monospace",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        A Tiny Bit About Myself
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
        variant="body1"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
        Welcome to my portfolio! I'm excited to have you here.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
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
      <Typography
        variant="body1"
        sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
      >
        Apart from work, I love to:
      </Typography>
      <Box display="flex" alignItems="center" marginBottom="2rem">
        <Typography
          variant="body1"
          sx={{ marginRight: "1rem", fontSize: "1.5rem" }}
        >
          Watch Anime
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginRight: "1rem", fontSize: "1.5rem" }}
        >
          Play Volleyball
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          and more...
        </Typography>
      </Box>
    </Box>
  );
}
