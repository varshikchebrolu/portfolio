import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

const programmingLanguages = [
  { IconName: FaIcons.FaReact, displayName: "React", category: "languages" },
  { IconName: RiIcons.RiJavascriptFill, displayName: "JavaScript", category: "languages" },
  { IconName: BiIcons.BiLogoTypescript, displayName: "TypeScript", category: "languages" },
  { IconName: FaIcons.FaJava, displayName: "Java", category: "languages" },
  { IconName: FaIcons.FaPython, displayName: "Python", category: "languages" },
];

const frontendTechnologies = [
  { IconName: FaIcons.FaHtml5, displayName: "HTML5", category: "frontend" },
  { IconName: FaIcons.FaCss3Alt, displayName: "CSS3", category: "frontend" },
  { IconName: FaIcons.FaAngular, displayName: "Angular", category: "frontend" },
  { IconName: SiIcons.SiMui, displayName: "Material-UI", category: "frontend" },
  { IconName: FaIcons.FaBootstrap, displayName: "Bootstrap", category: "frontend" },
  // { IconName: BiIcons.BiCodeSquare, displayName: "Redux", category: "frontend" },
];

const backendTechnologies = [
  { IconName: FaIcons.FaNode, displayName: "Node.js", category: "backend" },
  { IconName: SiIcons.SiSpring, displayName: "Spring Boot", category: "backend" },
  { IconName: SiIcons.SiNestjs, displayName: "NestJS", category: "backend" },
  { IconName: FaIcons.FaRss, displayName: "RESTful APIs", category: "backend" },
  { IconName: SiIcons.SiSequelize, displayName: "Sequelize", category: "backend" },
];

const databases = [
  { IconName: BiIcons.BiLogoPostgresql, displayName: "PostgreSQL", category: "databases" },
  { IconName: SiIcons.SiMysql, displayName: "MySQL", category: "databases" },
  // { IconName: SiIcons.SiMongoDb, displayName: "MongoDB", category: "databases" },
];

const cloud = [
  { IconName: FaIcons.FaAws, displayName: "AWS", category: "cloud" },
];

const tools = [
  { IconName: FaIcons.FaGitAlt, displayName: "Git", category: "tools" },
  { IconName: FaIcons.FaDocker, displayName: "Docker", category: "tools" },
  { IconName: SiIcons.SiJira, displayName: "Jira", category: "tools" },
  { IconName: FaIcons.FaJenkins, displayName: "Jenkins", category: "tools" },
  // { IconName: SiIcons.SiMaven, displayName: "Maven", category: "tools" },
  { IconName: SiIcons.SiPostman, displayName: "Postman", category: "tools" },
  { IconName: TbIcons.TbBrandVscode, displayName: "VS Code", category: "tools" },
];

// Map icons to their icon names based on category
const allIcons = [];

// Programming Languages
allIcons.push({ ...programmingLanguages[0], icon: FaIcons.FaReact });
allIcons.push({ ...programmingLanguages[1], icon: RiIcons.RiJavascriptFill });
allIcons.push({ ...programmingLanguages[2], icon: BiIcons.BiLogoTypescript });
allIcons.push({ ...programmingLanguages[3], icon: FaIcons.FaJava });
allIcons.push({ ...programmingLanguages[4], icon: FaIcons.FaPython });

// Frontend Technologies
allIcons.push({ ...frontendTechnologies[0], icon: FaIcons.FaHtml5 });
allIcons.push({ ...frontendTechnologies[1], icon: FaIcons.FaCss3Alt });
allIcons.push({ ...frontendTechnologies[2], icon: FaIcons.FaAngular });
allIcons.push({ ...frontendTechnologies[3], icon: SiIcons.SiMui });
allIcons.push({ ...frontendTechnologies[4], icon: FaIcons.FaBootstrap });
// allIcons.push({ ...frontendTechnologies[5], icon: BiIcons.BiCodeSquare });

// Backend Technologies
allIcons.push({ ...backendTechnologies[0], icon: FaIcons.FaNode });
allIcons.push({ ...backendTechnologies[1], icon: SiIcons.SiSpring });
allIcons.push({ ...backendTechnologies[2], icon: SiIcons.SiNestjs });
allIcons.push({ ...backendTechnologies[3], icon: FaIcons.FaRss });
allIcons.push({ ...backendTechnologies[4], icon: SiIcons.SiSequelize });

// Databases
allIcons.push({ ...databases[0], icon: BiIcons.BiLogoPostgresql });
allIcons.push({ ...databases[1], icon: SiIcons.SiMysql });
// allIcons.push({ ...databases[2], icon: SiIcons.SiMongoDb });

// Cloud
allIcons.push({ ...cloud[0], icon: FaIcons.FaAws });

// Tools
allIcons.push({ ...tools[0], icon: FaIcons.FaGitAlt });
allIcons.push({ ...tools[1], icon: FaIcons.FaDocker });
allIcons.push({ ...tools[2], icon: SiIcons.SiJira });
allIcons.push({ ...tools[3], icon: FaIcons.FaJenkins });
// allIcons.push({ ...tools[4], icon: SiIcons.SiMaven });
allIcons.push({ ...tools[5], icon: SiIcons.SiPostman });
allIcons.push({ ...tools[6], icon: TbIcons.TbBrandVscode });

export default function Skills() {
  return (
    <Box
      container
      sx={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "3rem",
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/bg.png)`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: "white",
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "1rem",
          fontWeight: "bold",
        }}
        id="skills"
      >
        Skills
      </Typography>

      {/* Programming Languages */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Programming Languages
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "languages")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Frontend Technologies */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Frontend Technologies
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "frontend")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Backend Technologies */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Backend Technologies
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "backend")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Databases */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Databases
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "databases")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Cloud Services */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Cloud Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "cloud")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Tools */}
      <Typography variant="h6" sx={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
        Tools & Platforms
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {allIcons
          .filter((icon) => icon.category === "tools")
          .map((Icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                padding: "1rem",
                width: {
                  xs: "30%",
                  md: "15%",
                },
              }}
            >
              <Icon.icon fontSize="250%" sx={{ color: "#333" }} />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}
              >
                {Icon.displayName}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
