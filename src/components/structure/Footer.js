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
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "8vh",
        padding: "1rem",
      }}
    >
      <Typography variant="body1" width={'60%'}>
        Developed by Varshik Chebrolu &copy; All Rights Reserved
      </Typography>

      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <a
            href="mailto:chebroluvarshik@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton aria-label="Mail">
              <MailIcon sx={{ color: "white" }}/>
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
              <GitHubIcon sx={{ color: "white" }}/>
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
              <LinkedInIcon sx={{ color: "white" }}/>
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
              <InstagramIcon sx={{ color: "white" }}/>
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
