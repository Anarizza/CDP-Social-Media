import React from "react";
import {
  Box,
  Container,
  Row,
  BottomRow,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

const Footer = () => {
  return (
    <Box>
    <Container>
      <Row>
      <Column>
        <Heading>About Us</Heading>
        <FooterLink href="#">Our story</FooterLink>
        <FooterLink href="#">Benefits</FooterLink>
        <FooterLink href="#">Team</FooterLink>
      </Column>
      <Column>
        <Heading>Services</Heading>
        <FooterLink href="#">Campaign</FooterLink>
        <FooterLink href="#">Branding</FooterLink>
      </Column>
      <Column>
        <Heading>Legal</Heading>
        <FooterLink href="#">Terms and Conditions</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of use</FooterLink>
      </Column>
      </Row>
      <BottomRow>
      <Column>
        <a href="#" class="fa fa-facebook" style={{ textDecoration: "none", color: "white" }}></a>
      </Column>
      <Column>
        <a href="#" class="fa fa-twitter" style={{ textDecoration: "none", color: "white" }}></a>
      </Column>
      <Column>
        <a href="#" class="fa fa-youtube" style={{ textDecoration: "none", color: "white" }}></a>
      </Column>
      <Column>
        <a href="#" class="fa fa-instagram" style={{ textDecoration: "none", color: "white" }}></a>
      </Column>
      <Column>
        <a href="#" class="fa fa-google" style={{ textDecoration: "none", color: "white" }}></a>
      </Column>
      </BottomRow>
    </Container>
    </Box>
  )
}

export default Footer