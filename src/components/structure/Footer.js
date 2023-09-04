import React from "react";
import { Typography, Box } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <Box
      container
      display={{xs:'inline-flex',md:'flex'}}
      justifyContent="space-around"
      spacing={3}
      sx={{ bottom: "0%", backgroundColor:'black'}}
      alignItems={"center"}
      color="rgb(242, 247, 239)"
      minHeight={"10vh"}
    >
      <Box>
        <Typography> Developed by Varshik Chebrolu</Typography>
      </Box>
      <Box display={"flex"}>
        <CopyrightIcon />
        <Typography> Rights Reserved</Typography>
      </Box>
      <Box display={"flex"}>
        <a
          href="mailto:chebroluvarshik@gmail.com"
          style={{ marginRight: "25%" }}
        >
          <MailIcon sx={{ color: "white" }} />
        </a>
        <a
          href="https://github.com/varshikchebrolu"
          target="_blank"
          style={{ marginRight: "25%" }}
          rel="noreferrer"
        >
          <GitHubIcon sx={{ color: "white" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/varshikchebrolu/"
          target="_blank"
          style={{ marginRight: "25%" }}
          rel="noreferrer"
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </a>

        <a
          href="https://www.instagram.com/varshik_chebrolu/"
          target="_blank"
          style={{ marginRight: "25%" }}
          rel="noreferrer"
        >
          <InstagramIcon sx={{ color: "white" }} />
        </a>
      </Box>
    </Box>
  );
}
