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
            display="flex"
            justifyContent="space-around"
            spacing={3}
            backgroundColor="rgb(3, 23, 64)"
            sx={{ bottom: "0%" }}
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
                <MailIcon sx={{ marginRight: "25%" }} />
                <GitHubIcon sx={{ marginRight: "25%" }} />
                <LinkedInIcon sx={{ marginRight: "25%" }} />
                <InstagramIcon sx={{ marginRight: "25%" }} />
            </Box>
        </Box>
    );
}
