import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Document, Page } from "react-pdf";
import resume from "../utils/resume.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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

  return (
    <Box
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "3vh",
      }}
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
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </Box>
    </Box>
  );
}
