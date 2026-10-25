import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";

export default function Projects() {
  const ProjectsDetails = [
    {
      title: "Educational Project",
      name: "Legan Chess",
      description:
        "Developed a full-fledged Legan chess game - a chess variant with different rules - with a team of 5 developers. Designed the game utilizing object-oriented principles and usage of 3 design patterns, creating a user-friendly interface using React, JavaScript and pieces movements in Java. Maintained real-time interaction using web sockets between the UI and services with less than 1 sec delay.",
      techStack: "React, JavaScript, Java, Object Oriented Design Principles",
      githubLink: "https://github.com/varshikchebrolu/legan-chess",
      imageURL: "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/chess.jpg",
    },
    {
      title: "Educational Project",
      name: "Automated Testing Approaches for Java Projects",
      description:
        "Conducted a comparative study on 30 open-source small-scale Java projects using automation testing tools. Validated more than 500 test cases for all classes on each project, evaluating results on time and speed to improve software quality and code coverage.",
      techStack: "Java, Evosuite, Randoop, Software Testing",
      githubLink: "https://github.com/varshikchebrolu/java-automated-testing",
      imageURL: "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/auto_testing.jpeg",
    },
    {
      title: "Educational Project",
      name: "Detect Brain Tumors using CNN Clusters",
      description:
        "Worked on a machine learning algorithm to detect brain tumors through MRI scan images. Trained and tested the model with more than 6000 images, achieving 90% accuracy.",
      techStack: "Machine Learning, CNN Clusters, Python",
      githubLink: "https://github.com/varshikchebrolu/brain-tumor-detection",
      imageURL: "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/brainTumor.png",
    },
  ];

  return (
    <Box
      sx={{
        color: "#333333",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "3rem",
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
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
          fontSize: "2.5rem",
          paddingBottom: "3rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #FFD700 0%, #5E21E0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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
              key={project.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                width: {
                  xs: "100%",
                  sm: "45%",
                  md: "30%",
                },
                minHeight: "32rem",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 10px 30px rgba(94, 33, 224, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "55%",
                  overflow: "hidden",
                }}
              >
                <img
                  alt={project.title}
                  src={project.imageURL}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/project-placeholder.png";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(94,33,224,0.3) 100%)",
                  }}
                />
              </Box>
              <Box sx={{ padding: "1.5rem" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize="1.25rem"
                  color="black"
                  fontWeight="bold"
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  fontSize="0.85rem"
                  sx={{
                    lineHeight: 1.6,
                    textAlign: "justify",
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid #e0e0e0",
                  }}
                >
                  <Typography
                    fontSize="0.9rem"
                    fontWeight="bold"
                    color="#5E21E0"
                  >
                    Tech Stack: {project.techStack}
                  </Typography>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: "#5E21E0",
                      textDecoration: "none",
                    }}
                  >
                    View Project →
                  </a>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}