import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import imageT from "../utils/home.png";
import chess from "../utils/chess.jpg";
import brainTumor from "../utils/brainTumor.png";
import testing from "../utils/auto_testing.jpeg";
import bg from "../utils/bg.png";

export default function Projects() {
  const ProjectsDetails = [
    {
      title: "Educational project",
      name: "Legan Chess",
      description:
        " Developed a full fledged legan chess game - a chess game with different rule - with a team of 5 developers and learned various concepts of Object Oriented Principles.",
      techStack: "React, Java, Object Oriented Principles",
      githubLink: "link to github",
      imageURL: chess,
    },
    {
      title: " Educational Project",
      name: "Detect the Brain Tumors using CNN clusters",
      description:
        "Worked on a machine learning algorithm to detect the brain tumors through MRI scan images. Trained and tested the Model with more than 6000 images and increased the accuracy to 90%",
      techStack: "Machine Learning, CNN clusters",
      githubLink: "link to github",
      imageURL: brainTumor,
    },
    {
      title: " Educational Project",
      name: "Automation testing approaches for small scale java projects",
      description:
        "Tested more than 30 small scale open source java projects by generating automatic unit test cases using selenium to find the accuracy of the reaching the code coverage",
      techStack: "Java, Selenium",
      githubLink: "link to github",
      imageURL: testing,
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
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
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
      <Box display={"flex"} flexWrap={"wrap"} borderRadius={"10px"}>
        {ProjectsDetails.map((project) => {
          return (
            <Box key={project.name} style={{ flex: 1, marginBottom: "1rem" }}>
              <Card
                sx={{
                  width: "25rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  sx={{
                    height: "15rem",
                    paddingTop: "3vw",
                  }}
                  image={project.imageURL || imageT}
                  title={project.title}
                />
                <CardContent style={{ flexGrow: 1 }}>
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
                </CardContent>
                <CardActions>{/* <Button>Github</Button> */}</CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
