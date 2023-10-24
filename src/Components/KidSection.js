import React from "react";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";
import logo from "../assets/logo.png";
import ImageSlider from "./ImageSlider";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { Box, Button, Container, Image } from "@chakra-ui/react";

export default function KidSection() {
  return (
    <>
      <Container className="navbar">
        <Image src={logo} alt="logo" width="130px" mx="2rem" marginTop="-2" />
        <Box display="flex" textAlign="center" marginLeft="16%" marginTop="-75">
          <Button className="navbutton">
            BOYS
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="130px">
            GIRLS
            <RiArrowDropDownLine fontSize="20px" />
          </Button>
          <Button className="navbutton" width="180px">
            VACATION WEAR
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
      <ImageSlider w1={k1} w2={k2} w3={k3} w4={k4} />
    </>
  );
}
