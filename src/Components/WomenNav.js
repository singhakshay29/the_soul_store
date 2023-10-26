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
  colorNameJS,
  brandNameJS,
  colorName,
  brandName,
  colorNameS,
  brandNameS,
  colorNameJP,
  brandNameJP,
  colorNameJ,
  brandNameJ,
  colorNameK,
  brandNameK,
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
  BewakoofColorName,
  TOMJERRYColorName,
  CARTOONNETWORKColorName,
  DISNEYMERCHANDISEColorName,
  CHIMPAAANZEEColorName,
  CampusSutraColorName,
  LoungeDreamsColorName,
  InstafabColorName,
  StyleQuotientColorName,
  BewakoofAirColorName,
  RICKANDMORTYColorName,
  HARRYPOTTERColorName,
  MARVELColorName,
  BelliskeyColorName,
  COCACOLAColorName,
  HubberholmeColorName,
  KottyColorName,
  DCMERCHANDISEColorName,
  TALESSTORIESColorName,
  NARUTOMERCHANDISEColorName,
  MINIONSMERCHANDISEColorName,
  GARFIELDMERCHANDISEColorName,
  LOONEYTUNESColorName,
  PEANUTSColorName,
  DRYSTATEColorName,
} from "../service";
import {
  Box,
  List,
  Flex,
  Text,
  Image,
  ListItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import eye from "../assets/eye.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import bannerT from "../assets/bannerT.jpg";
import { BsHandbag } from "react-icons/bs";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import bannerBS from "../assets/bannerBS.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import jog from "../assets/jog.jpg";
import bB from "../assets/bB.jpg";
import bP from "../assets/bP.jpg";
import wB from "../assets/wB.jpg";
import blueBanner from "../assets/bluebanner.jpg";
import bL from "../assets/bL.jpg";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
export default function WomenNav() {
  const [active, setActive] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { results } = useSelector((state) => state.app.cart);
  const { wishlist } = useSelector((state) => state.app);
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
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent
              style={{
                zIndex: 3,
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
        <Flex
          justifyContent="space-between"
          className={scrollY > 43 ? "navbar navbarscrolled" : "navbar"}>
          <Box display="flex" textAlign="center" maxWidth="900px">
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
                      scrollY > 43 ? "navdropbox tW2" : "navdropbox tW"
                    }>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        Banner: bannerT,
                        colorName: colorName,
                        brandName: brandName,
                        data: productWomenTshirt,
                        Heading: "Oversized Women T-Shirt",
                      }}>
                      <Text className="navdropboxh1 mT10">
                        Oversized T-Shirts
                      </Text>
                    </Link>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        Banner: bannerBS,
                        colorName: colorNameS,
                        brandName: brandNameS,
                        data: productWomenshirts,
                        Heading: "Women's Shirts",
                      }}>
                      <Text className="navdropboxh1">Shirts</Text>
                    </Link>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        Banner: bannerT,
                        colorName: colorName,
                        brandName: brandName,
                        data: productWomenTshirt,
                        Heading: "Women T-Shirt",
                      }}>
                      <Text className="navdropboxh1">T-Shirts</Text>
                    </Link>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        data: productWomenKurti,
                        colorName: colorNameK,
                        brandName: brandNameK,
                        Heading: "Women Kurti",
                      }}>
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
                    className={
                      scrollY > 43 ? "navdropbox bW2" : "navdropbox bW"
                    }>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        Banner: jog,
                        colorName: colorNameJ,
                        brandName: brandNameJ,
                        Heading: "Women Joggers",
                        data: productWomenJoggers,
                      }}>
                      <Text className="navdropboxh1 mT10">Joggers</Text>
                    </Link>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        data: productWomenJeans,
                        colorName: colorNameJS,
                        brandName: brandNameJS,
                        Heading: "Women Jeans",
                      }}>
                      <Text className="navdropboxh1">Jeans</Text>
                    </Link>
                    <Link
                      to="/category"
                      style={{ textDecoration: "none" }}
                      state={{
                        Banner: bannerJ,
                        data: productWomenJump,
                        colorName: colorNameJP,
                        brandName: brandNameJP,
                        Heading: "Women Jumpsuit",
                      }}>
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
                      scrollY > 43 ? "navdropbox sBC2W" : "navdropbox sBCW"
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
                      scrollY > 43 ? "navdropbox sBT2" : "navdropbox sBTW "
                    }>
                    <Flex>
                      <Flex style={{ flexDirection: "column" }}>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productBewakoof,
                            colorName: BewakoofColorName,
                            Heading: "Bewakoof® Collection",
                          }}>
                          <Text className="navdropboxh1 mT10">Bewakoof®</Text>
                        </Link>

                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productCHIMPAAANZEE,
                            colorName: CHIMPAAANZEEColorName,
                            Heading: "CHIMPAAANZEE Collection",
                          }}>
                          <Text className="navdropboxh1">CHIMPAAANZEE</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productCampusSutra,
                            colorName: CampusSutraColorName,
                            Heading: "Campus Sutra Collection",
                          }}>
                          <Text className="navdropboxh1">Campus Sutra</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productLoungeDreams,
                            colorName: LoungeDreamsColorName,
                            Heading: "Lounge Dreams Collection",
                          }}>
                          <Text className="navdropboxh1">Lounge Dreams</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productInstafabPlus,
                            colorName: InstafabColorName,
                            Heading: "Instafab Plus Collection",
                          }}>
                          <Text className="navdropboxh1">Instafab Plus</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productBewakoofAir,
                            colorName: BewakoofAirColorName,
                            Heading: "Bewakoof Air® 1.0 Collection",
                          }}>
                          <Text className="navdropboxh1">
                            Bewakoof Air® 1.0
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productStyleQuotient,
                            colorName: StyleQuotientColorName,
                            Heading: "Style Quotient Collection",
                          }}>
                          <Text className="navdropboxh1">Style Quotient</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productRICKANDMORTY,
                            colorName: RICKANDMORTYColorName,
                            Heading: "RICK AND MORTY MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1">
                            OFFICIAL RICK AND MORTY MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productHARRYPOTTER,
                            colorName: HARRYPOTTERColorName,
                            Heading: "HARRY POTTER MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL HARRY POTTER MERCHANDISE
                          </Text>
                        </Link>

                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productTOMJERRY,
                            colorName: TOMJERRYColorName,
                            Heading: "TOM & JERRY MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL TOM & JERRY MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productCARTOONNETWORK,
                            colorName: CARTOONNETWORKColorName,
                            Heading: "CARTOON NETWORK MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL CARTOON NETWORK MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productDISNEYMERCHANDISE,
                            colorName: DISNEYMERCHANDISEColorName,
                            Heading: "DISNEY MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL DISNEY MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productMARVEL,
                            colorName: MARVELColorName,
                            Heading: "MARVEL MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL MARVEL MERCHANDISE
                          </Text>
                        </Link>
                      </Flex>

                      <Flex style={{ flexDirection: "column" }}>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productBelliskey,
                            colorName: BelliskeyColorName,
                            Heading: "Belliskey Collection",
                          }}>
                          <Text className="navdropboxh1">Belliskey</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productKotty,
                            colorName: KottyColorName,
                            Heading: "Kotty Collection",
                          }}>
                          <Text className="navdropboxh1">Kotty</Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productHubberholme,
                            colorName: HubberholmeColorName,
                            Heading: "Hubberholme Collection",
                          }}>
                          <Text className="navdropboxh1">Hubberholme</Text>
                        </Link>

                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productDRYSTATE,
                            colorName: DRYSTATEColorName,
                            Heading: "THE DRY STATE Collection",
                          }}>
                          <Text className="navdropboxh1 mT10">
                            THE DRY STATE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productPEANUTS,
                            colorName: PEANUTSColorName,
                            Heading: "PEANUTS MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL PEANUTS MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productLOONEYTUNES,
                            colorName: LOONEYTUNESColorName,
                            Heading: "LOONEY TUNES MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL LOONEY TUNES MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productGARFIELDMERCHANDISE,
                            colorName: GARFIELDMERCHANDISEColorName,
                            Heading: "GARFIELD MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL GARFIELD MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productMINIONSMERCHANDISE,
                            colorName: MINIONSMERCHANDISEColorName,
                            Heading: "MINIONS MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL MINIONS MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productNARUTOMERCHANDISE,
                            colorName: NARUTOMERCHANDISEColorName,
                            Heading: "NARUTO MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL NARUTO MERCHANDISE
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productTALESSTORIES,
                            colorName: TALESSTORIESColorName,
                            Heading: "TALES and STORIES Collection",
                          }}>
                          <Text className="navdropboxh1">
                            TALES and STORIES
                          </Text>
                        </Link>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productDCMERCHANDISE,
                            colorName: DCMERCHANDISEColorName,
                            Heading: "DC MERCHANDISE Collection",
                          }}>
                          <Text className="navdropboxh1 mR10p">
                            OFFICIAL DC MERCHANDISE
                          </Text>
                        </Link>

                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productCOCACOLA,
                            colorName: COCACOLAColorName,
                            Heading: "COCA COLA MERCHANDISE Collection",
                          }}>
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
              style={{
                textDecoration: "none",
                marginLeft: "10px",
              }}
              onMouseEnter={() => handleMouseEnter("User")}
              onMouseLeave={() => handleMouseLeave()}>
              <FaRegUser
                className={
                  active === "1" ? "activeIcon navbuttonicon" : "navbuttonicon"
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
                  active === "2" ? "activeIcon navbuttonicon" : "navbuttonicon"
                }
                id={"2"}
                onClick={handleClick}
              />
            </Link>
            <Link to="/shoppingcart">
              {isLoggedIn && (
                <>
                  {results > 0 && <Text className="cartLength">{results}</Text>}
                </>
              )}
              <BsHandbag
                className={
                  active === "3" ? "activeIcon navbuttonicon" : "navbuttonicon"
                }
                id={"3"}
                onClick={handleClick}
              />
            </Link>
          </Box>
        </Flex>
      )}
    </>
  );
}
