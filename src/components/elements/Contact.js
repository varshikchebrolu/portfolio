import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Container,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import emailjs from "emailjs-com";
import bg from "../utils/whitebg.jpg";

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
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        paddingLeft: "1rem", // Adjust padding for mobile view
        gap: "3rem",
        backgroundImage: `url(${bg})`,
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
        paddingLeft={'4rem'}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyles}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <PhoneIphoneRoundedIcon sx={iconStyles} />
              <Typography fontWeight={"bold"}>9706902665</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyles}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <MapsHomeWorkRoundedIcon sx={iconStyles} />
              <Typography fontWeight={"bold"}>
                Fort Collins, Colorado, 80521.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyles}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <ChatBubbleRoundedIcon sx={iconStyles} />
              <Typography fontWeight={"bold"}>
                chebroluvarshik@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "4rem",
            padding: "2rem",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            color: "white",
            width: "50vw",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
            marginBottom={"1rem"}
          >
            Message Me
          </Typography>
          <form
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box display={"flex"} flexDirection="column" gap={"1rem"}>
              <Box>
                <TextField
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "100px" }}
                  InputProps={{ sx: { borderRadius: "100px" } }}
                />
              </Box>
              <Box>
                <TextField
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "100px" }}
                  InputProps={{ sx: { borderRadius: "100px" } }}
                />
              </Box>
              <Box>
                <TextField
                  placeholder="Enter Your message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "30px" }}
                  InputProps={{ sx: { borderRadius: "30px" } }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: "end",
                marginTop: "1.5rem",
                marginRight: "1rem",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
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
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </Box>
        <Box
          sx={{
            maxWidth: "12rem",
            padding: "2rem",
            marginLeft: "5rem",
          }}
        >
          <Typography variant="h5" fontWeight="bold" marginBottom="1.5rem">
            Get In Touch
          </Typography>
          <Typography fontSize="16px" lineHeight="1.6">
            Please feel free to contact me via phone or email, or use the
            provided contact card to reach out.
          </Typography>
          <Typography fontSize="16px" lineHeight="1.6" marginTop="1rem">
            I am excited to hear from you!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
