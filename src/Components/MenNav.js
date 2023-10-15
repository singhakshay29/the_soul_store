import {
  productL,
  productRed,
  productPink,
  productGrey,
  productBlue,
  productWhite,
  productBrown,
  productBlack,
  productKotty,
  productGreen,
  productYellow,
  productPurple,
  productKhahki,
  productMaroon,
  productOrange,
  productMARVEL,
  productPEANUTS,
  productBewakoof,
  productTOMJERRY,
  productDRYSTATE,
  productCOCACOLA,
  productBelliskey,
  productLOONEYTUNES,
  productHubberholme,
  productCampusSutra,
  productBewakoofAir,
  productHARRYPOTTER,
  productCHIMPAAANZEE,
  productLoungeDreams,
  productInstafabPlus,
  productRICKANDMORTY,
  productStyleQuotient,
  productTALESSTORIES,
  productDCMERCHANDISE,
  productCARTOONNETWORK,
  productDISNEYMERCHANDISE,
  productGARFIELDMERCHANDISE,
  productMINIONSMERCHANDISE,
  productNARUTOMERCHANDISE,
  whitebrandName,
  blackbrandName,
  pinkbrandName,
  brownbrandName,
  greybrandName,
  orangebrandName,
  bluebrandName,
  GreenbrandName,
  RedbrandName,
  YellowbrandName,
  PurplebrandName,
  LbrandName,
  KhahkibrandName,
  MaroonbrandName,
  productMenShirt,
  productMenTshirt,
  productMenJoggers,
  productMenJeans,
  productMenShorts,
  brandNameMT,
  ColorNameMT,
  brandNameMS,
  ColorNameMS,
  productMenSweater,
  colorNameMSW,
  brandNameMSW,
  productMenKurta,
  colorNameKu,
  brandNameKu,
  productMenHoodie,
  colorNameHo,
  brandNameHo,
  productMenTracksuit,
  colorNameTr,
  brandNameTr,
  colorNameJg,
  brandNameJg,
  colorNameMJS,
  brandNameMJS,
  brandNameSh,
  colorNameSh,
  colorNameTRS,
  brandNameTRS,
  productMenTrouser,
} from "../service";
import {
  Box,
  List,
  Flex,
  Text,
  Image,
  ListItem,
  Container,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import eye from "../assets/eye.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { BsHandbag } from "react-icons/bs";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import bB from "../assets/bB.jpg";
import bP from "../assets/bP.jpg";
import wB from "../assets/wB.jpg";
import blueBanner from "../assets/bluebanner.jpg";
import bL from "../assets/bL.jpg";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";

import { RiArrowDropDownLine } from "react-icons/ri";

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
    <>
      <Container className={scrollY > 43 ? "navbar navbarscrolled" : "navbar"}>
        <Box display="flex" textAlign="center">
          <img src={eye} alt="" className={scrollY > 43 ? "eyelog" : "eye"} />
          <Image
            src={newlogo}
            alt="logo"
            className={scrollY > 43 ? "log" : "logoImg"}
          />
          <List className={scrollY > 43 ? "list2" : "list"}>
            <ListItem
              className={scrollY > 43 ? "navlist2" : "navList"}
              onMouseEnter={() => handleMouseEnter("TOPWEAR")}
              onMouseLeave={() => handleMouseLeave()}>
              TOPWEAR
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<RiArrowDropDownLine className="icon" />}
              />
              {isDropdownOpen === "TOPWEAR" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("TOPWEAR")}
                  onMouseLeave={() => handleMouseLeave()}
                  className={
                    scrollY > 43 ? "navdropbox tw3" : "navdropbox tW3"
                  }>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenTshirt,
                      Heading: "Men's T-Shirts",
                      brandName: brandNameMT,
                      colorName: ColorNameMT,
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1 mT10">
                      Oversized T-Shirts
                    </Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenShirt,
                      Heading: "Men's Shirt",
                      brandName: brandNameMS,
                      colorName: ColorNameMS,
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">Shirts</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenTshirt,
                      Heading: "Men's T-Shirts",
                      brandName: brandNameMT,
                      colorName: ColorNameMT,
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">T-Shirts</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenSweater,
                      colorName: colorNameMSW,
                      brandName: brandNameMSW,
                      Heading: "Men's Sweater",
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">Sweater</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenKurta,
                      colorName: colorNameKu,
                      brandName: brandNameKu,
                      Heading: "Men's Kurta",
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">Kurta</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenHoodie,
                      colorName: colorNameHo,
                      brandName: brandNameHo,
                      Heading: "Men's Hoodie",
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">Hoodie</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenTracksuit,
                      colorName: colorNameTr,
                      brandName: brandNameTr,
                      Heading: "Men's Tracksuit",
                      gender: "Male",
                    }}>
                    <Text className="navdropboxh1">Tracksuit</Text>
                  </Link>
                </Box>
              )}
            </ListItem>
            <ListItem
              className={scrollY > 43 ? "navlist2" : "navList"}
              onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
              onMouseLeave={() => handleMouseLeave()}>
              BOTTOMWEAR
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<RiArrowDropDownLine fontSize="20px" />}
              />
              {isDropdownOpen === "BOTTOMWEAR" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
                  onMouseLeave={() => handleMouseLeave()}
                  className={
                    scrollY > 43 ? "navdropbox bW4" : "navdropbox bW3"
                  }>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      Banner: MBJ,
                      data: productMenJoggers,
                      Heading: "Men's Joggers",
                      gender: "Male",
                      colorName: colorNameJg,
                      brandName: brandNameJg,
                    }}>
                    <Text className="navdropboxh1 mT10">Joggers</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      Banner: MBJS,
                      gender: "Male",
                      data: productMenJeans,
                      Heading: "Men's Jeans",
                      colorName: colorNameMJS,
                      brandName: brandNameMJS,
                    }}>
                    <Text className="navdropboxh1">Jeans</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      Banner: MBS,
                      gender: "Male",
                      data: productMenShorts,
                      Heading: "Men's Shorts",
                    }}>
                    <Text className="navdropboxh1">Shorts</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      gender: "Male",
                      Heading: "Men's Shorts",
                      data: productMenShorts,
                      brandName: brandNameSh,
                      colorName: colorNameSh,
                    }}>
                    <Text className="navdropboxh1">Pyjamas</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMenTrouser,
                      Heading: "Men's Trouser",
                      gender: "Male",
                      colorName: colorNameTRS,
                      brandName: brandNameTRS,
                    }}>
                    <Text className="navdropboxh1">Trouser</Text>
                  </Link>
                </Box>
              )}
            </ListItem>
            <ListItem
              className={scrollY > 43 ? "navlist2" : "navList"}
              onMouseEnter={() => handleMouseEnter(" SHOES BY COLOR")}
              onMouseLeave={() => handleMouseLeave()}>
              SHOES BY COLOR
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<RiArrowDropDownLine fontSize="20px" />}
              />
              {isDropdownOpen === " SHOES BY COLOR" && (
                <Box
                  onMouseEnter={() => handleMouseEnter(" SHOES BY COLOR")}
                  onMouseLeave={() => handleMouseLeave()}
                  className={
                    scrollY > 43 ? "navdropbox sBC2" : "navdropbox sBC"
                  }>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productBlack,
                      Banner: bB,
                      brandName: blackbrandName,
                      Heading: "Women Black Collection",
                    }}>
                    <Text className="navdropboxh1 mT10"> Black</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productBrown,
                      brandName: brownbrandName,
                      Heading: "Women Brown Collection",
                    }}>
                    <Text className="navdropboxh1">Brown</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      Banner: wB,
                      data: productWhite,
                      brandName: whitebrandName,
                      Heading: "Women White Collection",
                    }}>
                    <Text className="navdropboxh1">White</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productGrey,
                      brandName: greybrandName,
                      Heading: "Women Grey Collection",
                    }}>
                    <Text className="navdropboxh1">Grey</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productOrange,
                      brandName: orangebrandName,
                      Heading: "Women Orange Collection",
                    }}>
                    <Text className="navdropboxh1 mT10"> Orange</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productBlue,
                      brandName: bluebrandName,
                      Heading: "Women Blue Collection",
                      Banner: blueBanner,
                    }}>
                    <Text className="navdropboxh1">Blue</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productGreen,
                      brandName: GreenbrandName,
                      Heading: "Women Green Collection",
                    }}>
                    <Text className="navdropboxh1">Green</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productRed,
                      brandName: RedbrandName,
                      Heading: "Women Red Collection",
                    }}>
                    <Text className="navdropboxh1">Red</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productPink,
                      Banner: bP,
                      brandName: pinkbrandName,
                      Heading: "Women Pink Collection",
                    }}>
                    <Text className="navdropboxh1 mT10">Pink</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productYellow,
                      brandName: YellowbrandName,
                      Heading: "Women Yellow Collection",
                    }}>
                    <Text className="navdropboxh1">Yellow</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productPurple,
                      brandName: PurplebrandName,
                      Heading: "Women Purple Collection",
                    }}>
                    <Text className="navdropboxh1">Purple</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productL,
                      Banner: bL,
                      brandName: LbrandName,
                      Heading: "Women Lavender Collection",
                    }}>
                    <Text className="navdropboxh1">Lavender</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productKhahki,
                      brandName: KhahkibrandName,
                      Heading: "Women Khaki Collection",
                    }}>
                    <Text className="navdropboxh1">Khaki</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{
                      data: productMaroon,
                      brandName: MaroonbrandName,
                      Heading: "Women Maroon Collection",
                    }}>
                    <Text className="navdropboxh1">Maroon</Text>
                  </Link>
                </Box>
              )}
            </ListItem>
            <ListItem
              className={scrollY > 43 ? "navlist2" : "navList"}
              onMouseEnter={() => handleMouseEnter("SHOP BY THEMES")}
              onMouseLeave={() => handleMouseLeave()}>
              SHOP BY THEMES
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<RiArrowDropDownLine fontSize="20px" />}
              />
              {isDropdownOpen === "SHOP BY THEMES" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("SHOP BY THEMES")}
                  onMouseLeave={() => handleMouseLeave()}
                  className={
                    scrollY > 43 ? "navdropbox sBT2" : "navdropbox sBT "
                  }>
                  <Flex>
                    <Flex style={{ flexDirection: "column" }}>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productBewakoof }}>
                        <Text className="navdropboxh1 mT10">Bewakoof®</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productTOMJERRY }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL TOM & JERRY MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productCARTOONNETWORK }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL CARTOON NETWORK MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productDISNEYMERCHANDISE }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL DISNEY MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productCHIMPAAANZEE }}>
                        <Text className="navdropboxh1">CHIMPAAANZEE</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productCampusSutra }}>
                        <Text className="navdropboxh1">Campus Sutra</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productLoungeDreams }}>
                        <Text className="navdropboxh1">Lounge Dreams</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productInstafabPlus }}>
                        <Text className="navdropboxh1">Instafab Plus</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productBewakoofAir }}>
                        <Text className="navdropboxh1">Bewakoof Air® 1.0</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productStyleQuotient }}>
                        <Text className="navdropboxh1">Style Quotient</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productRICKANDMORTY }}>
                        <Text className="navdropboxh1">
                          OFFICIAL RICK AND MORTY MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productHARRYPOTTER }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL HARRY POTTER MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productMARVEL }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL MARVEL MERCHANDISE
                        </Text>
                      </Link>
                    </Flex>
                    <Flex style={{ flexDirection: "column" }}>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productBelliskey }}>
                        <Text className="navdropboxh1">Belliskey</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productDRYSTATE }}>
                        <Text className="navdropboxh1 mT10">THE DRY STATE</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productPEANUTS }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL PEANUTS MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productLOONEYTUNES }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL LOONEY TUNES MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productGARFIELDMERCHANDISE }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL GARFIELD MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productMINIONSMERCHANDISE }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL MINIONS MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productNARUTOMERCHANDISE }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL NARUTO MERCHANDISE
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productTALESSTORIES }}>
                        <Text className="navdropboxh1">TALES and STORIES</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productDCMERCHANDISE }}>
                        <Text className="navdropboxh1 mR10p">
                          OFFICIAL DC MERCHANDISE
                        </Text>
                      </Link>{" "}
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productKotty }}>
                        <Text className="navdropboxh1">Kotty</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productHubberholme }}>
                        <Text className="navdropboxh1">Hubberholme</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{ data: productCOCACOLA }}>
                        <Text className="navdropboxh1">
                          OFFICIAL COCA COLA MERCHANDISE
                        </Text>
                      </Link>
                    </Flex>
                  </Flex>
                </Box>
              )}
            </ListItem>
            <ListItem className={scrollY > 43 ? "navlist2" : "navList"}>
              MEMBERSHIP
            </ListItem>
          </List>
          <List
            style={{
              display: "flex",
              marginLeft: "6rem",
              marginTop: 0,
              alignContent: "center",
            }}>
            <ListItem style={{ alignItems: "center", paddingTop: "15px" }}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<FaSearch fontSize="23px" color="grey" />}
              />
            </ListItem>
            <ListItem
              className={active === "1" ? "activenav navIconL" : "navIconL"}
              id={"1"}
              onClick={handleClick}
              onMouseEnter={() => handleMouseEnter("Fa")}
              onMouseLeave={() => handleMouseLeave()}>
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                className="navI"
                icon={<FaRegUser />}
              />
            </ListItem>
            <Link to="/wishlist">
              <ListItem className="navIconL" onClick={handleClick}>
                <IconButton
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  style={{ background: "transparent", border: "none" }}
                  icon={<AiOutlineHeart fontSize="25px" color="grey" />}
                />
              </ListItem>
            </Link>
            <Link to="/shoppingcart">
              <ListItem className="navIconL">
                <IconButton
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  style={{ background: "transparent", border: "none" }}
                  icon={<BsHandbag fontSize="25px" color="grey" />}
                />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Container>
    </>
    // <Container className={scrollY > 50 ? "navbar navbarscrolled" : "navbar"}>
    //   <Image src={logo} alt="logo" width="130px" />
    //   <Box display="flex" textAlign="center" marginLeft="16%" marginTop="-75">
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("TOPWEAR")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton">
    //       TOPWEAR
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "TOPWEAR" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("TOPWEAR")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton"
    //       width="130px">
    //       BOTTOMWEAR
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "BOTTOMWEAR" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("BOTTOMWEAR")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox mL7p">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("SNEAKERS")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton"
    //       width="180px">
    //       SNEAKERS
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "SNEAKERS" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("SNEAKERS")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox mL16p">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("ACCESSORIES")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton"
    //       width="150px">
    //       ACCESSORIES
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "ACCESSORIES" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("ACCESSORIES")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox mL23p">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton"
    //       width="150px">
    //       COLLECTIONS
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "COLLECTIONS" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("COLLECTIONS")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox mL32p">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button
    //       onMouseEnter={() => handleMouseEnter("SHOP")}
    //       onMouseLeave={() => handleMouseLeave()}
    //       className="navbutton"
    //       width="150px">
    //       SHOP BY THEMES
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     {isDropdownOpen === "SHOP" && (
    //       <Box
    //         onMouseEnter={() => handleMouseEnter("SHOP")}
    //         onMouseLeave={() => handleMouseLeave()}
    //         className="navdropbox mL41p">
    //         <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //         <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //         <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //         <Text className="navdropboxh1">Solid T-shirts</Text>
    //       </Box>
    //     )}
    //     <Button className="navbutton" width="110px">
    //       MEMBERSHIP
    //       <RiArrowDropDownLine fontSize="20px" />
    //     </Button>
    //     <Box display="flex" marginRight="15%">
    //       <Button className="navbuttonicon">
    //         <BsSearch fontSize="25px" color="grey" />
    //       </Button>

    //       <FaUser
    //         className={
    //           active === "1" ? "activeIcon navbuttonicon" : "navbuttonicon"
    //         }
    //         id={"1"}
    //         onClick={handleClick}
    //         onMouseEnter={() => handleMouseEnter("Fa")}
    //         onMouseLeave={() => handleMouseLeave()}
    //       />

    //       {isDropdownOpen === "Fa" && (
    //         <Box
    //           onMouseEnter={() => handleMouseEnter("Fa")}
    //           onMouseLeave={() => handleMouseLeave()}
    //           className="navdropbox mL32p">
    //           <Text className="navdropboxh1 mT10"> All Oversized</Text>
    //           <Text className="navdropboxh1"> New Classic Fit T-shirts</Text>
    //           <Text className="navdropboxh1">All Graphic T-shirts All</Text>
    //           <Text className="navdropboxh1">Solid T-shirts</Text>
    //         </Box>
    //       )}

    //       <Link to="/wishlist">
    //         <AiOutlineHeart
    //           className={
    //             active === "2" ? "activeIcon navbuttonicon" : "navbuttonicon"
    //           }
    //           id={"2"}
    //           onClick={handleClick}
    //           fontSize="28px"
    //         />
    //       </Link>
    //       <Link to="/shoppingcart">
    //         <BsHandbag
    //           className={
    //             active === "3" ? "activeIcon navbuttonicon" : "navbuttonicon"
    //           }
    //           id={"3"}
    //           onClick={handleClick}
    //         />
    //       </Link>
    //     </Box>
    //   </Box>
    // </Container>
  );
}
