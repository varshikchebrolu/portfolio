import React from "react";
import { Box, Typography } from "@mui/material";
import VerticalTimelineComponent from "../utils/verticalTimeline";

export default function Experience() {
  const experiences = [
    {
      title: "Spectra Media Collective",
      subtitle: "Software Developer",
      description: `Developed a responsive UI with React, TypeScript, NextJS, and Material UI, achieving 100% user base growth in 3 months. Enhanced user satisfaction and reduced bug fix time by 30% through UX/UI design improvements, test-driven development, and continuous integration. Improved media resource handling to over 20,000 items and data efficiency by 25% using PostgreSQL and NestJS. Automated deployment and integration workflows with AWS Cloud Pipeline, reducing release cycles to 1 week.`,
      type: "experience",
      start: "2022-10",
      end: "Present",
    },
    {
      title: "Clearwater Analytics",
      subtitle: "Software Developer Intern",
      description: `Co-developed a version management tool for three organizational applications within 6 weeks using Angular, JavaScript, and Bootstrap. Contributed to web application development by following test-driven approach and Agile methodologies, resulting in more reliable and maintainable code. Designed and deployed RESTful APIs with Kotlin and Bitbucket, improving data integration and performance by 25%. Performed unit and integration testing using Jenkins, increasing bug resolution rate by 20% and ensuring 80% code coverage.`,
      type: "experience",
      start: "2022-06",
      end: "2022-08",
    },
    {
      title: "Colorado State University",
      subtitle: "MS in Computer Science",
      description: `Advanced coursework in Machine Learning, Object Oriented Programming, and Advanced Networking.`,
      type: "education",
      start: "2021-08",
      end: "2023-05",
    },
    {
      title: "Infosys Ltd.",
      subtitle: "Full Stack Developer",
      description: `Worked with senior developers and UX designers to identify business requirements, boosting solution delivery by 20%. Implemented and integrated over 30 responsive elements in an e-commerce single-page web application using React and JavaScript. Improved page data loading latency for an e-commerce website to under 3 seconds.`,
      type: "experience",
      start: "2019-11",
      end: "2021-07",
    },
    {
      title: "Chaitanya Bharathi Institute of Technology",
      subtitle: "Bachelors in Computer Engineering",
      description: `Foundation in Computer Engineering and Object Oriented Programming.`,
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
