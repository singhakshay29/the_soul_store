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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import eye from "../assets/eye.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import bB from "../assets/bB.jpg";
import bP from "../assets/bP.jpg";
import wB from "../assets/wB.jpg";
import blueBanner from "../assets/bluebanner.jpg";
import bL from "../assets/bL.jpg";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

export default function MenNav() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("");
  const { isLoggedIn } = useSelector((state) => state.user);
  const { results } = useSelector((state) => state.app.cart);
  const { wishlist } = useSelector((state) => state.app);
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <Flex
            justifyContent="space-between"
            className={scrollY > 43 ? "navbar navbarscrolledRes" : "navbar"}>
            <Box style={{ padding: "1rem" }}>
              <FaBars
                onClick={onOpen}
                ref={btnRef}
                style={{ fontSize: "2rem", color: "grey" }}
              />
            </Box>
            <Box>
              <img
                src={eye}
                alt=""
                className={scrollY > 43 ? "eyelog" : "eyeRes"}
              />
              <Image
                src={newlogo}
                alt="logo"
                className={scrollY > 43 ? "log" : "logoImgRes"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
              }}>
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "17px",
                }}>
                <FaSearch
                  style={{
                    fontSize: "22px",
                    color: "grey",
                  }}
                />
              </Box>
              {isDropdownOpen === "User" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("User")}
                  onMouseLeave={() => handleMouseLeave()}
                  className="navdropbox uPT">
                  <Text className="navdropboxh1 mT10"> Orders</Text>
                  <Text className="navdropboxh1"> Profile</Text>
                  <Text className="navdropboxh1">Log Out</Text>
                </Box>
              )}
              <Link to="/wishlist">
                {isLoggedIn && (
                  <>
                    {wishlist?.length > 0 && (
                      <Text className="length2">{wishlist?.length}</Text>
                    )}
                  </>
                )}
                <AiOutlineHeart
                  className={
                    active === "2"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"2"}
                  onClick={handleClick}
                />
              </Link>
              <Link to="/shoppingcart">
                {isLoggedIn && (
                  <>
                    {results > 0 && (
                      <Text className="cartLength2">{results}</Text>
                    )}
                  </>
                )}
                <BsHandbag
                  className={
                    active === "3"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"3"}
                  onClick={handleClick}
                />
              </Link>
            </Box>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent
              style={{
                zIndex: 10,
                backgroundColor: "green",
              }}>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Flex
            justifyContent="space-between"
            className={scrollY > 43 ? "navbar navbarscrolled" : "navbar"}>
            <Box display="flex" textAlign="center" maxWidth="900px">
              <img
                src={eye}
                alt=""
                className={scrollY > 43 ? "eyelog" : "eye"}
              />
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
                            state={{
                              data: productBewakoof,
                              Heading: "Bewakoof® Collection",
                            }}>
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
                            <Text className="navdropboxh1">
                              Bewakoof Air® 1.0
                            </Text>
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
                            <Text className="navdropboxh1 mT10">
                              THE DRY STATE
                            </Text>
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
                            <Text className="navdropboxh1">
                              TALES and STORIES
                            </Text>
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
            </Box>

            <Box minWidth="200px" display="flex">
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "17px",
                }}>
                <FaSearch
                  style={{
                    fontSize: "22px",
                    color: "grey",
                  }}
                />
              </Box>
              <Link
                to="/order"
                style={{ textDecoration: "none", marginLeft: "10px" }}
                onMouseEnter={() => handleMouseEnter("User")}
                onMouseLeave={() => handleMouseLeave()}>
                <FaRegUser
                  className={
                    active === "1"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"1"}
                  onClick={handleClick}
                  onMouseEnter={() => handleMouseEnter("User")}
                />
              </Link>
              {isDropdownOpen === "User" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("User")}
                  onMouseLeave={() => handleMouseLeave()}
                  className="navdropbox uPT">
                  <Text className="navdropboxh1 mT10"> Orders</Text>
                  <Text className="navdropboxh1"> Profile</Text>
                  <Text className="navdropboxh1">Log Out</Text>
                </Box>
              )}

              <Link to="/wishlist">
                {isLoggedIn && (
                  <>
                    {wishlist?.length > 0 && (
                      <Text className="length">{wishlist?.length}</Text>
                    )}
                  </>
                )}

                <AiOutlineHeart
                  className={
                    active === "2"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"2"}
                  onClick={handleClick}
                />
              </Link>
              <Link to="/shoppingcart">
                {isLoggedIn && (
                  <>
                    {results && <Text className="cartLength">{results}</Text>}
                  </>
                )}
                <BsHandbag
                  className={
                    active === "3"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"3"}
                  onClick={handleClick}
                />
              </Link>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
}
