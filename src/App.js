import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import theme, { tokens } from "./theme";
import Content from "./components/structure/Content";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/elements/Resume";
import Contact from "./components/elements/Contact";
import { inject } from "@vercel/analytics";

function App() {
  inject();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: tokens.bg,
          overflowX: "hidden",
          minHeight: "100vh",
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Content />
                  <Contact />
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
