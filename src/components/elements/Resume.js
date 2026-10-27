import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { tokens, gradientText } from "../../theme";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const RESUME_URL =
  "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik_chebrolu_resume.pdf";

export default function Resume() {
  const [docWidth, setDocWidth] = useState(
    typeof window !== "undefined" ? Math.min(window.innerWidth - 48, 780) : 780
  );

  useEffect(() => {
    const updateWidth = () => setDocWidth(Math.min(window.innerWidth - 48, 780));
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch(RESUME_URL);
      if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Varshik_Chebrolu_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      window.open(RESUME_URL, "_blank");
    }
  };

  return (
    <Box
      id="resume"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        pt: { xs: "7rem", md: "8rem" },
        pb: "4rem",
        px: "1.5rem",
        background: `radial-gradient(900px 500px at 50% 0%, rgba(125,91,255,0.12), transparent 60%), ${tokens.bg}`,
      }}
    >
      <Typography component="h1" sx={{ fontSize: { xs: "2.2rem", md: "2.75rem" }, fontWeight: 800, ...gradientText }}>
        Resume
      </Typography>
      <Typography sx={{ color: tokens.textMuted, mb: "0.5rem" }}>
        Download a copy or preview it below.
      </Typography>
      <Button
        variant="contained"
        startIcon={<DownloadRoundedIcon />}
        onClick={handleDownload}
        sx={{
          px: "2rem",
          py: "0.75rem",
          fontSize: "1rem",
          borderRadius: "999px",
          color: "#0a0a0f",
          background: tokens.gradient,
          boxShadow: "0 8px 24px rgba(125,91,255,0.35)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 30px rgba(125,91,255,0.5)",
          },
        }}
      >
        Download PDF
      </Button>

      <Box
        sx={{
          mt: "1.5rem",
          background: "#ffffff",
          padding: { xs: "0.5rem", md: "1rem" },
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        <Document
          file={RESUME_URL}
          loading={<Box sx={{ p: 4, color: "#333" }}>Loading resume…</Box>}
          error={<Box sx={{ p: 4, color: "#333" }}>Could not load the preview. Use the download button above.</Box>}
        >
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={docWidth} />
        </Document>
      </Box>
    </Box>
  );
}
