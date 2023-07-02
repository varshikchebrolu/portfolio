import { Box, Container } from "@mui/material";
import React from "react";
import Home from "../elements/Home";

export default function Content() {
    return (
        <Box
            container
            sx={{
                minHeight: "100vh",
            }}
        >
            <Home />
        </Box>
    );
}
