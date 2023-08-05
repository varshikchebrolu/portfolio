import React from "react";
import { Box, Typography } from "@mui/material";
import VerticalTimelineComponent from "../utils/verticalTimeline";

export default function Experience() {
  const experiences = [
    {
      title: "Experience1",
      subtitle: "Position1",
      description: "some description",
      type: "experience",
      start: "2019-11",
      end: "2021-07",
    },
    {
      title: "Education1",
      subtitle: "Some subtitle",
      description: "some description",
      type: "education",
      start: "2021-08",
      end: "2023-05",
    },
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
      }}
      id='experience'
    >
      <Typography
        component="h1"
        sx={{
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "3rem",
          fontWeight: "bold",
        }}
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
