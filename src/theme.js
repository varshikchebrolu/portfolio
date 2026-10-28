import { createTheme } from "@mui/material/styles";

// Central design tokens for the portfolio. Keeping these in one place keeps
// the look cohesive across every section.
export const tokens = {
  // Core surfaces (Midnight Indigo — cool, calm, corporate-safe)
  bg: "#0b0f1e",
  bgAlt: "#0e1326",
  surface: "#161c33",
  surfaceAlt: "#1e2645",
  border: "rgba(255, 255, 255, 0.09)",

  // Text
  text: "#e8ebf5",
  textMuted: "#8a93b0",

  // Brand accents
  primary: "#5B8DEF", // blue
  primaryDeep: "#3a63c7",
  accent: "#9B6DFF", // violet
  gold: "#FFD166",

  // Signature glow (used for shadows/halos). RGB of primary.
  glow: "91,141,239",

  // The signature gradient used for headings, buttons, highlights
  gradient: "linear-gradient(90deg, #5B8DEF 0%, #7D78F5 55%, #9B6DFF 100%)",
  gradientSoft:
    "linear-gradient(135deg, rgba(91,141,239,0.12) 0%, rgba(155,109,255,0.12) 100%)",
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
