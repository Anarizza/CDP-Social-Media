import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Row,
  BottomRow,
  Column,
  ColumnIcon,
  Heading,
  AppName,
} from "./FooterStyles";
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

const Footer = () => {
  return (
    <Box>
    <Container>
      <Row>
      <Column>
        <Heading>Office</Heading>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          Ortigas Center, Pasig City, Philippines
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          timeline@outlook.com
        </Link>
      </Column>
      <Column>
        <Heading>Links</Heading>
        <Link
          to='/about'
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          About Us
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          Contacts
        </Link>
      </Column>
      <Column>
        <Heading>Legal</Heading>
        <Link
          to='/termsofservices'
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          Terms and Conditions
        </Link>
        <Link
          to='/privacypolicy'
          style={{ textDecoration: "none", color: "white", fontSize: "12px" }}
        >
          Privacy Policy
        </Link>
      </Column>
      <Column>
      <AppName>
      <div className="bars">
        <img src="./assets/logo.png" width="40px" height="40px" />
      </div>
      <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            {" "}
            <div className="imeline">IMELINE</div>
          </Typography>
          </AppName>
      <ColumnIcon>
        <a href="#" class="fa fa-facebook" style={{ textDecoration: "none", color: "white" }}></a>
        <a href="#" class="fa fa-twitter" style={{ textDecoration: "none", color: "white" }}></a>
        <a href="#" class="fa fa-youtube" style={{ textDecoration: "none", color: "white" }}></a>
        <a href="#" class="fa fa-instagram" style={{ textDecoration: "none", color: "white" }}></a>
        <a href="#" class="fa fa-google" style={{ textDecoration: "none", color: "white" }}></a>
      </ColumnIcon>
      </Column>
      </Row>
      <BottomRow>
        <footer 
          style={{ 
            textDecoration: "none", 
            color: "white" 
          }}>TIMELINE © 2023 - All Rights Reserved
        </footer>
      </BottomRow>
    </Container>
    </Box>
  )
}

export default Footer