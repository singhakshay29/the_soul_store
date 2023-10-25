import {
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
  productBlackM,
  blackbrandNameM,
  productBrownM,
  BrownbrandNameM,
  productWhiteM,
  whitebrandNameM,
  productGreyM,
  GreybrandNameM,
  productOrangeM,
  OrangebrandNameM,
  productBlueM,
  BluebrandNameM,
  productGreenM,
  GreenbrandNameM,
  productRedM,
  RedbrandNameM,
  productPinkM,
  PinkbrandNameM,
  productYellowM,
  YellowbrandNameM,
  productPurpleM,
  PurplebrandNameM,
  BeigebrandNameM,
  productBeige,
  productKhahkiM,
  KhahkibrandNameM,
  productMaroonM,
  MaroonbrandNameM,
  CharcoalbrandNameM,
  productCharcoal,
  SilverbrandNameM,
  productSilver,
  CreambrandNameM,
  productCreamM,
  OlivebrandNameM,
  productOlive,
  productBewakoofM,
  productTOMJERRYM,
  productCARTOONNETWORKM,
  productDISNEYMERCHANDISEM,
  productBrownMochaM,
  productCampusSutraM,
  productRodamoM,
  productInstafabPlusM,
  productBewakoofAirM,
  productSAVVAOM,
  productHARRYPOTTERM,
  productShoresM,
  productMARVELMERCHANDISEM,
  productBelliskeyM,
  productTISTABENEM,
  productPEANUTSM,
  productRigoM,
  productGARFIELDMERCHANDISEM,
  productNARUTOM,
  productXYXXM,
  productDCMERCHANDISEM,
  productKottyM,
  productHubberholmeM,
  productChkokkoM,
  productMINIONSMERCHANDISEM,
  productBreakbounceM,
  productTrueBuyWorldM,
  productBushirtM,
  productINDICLUBM,
  productBstoriesM,
  productShopolicsM,
  productNASAM,
  productHOUSEDRAGONM,
  productBLANCKM,
  productThomasScottM,
  productDAILYOUTFITSM,
  productUrbanScottishM,
  productBlueTygaM,
  productBEWAKOOFXSTREETWEARM,
  productBewakoofAmericanPimaM,
  productSTARWARS,
  productOldGreyM,
  productAlstyleM,
  productKraniumM,
  productMadOverPrintM,
  productSmugglerzM,
  productFlynoffM,
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
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBewakoofM,
                              Heading: "Bewakoof® Collection",
                            }}>
                            <Text className="navdropboxh1 mT10">Bewakoof®</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productTOMJERRYM }}>
                            <Text className="navdropboxh1 mR10p">
                              TOM & JERRY
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productCARTOONNETWORKM }}>
                            <Text className="navdropboxh1 mR10p">
                              CARTOON NETWORK
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productDISNEYMERCHANDISEM }}>
                            <Text className="navdropboxh1 mR10p">
                              DISNEY MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBrownMochaM }}>
                            <Text className="navdropboxh1">Brown Mocha</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productCampusSutraM }}>
                            <Text className="navdropboxh1">Campus Sutra</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productRodamoM }}>
                            <Text className="navdropboxh1">Rodamo</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productInstafabPlusM }}>
                            <Text className="navdropboxh1">Instafab Plus</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBewakoofAirM }}>
                            <Text className="navdropboxh1">
                              Bewakoof Air® 1.0
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productSAVVAOM }}>
                            <Text className="navdropboxh1">SAVVAO</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productShoresM }}>
                            <Text className="navdropboxh1">7 Shores</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBelliskeyM }}>
                            <Text className="navdropboxh1 mT10">Belliskey</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productTISTABENEM }}>
                            <Text className="navdropboxh1">TISTABENE</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productPEANUTSM }}>
                            <Text className="navdropboxh1 mR10p">
                              PEANUTS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productRigoM }}>
                            <Text className="navdropboxh1 mR10p">Rigo</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productGARFIELDMERCHANDISEM }}>
                            <Text className="navdropboxh1 mR10p">
                              GARFIELD MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productMINIONSMERCHANDISEM }}>
                            <Text className="navdropboxh1 mR10p">
                              MINIONS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productNARUTOM }}>
                            <Text className="navdropboxh1 mR10p">
                              NARUTO MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productXYXXM }}>
                            <Text className="navdropboxh1">XYXX</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productDCMERCHANDISEM }}>
                            <Text className="navdropboxh1 mR10p">
                              DC MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productKottyM }}>
                            <Text className="navdropboxh1">Kotty</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productTrueBuyWorldM }}>
                            <Text className="navdropboxh1 mT10 ">
                              TrueBuyWorld
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBushirtM }}>
                            <Text className="navdropboxh1">Bushirt</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productINDICLUBM }}>
                            <Text className="navdropboxh1 mR10p">INDICLUB</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBstoriesM }}>
                            <Text className="navdropboxh1 mR10p">Bstories</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productShopolicsM }}>
                            <Text className="navdropboxh1 mR10p">
                              Shopolics
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productNASAM }}>
                            <Text className="navdropboxh1 mR10p">
                              NASA MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productHOUSEDRAGONM }}>
                            <Text className="navdropboxh1 mR10p">
                              HOUSE OF THE DRAGON
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBLANCKM }}>
                            <Text className="navdropboxh1">BLANCK</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productThomasScottM }}>
                            <Text className="navdropboxh1 mR10p">
                              Thomas Scott
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productDAILYOUTFITSM }}>
                            <Text className="navdropboxh1">
                              THE DAILY OUTFITS
                            </Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBewakoofAmericanPimaM }}>
                            <Text className="navdropboxh1 mT10">
                              Bewakoof American Pima
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productSTARWARS }}>
                            <Text className="navdropboxh1 mT10">
                              STAR WARS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productOldGreyM }}>
                            <Text className="navdropboxh1 mR10p">Old Grey</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productAlstyleM }}>
                            <Text className="navdropboxh1 mR10p">Alstyle</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productKraniumM }}>
                            <Text className="navdropboxh1 mR10p">Kranium</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productMadOverPrintM }}>
                            <Text className="navdropboxh1 mR10p">
                              MadOverPrint
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productSmugglerzM }}>
                            <Text className="navdropboxh1 mR10p">
                              Smugglerz
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productFlynoffM }}>
                            <Text className="navdropboxh1">Flynoff</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBreakbounceM }}>
                            <Text className="navdropboxh1 mR10p">
                              Breakbounce
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productChkokkoM }}>
                            <Text className="navdropboxh1">Chkokko</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productHARRYPOTTERM }}>
                            <Text className="navdropboxh1 mT10">
                              OFFICIAL HARRY POTTER MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productMARVELMERCHANDISEM }}>
                            <Text className="navdropboxh1 mR10p">
                              OFFICIAL MARVEL MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productHubberholmeM }}>
                            <Text className="navdropboxh1">Hubberholme</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productChkokkoM }}>
                            <Text className="navdropboxh1">Chkokko</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBreakbounceM }}>
                            <Text className="navdropboxh1">Breakbounce</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productUrbanScottishM }}>
                            <Text className="navdropboxh1">Urban Scottish</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBlueTygaM }}>
                            <Text className="navdropboxh1">Blue Tyga</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{ data: productBEWAKOOFXSTREETWEARM }}>
                            <Text className="navdropboxh1">
                              BEWAKOOF X STREETWEAR
                            </Text>
                          </Link>
                        </Flex>
                      </Flex>
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
                          data: productBlackM,
                          brandName: blackbrandNameM,
                          Heading: "Men Black Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Black</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productBrownM,
                          brandName: BrownbrandNameM,
                          Heading: "Men Brown Collection",
                        }}>
                        <Text className="navdropboxh1">Brown</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWhiteM,
                          brandName: whitebrandNameM,
                          Heading: "Men White Collection",
                        }}>
                        <Text className="navdropboxh1">White</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productGreyM,
                          brandName: GreybrandNameM,
                          Heading: "Men Grey Collection",
                        }}>
                        <Text className="navdropboxh1">Grey</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productOrangeM,
                          brandName: OrangebrandNameM,
                          Heading: "Men Orange Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Orange</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productBlueM,
                          brandName: BluebrandNameM,
                          Heading: "Men Blue Collection",
                        }}>
                        <Text className="navdropboxh1">Blue</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productGreenM,
                          brandName: GreenbrandNameM,
                          Heading: "Men Green Collection",
                        }}>
                        <Text className="navdropboxh1">Green</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productRedM,
                          brandName: RedbrandNameM,
                          Heading: "Men Red Collection",
                        }}>
                        <Text className="navdropboxh1">Red</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productPinkM,

                          brandName: PinkbrandNameM,
                          Heading: "Men Pink Collection",
                        }}>
                        <Text className="navdropboxh1 mT10">Pink</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productYellowM,
                          brandName: YellowbrandNameM,
                          Heading: "Men Yellow Collection",
                        }}>
                        <Text className="navdropboxh1">Yellow</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productPurpleM,
                          brandName: PurplebrandNameM,
                          Heading: "Men Purple Collection",
                        }}>
                        <Text className="navdropboxh1">Purple</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productBeige,

                          brandName: BeigebrandNameM,
                          Heading: "Men Beige Collection",
                        }}>
                        <Text className="navdropboxh1">Beige</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productKhahkiM,
                          brandName: KhahkibrandNameM,
                          Heading: "Men Khaki Collection",
                        }}>
                        <Text className="navdropboxh1">Khaki</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMaroonM,
                          brandName: MaroonbrandNameM,
                          Heading: "Men Maroon Collection",
                        }}>
                        <Text className="navdropboxh1">Maroon</Text>
                      </Link>

                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productCharcoal,
                          brandName: CharcoalbrandNameM,
                          Heading: "Men Charcoal Collection",
                        }}>
                        <Text className="navdropboxh1">Charcoal</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productSilver,
                          brandName: SilverbrandNameM,
                          Heading: "Men Silver Collection",
                        }}>
                        <Text className="navdropboxh1">Silver</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productCreamM,
                          brandName: CreambrandNameM,
                          Heading: "Men Cream Collection",
                        }}>
                        <Text className="navdropboxh1">Cream</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productOlive,
                          brandName: OlivebrandNameM,
                          Heading: "Men Olive Collection",
                        }}>
                        <Text className="navdropboxh1">Olive</Text>
                      </Link>
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
                    {results > 0 && (
                      <Text className="cartLength">{results}</Text>
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
        </>
      )}
    </>
  );
}
