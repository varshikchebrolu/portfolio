import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import { tokens } from "../../theme";

const infoCards = [
  { icon: PhoneIphoneRoundedIcon, label: "Phone", value: "+1 (970) 690-2665" },
  { icon: PlaceRoundedIcon, label: "Location", value: "Denver, Colorado, 80601" },
  { icon: EmailRoundedIcon, label: "Email", value: "chebroluvarshik@gmail.com" },
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    background: tokens.bg,
    borderRadius: "12px",
    color: tokens.text,
    "& fieldset": { borderColor: tokens.border },
    "&:hover fieldset": { borderColor: tokens.primary },
    "&.Mui-focused fieldset": { borderColor: tokens.accent },
  },
  "& .MuiInputBase-input::placeholder": { color: tokens.textMuted, opacity: 1 },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailjs.sendForm(
        "service_ab39axs",
        "template_portfolio",
        event.target,
        "2SrRgYQ2dhzEZejOt"
      );
      setSuccessMessage("Message sent successfully. Thank you!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Error sending message. Please try again later.");
      console.log(error);
    }
  };

  return (
    <Section id="contact-section" alt>
      <SectionHeading kicker="Let's connect" title="Get in Touch" id="contact" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* Left: info + socials */}
        <Box sx={{ flex: "1 1 320px", maxWidth: "420px" }}>
          <Typography sx={{ color: tokens.textMuted, lineHeight: 1.8, mb: "2rem" }}>
            Have a role, a project, or just want to say hello? I'm always happy to
            talk about engineering, AI, or building things that last.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", mb: "2rem" }}>
            {infoCards.map((card) => (
              <Box
                key={card.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  p: "1rem 1.25rem",
                  background: tokens.surface,
                  border: `1px solid ${tokens.border}`,
                  borderRadius: "14px",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                  "&:hover": { borderColor: tokens.primary, transform: "translateX(4px)" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: tokens.gradientSoft,
                  }}
                >
                  <card.icon sx={{ color: tokens.accent }} />
                </Box>
                <Box>
                  <Typography sx={{ color: tokens.textMuted, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {card.label}
                  </Typography>
                  <Typography sx={{ color: tokens.text, fontWeight: 600 }}>
                    {card.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <a href="mailto:chebroluvarshik@gmail.com" aria-label="Email">
              <SocialIcon network="email" bgColor={tokens.surfaceAlt} fgColor="#39E1EC" style={{ height: 46, width: 46 }} />
            </a>
            <SocialIcon url="https://github.com/varshikchebrolu" target="_blank" fgColor="#ffffff" bgColor={tokens.surfaceAlt} style={{ height: 46, width: 46 }} />
            <SocialIcon url="https://www.linkedin.com/in/varshikchebrolu/" bgColor={tokens.surfaceAlt} fgColor="#0A66C2" target="_blank" style={{ height: 46, width: 46 }} />
          </Box>
        </Box>

        {/* Right: form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: "1 1 420px",
            maxWidth: "560px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            p: { xs: "1.5rem", md: "2.5rem" },
            background: tokens.surface,
            border: `1px solid ${tokens.border}`,
            borderRadius: "20px",
          }}
        >
          <TextField
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            fullWidth
            sx={fieldSx}
          />
          <TextField
            placeholder="Your email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            fullWidth
            sx={fieldSx}
          />
          <TextField
            placeholder="Your message"
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            fullWidth
            sx={fieldSx}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendRoundedIcon />}
            sx={{
              alignSelf: "flex-start",
              px: "2rem",
              py: "0.75rem",
              fontSize: "1rem",
              borderRadius: "999px",
              color: "#0a0a0f",
              background: tokens.gradient,
              boxShadow: "0 8px 24px rgba(125,91,255,0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 12px 30px rgba(125,91,255,0.5)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSuccessMessage("")} sx={{ borderRadius: "10px" }}>
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" onClose={() => setErrorMessage("")} sx={{ borderRadius: "10px" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Section>
  );
}
