import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";



export default function Footer() {
  return (
    <Box
      container
      display="flex"
      justifyContent="space-around"
      spacing={3}
      backgroundColor="rgb(3, 23, 64)"
      width="100%"
      height="10%"
      sx={{ position: "fixed", bottom: "0%", left: "0%" }}
      alignItems={'center'}
      flexGrow={1}
      color="rgb(242, 247, 239)"
    >
      <Box>
        <Typography> Developed by Varshik Chebrolu</Typography>
      </Box>
      <Box display={"flex"}>
        <CopyrightIcon />
        <Typography> Rights Reserved</Typography>
      </Box>
      <Box display={"flex"}>
        <GitHubIcon sx={{marginRight:'25%'}}/>
        <LinkedInIcon sx={{marginRight:'25%'}}/>
        <InstagramIcon sx={{marginRight:'25%'}}/>
      </Box>
    </Box>
  );
}

