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
} from "@mui/material";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import emailjs from "emailjs-com";

export default function Contact() {
  const cardStyles = {
    width: "38vh",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    gap: "3rem",
    borderRadius: "10px",
  };

  const iconStyles = {
    fontSize: "3rem",
    color: "primary.main",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    try {
      await emailjs.sendForm(
        "service_ab39axs",
        "template_portfolio",
        event.target,
        "2SrRgYQ2dhzEZejOt"
      );
    } catch (error) {
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
        paddingLeft: "3rem",
        gap: "3rem",
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: "whitesmoke",
          alignSelf: "center",
          fontSize: "2rem",
          paddingBottom: "3rem",
          fontWeight: "bold",
        }}
      >
        Contact
      </Typography>
      <Box
        display="flex"
        gap="3vh"
        justifyContent="space-evenly"
        flexWrap={"wrap"}
      >
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
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            maxWidth: "40rem",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "3rem",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            fontFamily={"sans-serif"}
            fontWeight={"bold"}
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "#f5f3f4", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ backgroundColor: "#f5f3f4", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={12}>
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
                  sx={{ backgroundColor: "#f5f3f4", borderRadius: "5px" }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "end",
                marginTop: "1.5rem",
                marginRight: "1rem",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </Box>
        <Box
          sx={{
            maxWidth: "12rem",
            padding: "2rem",
            marginLeft:'5rem'
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            marginBottom="1.5rem"
          >
            Get In Touch
          </Typography>
          <Typography fontSize="16px" lineHeight="1.6">
            Please feel free to contact me via phone or email, or use the
            provided contact card to reach out.
          </Typography>
          <Typography
            fontSize="16px"
            lineHeight="1.6"
            marginTop="1rem"
          >
            I am excited to hear from you!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
