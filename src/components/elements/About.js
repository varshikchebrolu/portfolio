import React from "react";
import { Box, Typography } from "@mui/material";

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
        backgroundImage: `url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/whitebg.jpg)`,
        backgroundSize: "cover",
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
          justifyContent: "center",
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
          src={
            "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik.jpg"
          }
          alt="Picture with profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.3rem", marginBottom: "1rem", fontWeight: 400 }}
        >
          Software Engineer with 3+ years of full-stack web development experience.
          Known for tackling challenging situations and understanding problems before solving them.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 400 }}
        >
          Proficient in React, JavaScript, Agile planning, and collaborative team environments,
          always focused on delivering user-centric solutions.
        </Typography>
      </Box>
    </Box>
  );
}
