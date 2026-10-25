import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import EmailIcon from "@mui/icons-material/Email";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";

export default function Contact() {
  const cardStyles = {
    width: "70%",
    maxWidth: "300px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    gap: "3rem",
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
  };

  const iconStyles = {
    fontSize: "3rem",
    color: "#7D3DE4",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

      setSuccessMessage("Message sent successfully! Thank You!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Error sending message. Please try again later.");
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "1rem",
        gap: "3rem",
        backgroundImage: `url(https://fwrqd2wnfbppmvdo.public.blob.vercel-storage.com/whitebg.jpg)`,
        backgroundSize: "contain",
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: "black",
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "1rem",
          fontWeight: "bold",
        }}
        id="contact"
      >
        Contact
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center" }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              ...cardStyles,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 25px rgba(94, 33, 224, 0.3)"
              },
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <PhoneIphoneRoundedIcon sx={{ ...iconStyles, transition: "transform 0.3s ease" }} />
              <Typography fontWeight={"bold"} fontSize="1.1rem">+1 (970) 690-2665</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              ...cardStyles,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 25px rgba(94, 33, 224, 0.3)"
              },
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <MapsHomeWorkRoundedIcon sx={{ ...iconStyles, transition: "transform 0.3s ease" }} />
              <Typography fontWeight={"bold"}>
                Fort Collins, Colorado, 80521
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              ...cardStyles,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 25px rgba(94, 33, 224, 0.3)"
              },
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <EmailIcon sx={{ ...iconStyles, transition: "transform 0.3s ease" }} />
              <Typography fontWeight={"bold"}>chebroluvarshik@gmail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Social Media Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        <a href="mailto:chebroluvarshik@gmail.com">
          <EmailIcon sx={{ fontSize: "3rem", color: "#7D3DE4", transition: "transform 0.3s ease", cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }} />
        </a>
        <SocialIcon
          url="https://github.com/varshikchebrolu"
          target="_blank"
          fgColor="#ffffff"
          bgColor="#24292f"
          style={{ height: 48, width: 48, transition: "transform 0.3s ease", cursor: "pointer" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/varshikchebrolu/"
          bgColor="#0A66C2"
          fgColor="#FFFFFF"
          target="_blank"
          style={{ height: 48, width: 48, transition: "transform 0.3s ease", cursor: "pointer" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: '2rem'
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "20px",
            padding: "3rem",
            boxShadow: "0px 10px 40px rgba(94, 33, 224, 0.2)",
            color: "white",
            width: { xs: '85vw', md: '60vw', lg: '50vw' },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: "2rem",
              background: "linear-gradient(90deg, #FFD700 0%, #5E21E0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Message Me
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Box display={"flex"} flexDirection="column" gap={"1rem"}>
              <Box>
                <TextField
                  placeholder="Your name *"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  InputProps={{ sx: { borderRadius: "10px", fontWeight: "500" } }}
                />
              </Box>
              <Box>
                <TextField
                  placeholder="Your email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  InputProps={{ sx: { borderRadius: "10px", fontWeight: "500" } }}
                />
              </Box>
              <Box>
                <TextField
                  placeholder="Your message *"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  InputProps={{ sx: { borderRadius: "10px", fontWeight: "400" } }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #FFD700 0%, #5E21E0 100%)",
                  padding: "1rem 4rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0px 5px 20px rgba(94, 33, 224, 0.4)",
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
            <Alert
              severity="success"
              variant="filled"
              onClose={() => setSuccessMessage("")}
              sx={{ borderRadius: "10px" }}
            >
              {successMessage}
            </Alert>
          </Snackbar>
          <Snackbar
            open={!!errorMessage}
            autoHideDuration={6000}
            onClose={() => setErrorMessage("")}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              severity="error"
              variant="filled"
              onClose={() => setErrorMessage("")}
              sx={{ borderRadius: "10px" }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}