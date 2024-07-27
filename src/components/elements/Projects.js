import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";

export default function Projects() {
  const ProjectsDetails = [
    {
      title: "Educational project",
      name: "Legan Chess",
      description:
        " Developed a full fledged legan chess game - a chess game with different rule - with a team of 5 developers and learned various concepts of Object Oriented Principles.",
      techStack: "React, Java, Object Oriented Principles",
      githubLink: "link to github",
      imageURL: 'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/chess.jpg',
    },
    {
      title: " Educational Project",
      name: "Detect the Brain Tumors using CNN clusters",
      description:
        "Worked on a machine learning algorithm to detect the brain tumors through MRI scan images. Trained and tested the Model with more than 6000 images and increased the accuracy to 90%",
      techStack: "Machine Learning, CNN clusters",
      githubLink: "link to github",
      imageURL: 'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/brainTumor.png',
    },
    {
      title: " Educational Project",
      name: "Automation testing approaches for small scale java projects",
      description:
        "Tested more than 30 small scale open source java projects by generating automatic unit test cases using selenium to find the accuracy of the reaching the code coverage",
      techStack: "Java, Selenium",
      githubLink: "link to github",
      imageURL: 'https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/auto_testing.jpeg',
    },
  ];

  return (
    <Box
      container
      sx={{
        color: "#333333",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "3rem",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/bg.png)`,
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: "whitesmoke",
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "3rem",
          fontWeight: "bold",
        }}
        id="projects"
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "10px",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ProjectsDetails.map((project) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                width: {
                  xs: "60%",
                  sm: "40%",
                  md: "30%",
                },
                height: "35rem",
                borderRadius: "1rem",
              }}
            >
              <img
                alt={project.title}
                src={project.imageURL}
                style={{ height: "60%", borderRadius: "1rem" }}
              />
              <Box sx={{ padding: "1rem" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={"1.25rem"}
                  color={"black"}
                  fontWeight={"bold"}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="InfoText"
                  fontSize={"0.95rem"}
                >
                  {project.description}
                </Typography>
                <Typography
                  fontSize={"1rem"}
                  fontWeight={"bold"}
                  paddingTop={"3%"}
                >
                  Tech Stack: {project.techStack}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
