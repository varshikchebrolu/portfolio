import React from "react";
import { Box } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../utils/verticalTimeline.css";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { tokens } from "../../theme";

const experiences = [
  {
    title: "DISH Technologies — EchoStar",
    subtitle: "Software Engineer II",
    location: "Englewood, CO",
    date: "Nov 2024 – Present",
    type: "experience",
    points: [
      "Owned a unified payment-tokenization iframe app (Basis Theory) as the primary payment path across 5+ customer-facing apps — nearly all customer payments at 99.9% uptime, cutting annual PCI audit costs by $300K.",
      "Engineered AEM components and layout containers for the sling.com homepage redesign, contributing to a 15% lift in user activations backed by A/B testing.",
      "Resolved production issues across a React/AEM frontend and Java/Spring Boot backend and handled on-call incidents on a 6-week rotation.",
      "Built an internal AI Setup Assistant (FastAPI, Gemini, SSE) that parsed onboarding docs and auto-executed setup scripts, reducing developer setup time by ~30%.",
    ],
  },
  {
    title: "Spectra Media Collective",
    subtitle: "Software Developer",
    location: "New York, NY",
    date: "Oct 2022 – Nov 2024",
    type: "experience",
    points: [
      "Led end-to-end development of spectra.theater (React, TypeScript, NestJS, Sequelize), growing it from 10 to 1,200 users in under 3 months with minimal marketing.",
      "Rebuilt the image-handling layer with lazy loading and optimized delivery across 20,000+ media objects, cutting page load times; refactored PostgreSQL schemas with modular NestJS endpoints.",
      "Engineered scalable TypeScript APIs for auth, image handling, and user management, and established TDD practices that cut release cycles to 2 weeks.",
    ],
  },
  {
    title: "Colorado State University",
    subtitle: "M.S. in Computer Science",
    location: "Fort Collins, CO",
    date: "Aug 2021 – May 2023",
    type: "education",
    points: [
      "Advanced coursework in Machine Learning, Object-Oriented Programming, and Advanced Networking.",
    ],
  },
  {
    title: "Infosys Ltd.",
    subtitle: "Full-Stack Developer",
    location: "Hyderabad, India",
    date: "Nov 2019 – Jul 2021",
    type: "experience",
    points: [
      "Translated business specs into technical requirements with UX designers and engineering leads, and built 10+ interactive React components for an inventory catalog SPA.",
      "Refactored data-fetching and rendering in React/JavaScript to bring page loads under the team's 3-second production gate, focusing on image-heavy catalog pages.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience-section">
      <SectionHeading kicker="Where I've worked" title="Experience" id="experience" />
      <VerticalTimeline lineColor={tokens.border}>
        {experiences.map((entry, index) => {
          const isEdu = entry.type === "education";
          return (
            <VerticalTimelineElement
              key={index}
              date={entry.date}
              dateClassName="timeline-date"
              contentStyle={{
                background: tokens.surface,
                border: `1px solid ${tokens.border}`,
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                color: tokens.text,
              }}
              contentArrowStyle={{ borderRight: `7px solid ${tokens.surface}` }}
              iconStyle={{
                background: tokens.gradient,
                color: "#0a0a0f",
                boxShadow: `0 0 0 4px ${tokens.bg}, 0 0 0 5px ${tokens.border}`,
              }}
              icon={isEdu ? <SchoolRoundedIcon /> : <WorkRoundedIcon />}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.2rem", color: tokens.text }}>
                  {entry.title}
                </h3>
              </Box>
              <h4
                style={{
                  margin: "0.25rem 0 0.25rem",
                  color: tokens.accent,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {entry.subtitle} · {entry.location}
              </h4>
              <Box
                component="ul"
                sx={{
                  m: "0.75rem 0 0",
                  pl: "1.1rem",
                  color: tokens.textMuted,
                  "& li": { mb: "0.5rem", fontSize: "0.9rem", lineHeight: 1.6 },
                }}
              >
                {entry.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </Box>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}
