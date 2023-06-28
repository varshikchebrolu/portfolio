import { Box } from "../node_modules/@mui/material/index";
import "./App.css";
import Content from "./components/structure/Content";
import Header from "../src/components/structure/Header.js";
import Footer from "../src/components/structure//Footer.js";

function App() {
  return (
    <Box container>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
