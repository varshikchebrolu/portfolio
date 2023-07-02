import { Box, Container } from "@mui/material";
import React from "react";
import Home from "../elements/Home";
import About from "../elements/About";

export default function Content() {
    return (
        <Box
            container
            sx={{
                minHeight: "100vw",
            }}
        >
            <Home />
            <About/>
        </Box>
    );
}
