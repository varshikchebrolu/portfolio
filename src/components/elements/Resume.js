import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Document, Page } from "react-pdf";
import resume from "../utils/resume.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import bgImage from '../utils/bg.png'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const handleDownload = () => {
    const filePath = "/resume.pdf";
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + filePath;
    link.download = "VarshikChebrolu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [docWidth, setDocWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => {
    setDocWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  console.log(docWidth)

  return (
    <Box
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vw",
        flexDirection: "column",
        alignItems: "center",
        gap: "3vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize:'contain'
      }}
      id='resume'
    >
      <Box>
        <Button
          color="success"
          variant="contained"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </Box>
      <Box
        sx={{
          marginBottom: "3vh",
        }}
      >
        <Document file={resume}>
          <Page pageNumber={1} renderTextLayer={false} scale={0.87} width={docWidth} />
        </Document>
      </Box>
    </Box>
  );
}
