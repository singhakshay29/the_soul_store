import React from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Box, Button, Container, Image } from "@chakra-ui/react";

export default function WomenNav() {
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
  );
}
