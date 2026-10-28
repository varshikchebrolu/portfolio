import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { tokens } from "../../theme";

const highlights = [
  "Payment systems",
  "Enterprise AEM",
  "RAG architectures",
  "LangGraph agents",
  "MCP servers",
];

export default function About() {
  return (
    <Section id="about-section">
      <SectionHeading kicker="Get to know me" title="About Me" id="about" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: "2.5rem", md: "4rem" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Portrait */}
        <Box
          sx={{
            position: "relative",
            flex: "0 0 auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "200px", md: "260px" },
              height: { xs: "200px", md: "260px" },
              borderRadius: "28px",
              padding: "4px",
              background: tokens.gradient,
              boxShadow: `0 20px 50px rgba(${tokens.glow},0.3)`,
            }}
          >
            <img
              src="https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/varshik.jpg"
              alt="Varshik Chebrolu"
              onError={(e) => {
                e.target.src =
                  "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/project-placeholder.png";
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
                display: "block",
              }}
            />
          </Box>
        </Box>

        {/* Text */}
        <Box sx={{ flex: "1 1 420px", maxWidth: "620px" }}>
          <Typography
            sx={{
              color: tokens.text,
              fontSize: { xs: "1.15rem", md: "1.3rem" },
              fontWeight: 600,
              lineHeight: 1.6,
              mb: "1.25rem",
            }}
          >
            Software Engineer II with 6 years of experience building
            high-availability web applications, secure payment gateways, and
            enterprise AEM platforms.
          </Typography>
          <Typography
            sx={{
              color: tokens.textMuted,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              mb: "1.25rem",
            }}
          >
            I care about understanding a problem deeply before solving it, and about
            shipping software that holds up in production. Skilled in React,
            TypeScript, Redux, Java (Spring Boot), and Python.
          </Typography>
          <Typography
            sx={{
              color: tokens.textMuted,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              mb: "2rem",
            }}
          >
            Currently expanding into RAG architectures, LangGraph agent workflows,
            and MCP server integrations — bridging solid product engineering with
            applied AI.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {highlights.map((h) => (
              <Chip
                key={h}
                label={h}
                sx={{
                  color: tokens.text,
                  fontWeight: 600,
                  border: `1px solid ${tokens.border}`,
                  background: tokens.surface,
                  "&:hover": { borderColor: tokens.primary },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
