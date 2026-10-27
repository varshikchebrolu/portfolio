import { createTheme } from "@mui/material/styles";

// Central design tokens for the portfolio. Keeping these in one place keeps
// the look cohesive across every section.
export const tokens = {
  // Core surfaces (dark, modern developer aesthetic)
  bg: "#0a0a0f",
  bgAlt: "#101018",
  surface: "#15151f",
  surfaceAlt: "#1c1c29",
  border: "rgba(255, 255, 255, 0.08)",

  // Text
  text: "#f4f4f8",
  textMuted: "#a8a8b8",

  // Brand accents
  primary: "#7D5BFF", // violet
  primaryDeep: "#5E21E0",
  accent: "#39E1EC", // cyan
  gold: "#FFD166",

  // The signature gradient used for headings, buttons, highlights
  gradient: "linear-gradient(90deg, #39E1EC 0%, #7D5BFF 55%, #C86DD7 100%)",
  gradientSoft:
    "linear-gradient(135deg, rgba(57,225,236,0.12) 0%, rgba(125,91,255,0.12) 100%)",
};

export const gradientText = {
  background: tokens.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: tokens.primary },
    secondary: { main: tokens.accent },
    background: { default: tokens.bg, paper: tokens.surface },
    text: { primary: tokens.text, secondary: tokens.textMuted },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 800, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 700, textTransform: "none" },
  },
  shape: { borderRadius: 14 },
});

export default theme;
