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
  productWomenJump,
  productWomenJeans,
  productWomenKurti,
  productLOONEYTUNES,
  productWomenTshirt,
  productHubberholme,
  productWomenshirts,
  productCampusSutra,
  productBewakoofAir,
  productHARRYPOTTER,
  productWomenJoggers,
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
import { FaUser } from "react-icons/fa";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function WomenNav() {
  const [scrollY, setScrollY] = useState(0);
  // const [active, setActive] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setIsDropDownOpen(dropdown);
  };
  const handleMouseLeave = () => {
    setIsDropDownOpen(null);
  };

  // const handleClick = (event) => {
  //   setActive(event.target.id);
  // };
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
                  className={scrollY > 43 ? "navdropbox tW2" : "navdropbox tW"}>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenTshirt }}>
                    <Text className="navdropboxh1 mT10">
                      Oversized T-Shirts
                    </Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenshirts }}>
                    <Text className="navdropboxh1">Shirts</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenTshirt }}>
                    <Text className="navdropboxh1">T-Shirts</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenKurti }}>
                    <Text className="navdropboxh1">Kurti</Text>
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
                  className={scrollY > 43 ? "navdropbox bW2" : "navdropbox bW"}>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenJoggers }}>
                    <Text className="navdropboxh1 mT10">Joggers</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenJeans }}>
                    <Text className="navdropboxh1">Jeans</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWomenJump }}>
                    <Text className="navdropboxh1">Jumpsuit</Text>
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
                    state={{ data: productBlack }}>
                    <Text className="navdropboxh1 mT10"> Black</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productBrown }}>
                    <Text className="navdropboxh1">Brown</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productWhite }}>
                    <Text className="navdropboxh1">White</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productGrey }}>
                    <Text className="navdropboxh1">Grey</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productOrange }}>
                    <Text className="navdropboxh1 mT10"> Orange</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productBlue }}>
                    <Text className="navdropboxh1">Blue</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productGreen }}>
                    <Text className="navdropboxh1">Green</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productRed }}>
                    <Text className="navdropboxh1">Red</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productPink }}>
                    <Text className="navdropboxh1 mT10">Pink</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productYellow }}>
                    <Text className="navdropboxh1">Yellow</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productPurple }}>
                    <Text className="navdropboxh1">Purple</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productL }}>
                    <Text className="navdropboxh1">Lavender</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productKhahki }}>
                    <Text className="navdropboxh1">Khaki</Text>
                  </Link>
                  <Link
                    to="/category"
                    style={{ textDecoration: "none" }}
                    state={{ data: productMaroon }}>
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
            <ListItem className="navIconL">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<FaUser fontSize="25px" color="grey" />}
              />
            </ListItem>
            <ListItem className="navIconL">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<AiOutlineHeart fontSize="25px" color="grey" />}
              />
            </ListItem>
            <ListItem className="navIconL">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Call Sage"
                style={{ background: "transparent", border: "none" }}
                icon={<BsHandbag fontSize="25px" color="grey" />}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
}
