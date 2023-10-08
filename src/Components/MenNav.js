import React from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Box, Button, Container, Text } from "@chakra-ui/react";

export default function MenNav() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setIsDropDownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setIsDropDownOpen(null);
  };

  const handleClick = (event) => {
    setActive(event.target.id);
  };

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
      <Image src={logo} alt="logo" width="130px" />
      <Box display="flex" textAlign="center" marginLeft="16%" marginTop="-75">
        <Button
          onMouseEnter={() => handleMouseEnter("TOPWEAR")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton">
          TOPWEAR
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "TOPWEAR" && (
          <Box
            onMouseEnter={() => handleMouseEnter("TOPWEAR")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button
          onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton"
          width="130px">
          BOTTOMWEAR
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "BOTTOMWEAR" && (
          <Box
            onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox mL7p">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button
          onMouseEnter={() => handleMouseEnter("SNEAKERS")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton"
          width="180px">
          SNEAKERS
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "SNEAKERS" && (
          <Box
            onMouseEnter={() => handleMouseEnter("SNEAKERS")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox mL16p">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button
          onMouseEnter={() => handleMouseEnter("ACCESSORIES")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton"
          width="150px">
          ACCESSORIES
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "ACCESSORIES" && (
          <Box
            onMouseEnter={() => handleMouseEnter("ACCESSORIES")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox mL23p">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button
          onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton"
          width="150px">
          COLLECTIONS
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "COLLECTIONS" && (
          <Box
            onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox mL32p">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button
          onMouseEnter={() => handleMouseEnter("SHOP")}
          onMouseLeave={() => handleMouseLeave()}
          className="navbutton"
          width="150px">
          SHOP BY THEMES
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        {isDropdownOpen === "SHOP" && (
          <Box
            onMouseEnter={() => handleMouseEnter("SHOP")}
            onMouseLeave={() => handleMouseLeave()}
            className="navdropbox mL41p">
            <Text className="navdropboxh1 mT10"> All Oversized</Text>
            <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
            <Text className="navdropboxh1">All Graphic T-shirts All</Text>
            <Text className="navdropboxh1">Solid T-shirts</Text>
          </Box>
        )}
        <Button className="navbutton" width="110px">
          MEMBERSHIP
          <RiArrowDropDownLine fontSize="20px" />
        </Button>
        <Box display="flex" marginRight="15%">
          <Button className="navbuttonicon">
            <BsSearch fontSize="25px" color="grey" />
          </Button>

          <FaUser
            className={
              active === "1" ? "activeIcon navbuttonicon" : "navbuttonicon"
            }
            id={"1"}
            onClick={handleClick}
            onMouseEnter={() => handleMouseEnter("Fa")}
            onMouseLeave={() => handleMouseLeave()}
          />

          {isDropdownOpen === "Fa" && (
            <Box
              onMouseEnter={() => handleMouseEnter("Fa")}
              onMouseLeave={() => handleMouseLeave()}
              className="navdropbox mL32p">
              <Text className="navdropboxh1 mT10"> All Oversized</Text>
              <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
              <Text className="navdropboxh1">All Graphic T-shirts All</Text>
              <Text className="navdropboxh1">Solid T-shirts</Text>
            </Box>
          )}

          <Link to="/wishlist">
            <AiOutlineHeart
              className={
                active === "2" ? "activeIcon navbuttonicon" : "navbuttonicon"
              }
              id={"2"}
              onClick={handleClick}
              fontSize="28px"
            />
          </Link>
          <Link to="/shoppingcart">
            <BsHandbag
              className={
                active === "3" ? "activeIcon navbuttonicon" : "navbuttonicon"
              }
              id={"3"}
              onClick={handleClick}
            />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
