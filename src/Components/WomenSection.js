import React from "react";
import Footer from "./Footer";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import logo from "../assets/logo.png";
import ImageSlider from "./ImageSlider";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Box, Button, Card, Container, Image } from "@chakra-ui/react";

export default function WomenSection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container className={scrollY > 50 ? "navbar navbarscrolled" : "navbar"}>
        <Image
          src={logo}
          alt="logo"
          width="130px"
          mx="2rem"
          style={{ marginTop: "-50", padding: "0" }}
        />
        <Box display="flex" textAlign="center" marginLeft="16%" marginTop="-75">
          <Button className="navbutton">
            TOPWEAR
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="130px">
            BOTTOMWEAR
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="180px">
            SHOES & ACCESSORIES
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="150px">
            SHOP BY THEMES
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="110px">
            MEMBERSHIP
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Box display="flex" marginLeft="10%">
            <Button className="navbuttonicon">
              <BsSearch fontSize="25px" color="grey" />
            </Button>
            <Button className="navbuttonicon">
              <FaUser fontSize="25px" color="grey" />
            </Button>
            <Button className="navbuttonicon">
              <AiOutlineHeart fontSize="25px" color="grey" />
            </Button>
            <Button className="navbuttonicon">
              <BsHandbag fontSize="25px" color="grey" />
            </Button>
          </Box>
        </Box>
      </Container>
      <ImageSlider w1={w1} w2={w2} w3={w3} w4={w4} />
      <Card className="heading1">COLLECTIONS</Card>
      <Footer />
    </>
  );
}
