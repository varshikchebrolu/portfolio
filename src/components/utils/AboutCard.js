import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const AboutCard = ({ frontContent, backContent }) => {
  return (
    <Box
      sx={{
        width: "30%",
        height: "20rem",
        perspective: "1000px",
        ":hover": {
          "& .flip-card-inner": {
            transform: "rotateY(180deg)",
          },
        },
      }}
    >
      <Box
        className="flip-card-inner"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 1s",
          transformStyle: "preserve-3d",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            backgroundColor: "#64b5f6",
            color: "black",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{frontContent}</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            backgroundColor: "#2196f3",
            color: "white",
            transform: "rotateY(180deg)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{padding:'0.5rem'}}>{backContent}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
