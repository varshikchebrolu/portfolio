import { Box, Typography, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import React from "react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { tokens } from "../../theme";

const ProjectsDetails = [
  {
    tag: "AI / RAG",
    name: "Multi-Tenant Namespaced RAG System",
    description:
      "A session-based RAG pipeline using parent/child chunking, hybrid search, and Reciprocal Rank Fusion for high-precision retrieval across isolated knowledge bases. Includes an MCP server that dynamically routes queries across session contexts, holding 80% session relevance with strict tenant isolation.",
    tech: ["Python", "FastAPI", "Qdrant", "SQLAlchemy", "Cohere"],
    githubLink: "https://github.com/varshikchebrolu",
    image: "/projects/rag-system.svg",
  },
  {
    tag: "AI / Agents",
    name: "LangGraph AI Resume Optimization Suite",
    description:
      "An iterative LangGraph multi-agent pipeline for automated job-description matching, scoring, and targeted resume rewriting, backed by PostgreSQL. A low-latency RAG layer with sentence-aware chunking achieves 0.5s embedding builds and 185ms query retrieval via grounded generation.",
    tech: ["LangGraph", "Python", "Pydantic AI", "Gemini", "Next.js"],
    githubLink: "https://github.com/varshikchebrolu",
    image: "/projects/langgraph-suite.svg",
  },
  {
    tag: "Internal Tooling",
    name: "AI Setup Assistant",
    description:
      "An internal developer tool built at DISH that parses onboarding documentation and auto-executes environment setup scripts. Uses Gemini models with server-sent events for streaming responses, cutting developer setup time by roughly 30%.",
    tech: ["FastAPI", "Gemini", "SSE", "Python"],
    githubLink: "https://github.com/varshikchebrolu",
    image: "/projects/ai-setup-assistant.svg",
  },
];

export default function Projects() {
  return (
    <Section id="projects-section">
      <SectionHeading kicker="Things I've built" title="Featured Projects" id="projects" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: "2rem",
        }}
      >
        {ProjectsDetails.map((project) => (
          <Box
            key={project.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              background: tokens.surface,
              border: `1px solid ${tokens.border}`,
              borderRadius: "18px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                borderColor: tokens.primary,
                boxShadow: "0 18px 40px rgba(125,33,224,0.25)",
              },
            }}
          >
            {/* Cover */}
            <Box sx={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
              <img
                alt={project.name}
                src={project.image}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/project-placeholder.png";
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <Chip
                label={project.tag}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  color: tokens.text,
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  background: "rgba(10,10,15,0.7)",
                  border: `1px solid ${tokens.border}`,
                  backdropFilter: "blur(6px)",
                }}
              />
            </Box>

            {/* Body */}
            <Box sx={{ p: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 700, color: tokens.text, mb: "0.75rem" }}
              >
                {project.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: tokens.textMuted,
                  lineHeight: 1.65,
                  mb: "1.25rem",
                  flex: 1,
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", mb: "1.25rem" }}>
                {project.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      color: tokens.accent,
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      background: "rgba(57,225,236,0.08)",
                      border: `1px solid ${tokens.border}`,
                    }}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  pt: "1rem",
                  borderTop: `1px solid ${tokens.border}`,
                }}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: tokens.text,
                    textDecoration: "none",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 20 }} /> Code
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: tokens.accent,
                    textDecoration: "none",
                    marginLeft: "auto",
                  }}
                >
                  View project <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
                </a>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
