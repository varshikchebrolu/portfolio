import React from "react";
import { Box, Typography } from "@mui/material";
import { tokens, gradientText } from "../../theme";

// Consistent section heading used across every section: a small kicker label,
// a large gradient title, and a centered underline accent.
export default function SectionHeading({ kicker, title, id, align = "center" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        marginBottom: "3rem",
      }}
    >
      {kicker && (
        <Typography
          sx={{
            color: tokens.accent,
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {kicker}
        </Typography>
      )}
      <Typography
        component="h2"
        id={id}
        sx={{
          ...gradientText,
          fontSize: { xs: "2rem", md: "2.75rem" },
          fontWeight: 800,
          lineHeight: 1.1,
          scrollMarginTop: "90px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "72px",
          height: "4px",
          borderRadius: "2px",
          marginTop: "1rem",
          background: tokens.gradient,
        }}
      />
    </Box>
  );
}
