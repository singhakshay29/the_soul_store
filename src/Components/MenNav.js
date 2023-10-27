import { Box, List, Flex, Text, ListItem, IconButton } from "@chakra-ui/react";
import React from "react";
import eye from "../assets/eye.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { service2 } from "../service";

export default function MenNav() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("");
  const { isLoggedIn } = useSelector((state) => state.user);
  const { results } = useSelector((state) => state.app.cart);
  const { wishlist, productsList } = useSelector((state) => state.app);
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

  let data = [];
  if (productsList.length > 0) {
    data = service2(productsList);
  }
  const {
    productMenTshirtData,
    productMenShirtData,
    productMenSweaterData,
    productBewakoofM,
    productMenTrouserData,
    productMenPyjamasData,
    productMenShortsData,
    productMenJeansData,
    productMenKurtaData,
    productMenTracksuitData,
    productMenHoodieData,
    productMenJoggersData,
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
    productMenBlackData,
    productMenBrownData,
    productMenWhiteData,
    productMenGreyData,
    productMenOrangeData,
    productMenBlueData,
    productMenGreenData,
    productMenPinkData,
    productMenRedData,
    productMenYellowData,
    productMenCreamData,
    productMenOliveData,
    productMenCharcoalData,
    productMenSilverData,
    productMenMaroonData,
    productMenKhakiData,
    productMenPurpleData,
    productMenBeigeData,
  } = data;

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
      {!isSmallScreen && (
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
              <img
                src={newlogo}
                alt=""
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
                          data: productMenTshirtData,
                          Heading: "Men's T-Shirts",
                        }}>
                        <Text className="navdropboxh1 mT10">
                          Oversized T-Shirts
                        </Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenShirtData,
                          Heading: "Men's Shirt",
                        }}>
                        <Text className="navdropboxh1">Shirts</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenTshirtData,
                          Heading: "Men's T-Shirts",
                        }}>
                        <Text className="navdropboxh1">T-Shirts</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenSweaterData,

                          Heading: "Men's Sweater",
                        }}>
                        <Text className="navdropboxh1">Sweater</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenKurtaData,

                          Heading: "Men's Kurta",
                        }}>
                        <Text className="navdropboxh1">Kurta</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenHoodieData,

                          Heading: "Men's Hoodie",
                        }}>
                        <Text className="navdropboxh1">Hoodie</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenTracksuitData,

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
                          data: productMenJoggersData,
                          Heading: "Men's Joggers",
                          gender: "Male",
                        }}>
                        <Text className="navdropboxh1 mT10">Joggers</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: MBJS,
                          gender: "Male",
                          data: productMenJeansData,
                          Heading: "Men's Jeans",
                        }}>
                        <Text className="navdropboxh1">Jeans</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: MBS,
                          gender: "Male",
                          data: productMenShortsData,
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
                          data: productMenPyjamasData,
                        }}>
                        <Text className="navdropboxh1">Pyjamas</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenTrouserData,
                          Heading: "Men's Trouser",
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
                  SHOP BY BRANDS
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
                        scrollY > 43 ? "navdropbox sBT21" : "navdropbox sBT "
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
                            state={{
                              data: productTOMJERRYM,
                              Heading: "TOM & JERRY Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              TOM & JERRY
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productCARTOONNETWORKM,
                              Heading: "CARTOON NETWORK Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              CARTOON NETWORK
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productDISNEYMERCHANDISEM,
                              Heading: "DISNEY MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              DISNEY MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBrownMochaM,
                              Heading: "Brown Mocha Collection",
                            }}>
                            <Text className="navdropboxh1">Brown Mocha</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productCampusSutraM,
                              Heading: "Campus Sutra Collection",
                            }}>
                            <Text className="navdropboxh1">Campus Sutra</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productRodamoM,
                              Heading: "Rodamo Collection",
                            }}>
                            <Text className="navdropboxh1">Rodamo</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productInstafabPlusM,
                              Heading: "Instafab Plus Collection",
                            }}>
                            <Text className="navdropboxh1">Instafab Plus</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBewakoofAirM,
                              Heading: " Bewakoof Air® 1.0 Collection",
                            }}>
                            <Text className="navdropboxh1">
                              Bewakoof Air® 1.0
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productSAVVAOM,
                              Heading: "SAVVAO Collection",
                            }}>
                            <Text className="navdropboxh1">SAVVAO</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productShoresM,
                              Heading: "7 Shores Collection",
                            }}>
                            <Text className="navdropboxh1">7 Shores</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBelliskeyM,
                              Heading: "Belliskey Collection",
                            }}>
                            <Text className="navdropboxh1 mT10">Belliskey</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productTISTABENEM,
                              Heading: "TISTABENE Collection",
                            }}>
                            <Text className="navdropboxh1">TISTABENE</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productPEANUTSM,
                              Heading: " PEANUTS MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              PEANUTS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productRigoM,
                              Heading: "Rigo Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">Rigo</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productGARFIELDMERCHANDISEM,
                              Heading: "GARFIELD MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              GARFIELD MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productMINIONSMERCHANDISEM,
                              Heading: "MINIONS MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              MINIONS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productNARUTOM,
                              Heading: "NARUTO MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              NARUTO MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productXYXXM,
                              Heading: "XYXX Collection",
                            }}>
                            <Text className="navdropboxh1">XYXX</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productDCMERCHANDISEM,
                              Heading: "DC MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              DC MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productKottyM,
                              Heading: "Kotty Collection",
                            }}>
                            <Text className="navdropboxh1">Kotty</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productTrueBuyWorldM,
                              Heading: " TrueBuyWorld Collection",
                            }}>
                            <Text className="navdropboxh1 mT10 ">
                              TrueBuyWorld
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBushirtM,
                              Heading: "Bushirt Collection",
                            }}>
                            <Text className="navdropboxh1">Bushirt</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productINDICLUBM,
                              Heading: "INDICLUB Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">INDICLUB</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBstoriesM,
                              Heading: "Bstories Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">Bstories</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productShopolicsM,
                              Heading: "Shopolics Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              Shopolics
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productNASAM,
                              Heading: " NASA Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              NASA MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productHOUSEDRAGONM,
                              Heading: "HOUSE OF THE DRAGON Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              HOUSE OF THE DRAGON
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBLANCKM,
                              Heading: "BLANCK Collection",
                            }}>
                            <Text className="navdropboxh1">BLANCK</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productThomasScottM,
                              Heading: "Thomas Scott Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              Thomas Scott
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productDAILYOUTFITSM,
                              Heading: " THE DAILY OUTFITS Collection",
                            }}>
                            <Text className="navdropboxh1">
                              THE DAILY OUTFITS
                            </Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBewakoofAmericanPimaM,
                              Heading: " Bewakoof American Pima Collection",
                            }}>
                            <Text className="navdropboxh1 mT10">
                              Bewakoof American Pima
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productSTARWARS,
                              Heading: "STAR WARS Collection",
                            }}>
                            <Text className="navdropboxh1 mT10">
                              STAR WARS MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productOldGreyM,
                              Heading: "Old Grey Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">Old Grey</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productAlstyleM,
                              Heading: "Alstyle Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">Alstyle</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productKraniumM,
                              Heading: "Kranium Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">Kranium</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productMadOverPrintM,
                              Heading: "MadOverPrint Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              MadOverPrint
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productSmugglerzM,
                              Heading: "Smugglerz Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              Smugglerz
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productFlynoffM,
                              Heading: "Flynoff Collection",
                            }}>
                            <Text className="navdropboxh1">Flynoff</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBreakbounceM,
                              Heading: "Breakbounce Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              Breakbounce
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productChkokkoM,
                              Heading: "Chkokko Collection",
                            }}>
                            <Text className="navdropboxh1">Chkokko</Text>
                          </Link>
                        </Flex>
                        <Flex className="themeFlex">
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productHARRYPOTTERM,
                              Heading:
                                "OFFICIAL HARRY POTTER MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mT10">
                              OFFICIAL HARRY POTTER MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productMARVELMERCHANDISEM,
                              Heading: "OFFICIAL MARVEL MERCHANDISE Collection",
                            }}>
                            <Text className="navdropboxh1 mR10p">
                              OFFICIAL MARVEL MERCHANDISE
                            </Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productHubberholmeM,
                              Heading: "Hubberholme Collection",
                            }}>
                            <Text className="navdropboxh1">Hubberholme</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productChkokkoM,
                              Heading: "Chkokko Collection",
                            }}>
                            <Text className="navdropboxh1">Chkokko</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBreakbounceM,
                              Heading: "Breakbounce Collection",
                            }}>
                            <Text className="navdropboxh1">Breakbounce</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productUrbanScottishM,
                              Heading: "Urban Collection",
                            }}>
                            <Text className="navdropboxh1">Urban Scottish</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBlueTygaM,
                              Heading: "Blue Tyga Collection",
                            }}>
                            <Text className="navdropboxh1">Blue Tyga</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBEWAKOOFXSTREETWEARM,
                              Heading: "BEWAKOOF X STREETWEAR Collection",
                            }}>
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
                          data: productMenBlackData,

                          Heading: "Men Black Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Black</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenBrownData,

                          Heading: "Men Brown Collection",
                        }}>
                        <Text className="navdropboxh1">Brown</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenWhiteData,

                          Heading: "Men White Collection",
                        }}>
                        <Text className="navdropboxh1">White</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenGreyData,

                          Heading: "Men Grey Collection",
                        }}>
                        <Text className="navdropboxh1">Grey</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenOrangeData,

                          Heading: "Men Orange Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Orange</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenBlueData,

                          Heading: "Men Blue Collection",
                        }}>
                        <Text className="navdropboxh1">Blue</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenGreenData,

                          Heading: "Men Green Collection",
                        }}>
                        <Text className="navdropboxh1">Green</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenRedData,

                          Heading: "Men Red Collection",
                        }}>
                        <Text className="navdropboxh1">Red</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenPinkData,

                          Heading: "Men Pink Collection",
                        }}>
                        <Text className="navdropboxh1 mT10">Pink</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenYellowData,

                          Heading: "Men Yellow Collection",
                        }}>
                        <Text className="navdropboxh1">Yellow</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenPurpleData,

                          Heading: "Men Purple Collection",
                        }}>
                        <Text className="navdropboxh1">Purple</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenBeigeData,

                          Heading: "Men Beige Collection",
                        }}>
                        <Text className="navdropboxh1">Beige</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenKhakiData,

                          Heading: "Men Khaki Collection",
                        }}>
                        <Text className="navdropboxh1">Khaki</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenMaroonData,

                          Heading: "Men Maroon Collection",
                        }}>
                        <Text className="navdropboxh1">Maroon</Text>
                      </Link>

                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenCharcoalData,

                          Heading: "Men Charcoal Collection",
                        }}>
                        <Text className="navdropboxh1">Charcoal</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenSilverData,

                          Heading: "Men Silver Collection",
                        }}>
                        <Text className="navdropboxh1">Silver</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenCreamData,

                          Heading: "Men Cream Collection",
                        }}>
                        <Text className="navdropboxh1">Cream</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productMenOliveData,

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
