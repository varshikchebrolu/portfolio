import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import homeImage from "../utils/home.png";

export default function Home() {
    return (
        <Box Container sx={{ backgroundColor: "black", color: "white" }}>
            <Grid sx={{ display: "grid", gridTemplateColumns: "1.5fr 1fr" }}>
                <Grid item>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            paddingLeft: "7vw",
                        }}
                    >
                        <Typography sx={{ fontSize: "3.5vw" }}> Hello!!</Typography>

                        <Typography sx={{ fontSize: "3vw" }}>
                            {" "}
                            I'M{" "}
                            <span style={{ fontStyle: "oblique", fontFamily: "sans-serif" }}>
                                {" "}
                                VARSHIK CHEBROLU
                            </span>
                        </Typography>

                        <Typography sx={{ fontSize: "2.5vw" }}>
                            An ordinary <span> Software Developer</span> trying to build extra
                            ordinary applications
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <img src={homeImage} alt="homeImage" width="500px" />
                </Grid>
            </Grid>
            <Box>
                <Typography> Want to connect with me </Typography>
                <MailIcon />
                <GitHubIcon />
                <LinkedInIcon />
                <InstagramIcon />
            </Box>
        </Box>
    );
}
