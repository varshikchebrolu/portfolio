import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const handleDownload = async () => {
    const filePath = "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik_chebrolu_resume.pdf";
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Varshik_Chebrolu_Resume.pdf";
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
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

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
        backgroundImage:`url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/bg.png)`,
        backgroundSize:'contain'
      }}
      id='resume'
    >
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #FFD700 0%, #5E21E0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Resume
        </Typography>
        <Button
          color="success"
          variant="contained"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "capitalize",
            background: "linear-gradient(90deg, #FFD700 0%, #5E21E0 100%)",
            padding: "1rem 2rem",
            borderRadius: "25px",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0px 5px 15px rgba(94, 33, 224, 0.4)",
            },
          }}
          onClick={handleDownload}
        >
          Download Resume PDF
        </Button>
      </Box>
      <Box
        sx={{
          marginBottom: "3vh",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: "2rem",
            color: "#555",
            fontStyle: "italic"
          }}
        >
          Click the button above to download your resume
        </Typography>
        <Document file={'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik_chebrolu_resume.pdf'}>
          <Page pageNumber={1} renderTextLayer={false} scale={0.87} width={docWidth} />
        </Document>
      </Box>
    </Box>
  );
}
