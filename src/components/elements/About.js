import React from "react";
import { Box, Typography } from "@mui/material";
import profilePhoto from "../utils/varshik.jpg";

export default function About() {
    return (
        <Box
            container
            sx={{
                backgroundColor: "grey",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                
            }}
        >
            <Typography
                sx={{ marginTop: "5vh", fontSize: "2rem", fontFamily: "monospace" }}
            >
                {" "}
                A Tiny Bit About Myself
            </Typography>
            <Box sx={{ width: "10vw", borderRadius: "50%", marginTop: "5vh" }}>
                <img
                    src={profilePhoto}
                    alt="Picture with profile photo"
                    style={{ width: "100%", borderRadius: "inherit" }}
                />
            </Box>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.25rem", marginTop:'2rem' }}>
                Welcome to my portfolio! I'm excited to have you here.
            </Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.25rem" }}>
                A Software Developer and Computer Science Graduate with experience in developing modern web
                applications.
            </Typography>

            <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.25rem" }}>
                {" "}
                My primary focus is on creating exceptional user experiences by crafting
                elegant and efficient solutions to complex problems.
            </Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.25rem" }}>
                I am interested in Learning about Cloud, containerization and Web Development
            </Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "1.25rem" }}> Apart from work I love to</Typography>
            <Box display={'flex'} >
                <Typography sx={{marginRight:'1rem',fontFamily: "sans-serif", fontSize: "1.25rem" }}>Watch Anime</Typography>
                <Typography sx={{marginRight:'1rem',fontFamily: "sans-serif", fontSize: "1.25rem" }}> Play Volleyball</Typography>
                <Typography sx={{fontFamily: "sans-serif", fontSize: "1.25rem" }}> So on..</Typography>
            </Box>
            <div style={{marginBottom:'2vw'}}></div>
        </Box>
    );
}
