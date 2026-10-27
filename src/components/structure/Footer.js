import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { tokens } from "../../theme";

const socials = [
  { icon: MailRoundedIcon, href: "mailto:chebroluvarshik@gmail.com", label: "Email", color: "#39E1EC" },
  { icon: GitHubIcon, href: "https://github.com/varshikchebrolu", label: "GitHub", color: "#ffffff" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/varshikchebrolu/", label: "LinkedIn", color: "#0A66C2" },
  { icon: InstagramIcon, href: "https://www.instagram.com/varshik_chebrolu/", label: "Instagram", color: "#E4405F" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: tokens.bg,
        borderTop: `1px solid ${tokens.border}`,
        color: tokens.text,
        py: "2.5rem",
        px: "1.5rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          {socials.map((s) => (
            <IconButton
              key={s.label}
              aria-label={s.label}
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: s.color,
                border: `1px solid ${tokens.border}`,
                transition: "transform 0.25s ease, border-color 0.25s ease",
                "&:hover": { transform: "translateY(-3px)", borderColor: tokens.primary },
              }}
            >
              <s.icon sx={{ fontSize: 22 }} />
            </IconButton>
          ))}
        </Box>
        <Typography sx={{ color: tokens.textMuted, fontSize: "0.9rem", textAlign: "center" }}>
          © {new Date().getFullYear()} Varshik Chebrolu · Built with React & MUI
        </Typography>
      </Box>
    </Box>
  );
}
