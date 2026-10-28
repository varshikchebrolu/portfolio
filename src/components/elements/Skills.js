import React from "react";
import { Box, Typography } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { tokens } from "../../theme";

// Single source of truth for every skill. Adding a skill is one entry here.
const allIcons = [
  // Programming Languages
  { displayName: "JavaScript", category: "languages", icon: RiIcons.RiJavascriptFill },
  { displayName: "TypeScript", category: "languages", icon: BiIcons.BiLogoTypescript },
  { displayName: "Java", category: "languages", icon: FaIcons.FaJava },
  { displayName: "Python", category: "languages", icon: FaIcons.FaPython },

  // Frontend
  { displayName: "React", category: "frontend", icon: FaIcons.FaReact },
  { displayName: "Next.js", category: "frontend", icon: TbIcons.TbBrandNextjs },
  { displayName: "Redux", category: "frontend", icon: SiIcons.SiRedux },
  { displayName: "HTML5", category: "frontend", icon: FaIcons.FaHtml5 },
  { displayName: "CSS3", category: "frontend", icon: FaIcons.FaCss3Alt },
  { displayName: "AEM", category: "frontend", icon: SiIcons.SiAdobe },
  { displayName: "Material UI", category: "frontend", icon: SiIcons.SiMui },

  // Backend
  { displayName: "Node.js", category: "backend", icon: FaIcons.FaNode },
  { displayName: "Spring Boot", category: "backend", icon: SiIcons.SiSpring },
  { displayName: "FastAPI", category: "backend", icon: SiIcons.SiFastapi },
  { displayName: "NestJS", category: "backend", icon: SiIcons.SiNestjs },
  { displayName: "Sequelize", category: "backend", icon: SiIcons.SiSequelize },

  // Databases
  { displayName: "PostgreSQL", category: "databases", icon: BiIcons.BiLogoPostgresql },
  { displayName: "MySQL", category: "databases", icon: SiIcons.SiMysql },
  { displayName: "Qdrant", category: "databases", icon: TbIcons.TbDatabase },

  // Cloud & AI
  { displayName: "AWS", category: "ai", icon: FaIcons.FaAws },
  { displayName: "LangGraph", category: "ai", icon: TbIcons.TbRobot },
  { displayName: "Gemini", category: "ai", icon: SiIcons.SiGoogle },
  { displayName: "Pydantic AI", category: "ai", icon: TbIcons.TbBrain },
  { displayName: "Cohere", category: "ai", icon: TbIcons.TbSparkles },
  { displayName: "RAG Systems", category: "ai", icon: TbIcons.TbVectorTriangle },

  // Tools
  { displayName: "Git", category: "tools", icon: FaIcons.FaGitAlt },
  { displayName: "Docker", category: "tools", icon: FaIcons.FaDocker },
  { displayName: "Jira", category: "tools", icon: SiIcons.SiJira },
  { displayName: "Maven", category: "tools", icon: SiIcons.SiApachemaven },
  { displayName: "Postman", category: "tools", icon: SiIcons.SiPostman },
  { displayName: "VS Code", category: "tools", icon: TbIcons.TbBrandVscode },
];

const sections = [
  { heading: "Languages", category: "languages" },
  { heading: "Frontend", category: "frontend" },
  { heading: "Backend", category: "backend" },
  { heading: "Databases", category: "databases" },
  { heading: "Cloud & AI", category: "ai" },
  { heading: "Tools & Platforms", category: "tools" },
];

function SkillCard({ Icon, displayName }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.6rem",
        background: tokens.surface,
        border: `1px solid ${tokens.border}`,
        borderRadius: "14px",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: tokens.primary,
          boxShadow: `0 12px 28px rgba(${tokens.glow},0.3)`,
        },
        padding: "1.25rem 0.75rem",
        width: { xs: "28%", sm: "20%", md: "120px" },
        minWidth: "88px",
      }}
    >
      <Icon fontSize="230%" style={{ color: tokens.accent }} />
      <Typography
        sx={{ textAlign: "center", fontSize: "0.8rem", fontWeight: 600, color: tokens.text }}
      >
        {displayName}
      </Typography>
    </Box>
  );
}

export default function Skills() {
  return (
    <Section id="skills-section" alt>
      <SectionHeading kicker="What I work with" title="Skills & Tech" id="skills" />
      {sections.map((section) => {
        const items = allIcons.filter((i) => i.category === section.category);
        if (items.length === 0) return null;
        return (
          <Box key={section.category} sx={{ mb: "2.5rem" }}>
            <Typography
              sx={{
                color: tokens.textMuted,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: "1.25rem",
                textAlign: "center",
              }}
            >
              {section.heading}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {items.map((item, index) => (
                <SkillCard key={index} Icon={item.icon} displayName={item.displayName} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Section>
  );
}
