import { Box } from "../node_modules/@mui/material/index";
import "./App.css";
import Content from "./components/structure/Content";
import Header from "../src/components/structure/Header.js";
import Footer from "../src/components/structure//Footer.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from '../src/components/elements/Resume';


function App() {
  return (
    <Box container sx={{
      background: 'linear-gradient(0deg, #34a0a4 5%, #168aad 13%, #1a759f 60%)'
    }}
    >
      <Router>
      <Header />
      
      <Routes>
        <Route path='/' Component={Content}/>
        <Route path="/resume" Component={Resume} />
      </Routes>
    </Router>
      <Footer />
    </Box>
  );
}

export default App;
