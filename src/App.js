import React, {useEffect} from 'react'
import { Box } from "../node_modules/@mui/material/index";
import "./App.css";
import Content from "./components/structure/Content";
import Header from "../src/components/structure/Header.js";
import Footer from "../src/components/structure//Footer.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from '../src/components/elements/Resume';
import Contact from "./components/elements/Contact";
import { inject } from '@vercel/analytics';

function App() {
  inject();

  return (
    <Box
      container
      sx={{
        background: 'black',
        overflow: 'hidden', 
        minHeight: '100vh',
        scrollBehavior:'auto'
      }}
    >
      <Router>
        <Header className="header" /> 
        <Routes>
          <Route path='/' element={<Content className="content" />} /> 
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Contact className="footer" /> 
      <Footer className="footer" />
      </Box>
  );
}


export default App;
