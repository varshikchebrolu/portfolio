import React, { useEffect } from "react";
import { Box, Button, Typography, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import anime from "animejs";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { tokens, gradientText } from "../../theme";

const Roles = [
  "Software Engineer II",
  "Full Stack Developer",
  "React & Javascript Expert",
  "AI & RAG Enthusiast",
];

const stats = [
  { value: "6+", label: "Years experience" },
  { value: "99.9%", label: "Payment uptime" },
  { value: "$300K", label: "Audit cost saved" },
];

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const targetElement = document.querySelector(".text-transition");
    if (!targetElement) return;

    const animateText = () => {
      anime({
        targets: targetElement,
        translateY: [0, -18],
        opacity: [1, 0],
        duration: 450,
        easing: "easeInOutQuad",
        complete: () => {
          setIndex((prev) => {
            const next = (prev + 1) % Roles.length;
            targetElement.innerText = Roles[next];
            return next;
          });
          anime({
            targets: targetElement,
            translateY: [18, 0],
            opacity: [0, 1],
            duration: 450,
            easing: "easeInOutQuad",
          });
        },
      });
    };

    const intervalId = setInterval(animateText, 2800);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: "1.25rem", md: "2rem" },
        pt: { xs: "7rem", md: "6rem" },
        pb: { xs: "4rem", md: "3rem" },
        background: `radial-gradient(1000px 600px at 80% 10%, rgba(155,109,255,0.18), transparent 60%),
                     radial-gradient(800px 500px at 10% 90%, rgba(91,141,239,0.14), transparent 60%),
                     ${tokens.bg}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "3rem", md: "2rem" },
        }}
      >
        {/* Left: intro */}
        <Box
          sx={{
            flex: "1 1 460px",
            maxWidth: "680px",
            display: "flex",
            flexDirection: "column",
            // Center content on phone + tablet, left-align on desktop
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            marginLeft:{lg:"5%"}
          }}
        >
          <Chip
            label="Open to opportunities"
            size="small"
            sx={{
              mb: "1.5rem",
              color: tokens.accent,
              fontWeight: 700,
              letterSpacing: "0.04em",
              border: `1px solid ${tokens.border}`,
              background: "rgba(155,109,255,0.1)",
              "& .MuiChip-label": { px: 1.5 },
            }}
          />
          <Typography
            sx={{ color: tokens.textMuted, fontSize: "1.1rem", mb: "0.5rem" }}
          >
            Hi, I'm
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.6rem", md: "3.8rem" },
              fontWeight: 800,
              lineHeight: 1.05,
              mb: "1rem",
              ...gradientText,
            }}
          >
            Varshik Chebrolu
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.6rem",
              mb: "1.5rem",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* <Typography sx={{ color: tokens.text, fontSize: "1.4rem", fontWeight: 600 }}>
              Passionate
            </Typography> */}
            <Box
              className="text-transition"
              sx={{
                fontSize: "1.4rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
                ...gradientText,
              }}
            >
              {Roles[index]}
            </Box>
          </Box>

          <Typography
            sx={{
              color: tokens.textMuted,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
              mb: "2.25rem",
            }}
          >
            I build high-availability web applications, secure payment systems, and
            applied-AI tooling — bridging solid product engineering with RAG
            architectures and LangGraph agent workflows.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap", mb: "2.5rem", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
              variant="contained"
              startIcon={<DownloadRoundedIcon />}
              onClick={() => navigate("/resume")}
              sx={{
                px: "1.75rem",
                py: "0.75rem",
                fontSize: "1rem",
                borderRadius: "999px",
                color: "#ffffff",
                background: tokens.gradient,
                boxShadow: `0 8px 24px rgba(${tokens.glow},0.4)`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: `0 12px 30px rgba(${tokens.glow},0.6)`,
                },
              }}
            >
              View Resume
            </Button>
            <Link to="contact" smooth duration={800} offset={-70}>
              <Button
                variant="outlined"
                sx={{
                  px: "1.75rem",
                  py: "0.75rem",
                  fontSize: "1rem",
                  borderRadius: "999px",
                  color: tokens.text,
                  borderColor: tokens.border,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: tokens.primary,
                    background: `rgba(${tokens.glow},0.12)`,
                  },
                }}
              >
                Get in touch
              </Button>
            </Link>
          </Box>

          {/* Stats */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "1.5rem", md: "2.5rem" },
              flexWrap: "wrap",
              mb: "2rem",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {stats.map((s) => (
              <Box key={s.label} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography sx={{ fontSize: "1.8rem", fontWeight: 800, ...gradientText }}>
                  {s.value}
                </Typography>
                <Typography sx={{ color: tokens.textMuted, fontSize: "0.85rem" }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Socials */}
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: { xs: "center", md: "flex-start" } }}>
            <a href="mailto:chebroluvarshik@gmail.com" aria-label="Email">
              <SocialIcon network="email" bgColor={tokens.surfaceAlt} fgColor="#9B6DFF" style={{ height: 44, width: 44 }} />
            </a>
            <SocialIcon
              url="https://github.com/varshikchebrolu"
              target="_blank"
              fgColor="#ffffff"
              bgColor={tokens.surfaceAlt}
              style={{ height: 44, width: 44 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/varshikchebrolu/"
              bgColor={tokens.surfaceAlt}
              fgColor="#0A66C2"
              target="_blank"
              style={{ height: 44, width: 44 }}
            />
          </Box>
        </Box>

        {/* Right: portrait */}
        <Box
          sx={{
            flex: "1 1 320px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: "-10%",
              background: tokens.gradient,
              filter: "blur(70px)",
              opacity: 0.25,
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              position: "relative",
              borderRadius: "28px",
              padding: "4px",
              background: tokens.gradient,
              animation: "floatY 6s ease-in-out infinite",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <img
              src="https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/home2.png"
              alt="Varshik Chebrolu"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/project-placeholder.png";
              }}
              className="home-image"
              style={{ borderRadius: "24px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
