import React from "react";
import { Box } from "@mui/material";
import useReveal from "./useReveal";
import { tokens } from "../../theme";

// Wraps a page section with consistent vertical rhythm, a max-width content
// column, optional alternating background, and a scroll-reveal animation.
export default function Section({ children, alt = false, sx = {}, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        width: "100%",
        background: alt ? tokens.bgAlt : tokens.bg,
        py: { xs: "4rem", md: "6rem" },
        px: { xs: "1.25rem", md: "2rem" },
        ...sx,
      }}
      {...rest}
    >
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
