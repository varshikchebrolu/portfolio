import { Box } from "../node_modules/@mui/material/index";
import "./App.css";
import Content from "./components/structure/Content";
import Header from "../src/components/structure/Header.js";
import Footer from "../src/components/structure//Footer.js";

function App() {
  return (
    <Box container sx={{
      background: 'linear-gradient(180deg, #34a0a4 5%, #168aad 13%, #1a759f 60%, #1e6091 80%,#184e77 100%)'
    }}
    >
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
