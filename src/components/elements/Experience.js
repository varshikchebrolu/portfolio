import React from "react";
import { Box, Typography } from "@mui/material";
import VerticalTimelineComponent from "../utils/verticalTimeline";

export default function Experience() {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();

  const formattedDate = `${year}-${month}`;
  const experiences = [
    {
      title: "Spectra Media Collective",
      subtitle: "Software Developer",
      description: `React, Typescript, NestJs, AWS, sequelize, Postgre SQL`,
      type: "experience",
      start: "2022-10",
      end: formattedDate,
    },

    {
      title: "Colorado State University",
      subtitle: "Masters of Science in Computer Science",
      description: `Machine Learning, Object orineted Programming and Principles, Advanced Networking`,
      type: "education",
      start: "2021-08",
      end: "2023-05",
    },
    {
      title: "ClearWater Analytics",
      subtitle: "Software Develoment Intern",
      description: `Angular, Typescript, Kotlin, Jira, Customazible UI`,
      type: "experience",
      start: "2022-06",
      end: "2022-08",
    },
    {
      title: "Colorado State University",
      subtitle: "Teaching Assistant For Operating Systems",
      description: `Java, Python, operating Systems, Linux, C, Threads`,
      type: "experience",
      start: "2022-01",
      end: "2022-05",
    },
    {
      title: "Infosys Ltd",
      subtitle: "Full Stack Developer",
      description: `React, Typescript, Java, Springboot, SQL, NextJs`,
      type: "experience",
      start: "2019-07",
      end: "2021-07",
    },
    {
      title: "Chaitanya Bharathi Institute of Technology",
      subtitle: "Bachelors in Computer Engineering",
      description: `Java, Object Oriented Programming`,
      type: "education",
      start: "2015-08",
      end: "2019-05",
    }
  ];
  return (
    <Box
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "3rem",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/whitebg.jpg)`,
        backgroundSize: "contain",
      }}
    >
      <Typography
        component="h1"
        sx={{
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "3rem",
          fontWeight: "bold",
        }}
        id="experience"
      >
        Experience
      </Typography>
      <Box>
        {experiences.map((entry, index) => (
          <VerticalTimelineComponent
            key={index}
            title={entry.title}
            subtitle={entry.subtitle}
            description={entry.description}
            type={entry.type}
            start={entry.start}
            end={entry.end}
          />
        ))}
      </Box>
    </Box>
  );
}
