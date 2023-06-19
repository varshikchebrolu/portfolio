import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Image } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import homeLogo from "../../utils/main_logo.jpeg"

export default function Header() {
    return (
        <Box sx={{color:"rgb(242, 247, 239)"}}>
            <AppBar psotion="static">
                <Toolbar sx={{justifyContent:'space-between',backgroundColor:'black'}}>
                    
                    <Box>
                        <img alt="Main_logo" src={homeLogo} style={{maxWidth:'20%'}}/>
                    </Box>
                    <Box>
                        <Button color="inherit"> Home </Button>
                        <Button color="inherit"> About </Button>
                        <Button color="inherit"> Skills </Button>
                        <Button color="inherit"> Experience </Button>
                        <Button color="inherit"> Resume </Button>
                        <Button color="inherit"> Projects </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
