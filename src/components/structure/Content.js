import { Box, Container } from "@mui/material";
import React from "react";
import Home from "../elements/Home";
import About from "../elements/About";
import Skills from "../elements/Skills";

export default function Content() {
  return (
    <Box
      container
      sx={{
        minHeight: "150vw",
      }}
    >
      <Home />
      <About />
      <Skills />
    </Box>
  );
}
