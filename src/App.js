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
  inject()
  return (
    <Box container sx={{
      background: 'black',
      overflow:'auto'
    }}
    >
      <Router>
      <Header />
      
      <Routes>
        <Route path='/' Component={Content}/>
        <Route path="/resume" Component={Resume} />
      </Routes>
    </Router>
      <Contact/>
      <Footer />
    </Box>
  );
}

export default App;
