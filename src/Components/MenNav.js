import React from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MenNav() {
  return (
    <Container
      className="navbar"
      zIndex="1000"
      position="fixed"
      backgroundColor="white"
      width="100%">
      <Image src={logo} alt="logo" width="130px" mx="2rem" />
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
          SNEAKERS
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        <Button className="navbutton" width="150px">
          ACCESSORIES
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        <Button className="navbutton" width="150px">
          COLLECTIONS
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
        <Box display="flex" marginRight="15%">
          <Button className="navbuttonicon">
            <BsSearch fontSize="25px" color="grey" />
          </Button>
          <Button className="navbuttonicon">
            <FaUser fontSize="25px" color="grey" />
          </Button>
          <Link to="/wishlist">
            <Button className="navbuttonicon" style={{ marginTop: "12px" }}>
              <AiOutlineHeart fontSize="28px" color="grey" />
            </Button>
          </Link>

          <Button className="navbuttonicon">
            <BsHandbag fontSize="25px" color="grey" />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
