import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Row,
  BottomRow,
  Column,
  ColumnIcon,
  FooterLink,
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
        <FooterLink href="#">Ortigas Center, Pasig City, Philippines</FooterLink>
        <FooterLink href="#">timeline@outlook.com</FooterLink>
      </Column>
      <Column>
        <Heading>Links</Heading>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Contacts</FooterLink>
      </Column>
      <Column>
        <Heading>Legal</Heading>
        <FooterLink href="#">Terms and Conditions</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
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