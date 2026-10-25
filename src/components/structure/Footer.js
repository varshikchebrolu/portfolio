import React from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <Box
      container
      display="flex"
      flexDirection={'column'}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%)",
        color: "white",
        minHeight: "8vh",
        padding: "1rem",
      }}
    >
     <div style={{ width: "100%", textAlign: "center" }}>
        <Typography sx={{ fontSize: '1.5rem' }}>
          Developed by Varshik Chebrolu &copy; {new Date().getFullYear()}
          <Typography sx={{ fontSize: '1rem', ml: 0.5 }}>All Rights Reserved</Typography>
        </Typography>
      </div>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <a
            href="mailto:chebroluvarshik@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton aria-label="Mail">
              <MailIcon sx={{ fontSize: 28, color: "#7D3DE4" }}/>
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://github.com/varshikchebrolu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: 28, color: "white" }}/>
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/varshikchebrolu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 28, color: "#0A66C2" }}/>
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.instagram.com/varshik_chebrolu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton aria-label="Instagram">
              <InstagramIcon sx={{ fontSize: 28, color: "#E4405F" }}/>
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
