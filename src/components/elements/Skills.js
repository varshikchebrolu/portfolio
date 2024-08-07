import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

const icons = [
  { IconName: FaIcons.FaReact, displayName: "React" },
  { IconName: RiIcons.RiJavascriptFill, displayName: "JavaScript" },
  { IconName: FaIcons.FaAws, displayName: "Amazon Web Services" },
  { IconName: FaIcons.FaJava, displayName: "Java" },
  { IconName: BiIcons.BiLogoTypescript, displayName: "TypeScript" },
  { IconName: FaIcons.FaPython, displayName: "Python" },
  { IconName: FaIcons.FaHtml5, displayName: "HTML5" },
  { IconName: FaIcons.FaCss3Alt, displayName: "CSS3" },
  { IconName: SiIcons.SiNestjs, displayName: "NestJS" },
  { IconName: FaIcons.FaAngular, displayName: "Angular" },
  { IconName: SiIcons.SiMui, displayName: "Material-UI" },
  { IconName: SiIcons.SiSpring, displayName: "Spring" },
  { IconName: FaIcons.FaNode, displayName: "Node.js" },
  { IconName: SiIcons.SiApachemaven, displayName: "Apache Maven" },
  { IconName: SiIcons.SiSequelize, displayName: "Sequelize" },
  { IconName: SiIcons.SiMysql, displayName: "MySQL" },
  { IconName: BiIcons.BiLogoPostgresql, displayName: "PostgreSQL" },
  {
    IconName: SiIcons.SiMicrosoftsqlserver,
    displayName: "Microsoft SQL Server",
  },
  { IconName: FaIcons.FaGitAlt, displayName: "Git" },
  { IconName: FaIcons.FaJenkins, displayName: "Jenkins" },
  { IconName: FaIcons.FaDocker, displayName: "Docker" },
];

const toolIcons = [
  { IconName: TbIcons.TbBrandVscode, displayName: "Visual Studio Code" },
  { IconName: SiIcons.SiPostman, displayName: "Postman" },
  { IconName: FaIcons.FaSlack, displayName: "Slack" },
  { IconName: SiIcons.SiJira, displayName: "Jira" },
  { IconName: SiIcons.SiVercel, displayName: "Vercel" },
];

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
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {icons.map((Icon, index) => (
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
              padding:'1rem',
              width:{
                xs:'30%',
                md:'10%'
              }
            }}
          >
            <Icon.IconName fontSize="250%" sx={{ color: "#555555" }} />
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}
            >
              {Icon.displayName}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        component="h3"
        sx={{
          color: "white",
          alignSelf: "center",
          fontSize: "2rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          fontWeight: "bold",
        }}
        id="skills"
      >
        Tools I Use
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {toolIcons.map((Icon, index) => (
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
              padding:'1rem',
              width:{
                xs:'30%',
                md:'10%'
              }
            }}
          >
            <Icon.IconName fontSize="250%" sx={{ color: "#555555" }} />
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}
            >
              {Icon.displayName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
