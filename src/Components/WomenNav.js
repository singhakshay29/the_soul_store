import { service2 } from "../service";
import { Box, List, Flex, Text, ListItem, IconButton } from "@chakra-ui/react";
import React from "react";
import eye from "../assets/eye.jpg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import bannerT from "../assets/bannerT.jpg";
import { BsHandbag } from "react-icons/bs";
import newlogo from "../assets/newlogo.png";
import { useEffect, useState } from "react";
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

export default function WomenNav() {
  const [active, setActive] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { results } = useSelector((state) => state.app.cart);
  const { wishlist, productsList } = useSelector((state) => state.app);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  let data = [];
  if (productsList.length > 0) {
    data = service2(productsList);
  }
  const {
    productWomenTshirtData,
    productWomenJoggersData,
    productWomenshirtsData,
    productWomenkurtiData,
    productWomenJeansData,
    productWomenJumpsuitData,
    productWomenBlackData,
    productWomenBrownData,
    productWomenWhiteData,
    productWomenGreyData,
    productWomenOrangeData,
    productWomenBlueData,
    productWomenGreenData,
    productWomenRedData,
    productWomenPinkData,
    productWomenYellowData,
    productWomenPurpleData,
    productWomenLavenderData,
    productWomenKhakiData,
    productWomenMaroonData,
    productBewakoof,
    productCHIMPAAANZEE,
    productCampusSutra,
    productLoungeDreams,
    productInstafabPlus,
    productBewakoofAir,
    productStyleQuotient,
    productRICKANDMORTY,
    productHARRYPOTTER,
    productTOMJERRY,
    productKotty,
    productMARVEL,
    productPEANUTS,
    productDRYSTATE,
    productCOCACOLA,
    productBelliskey,
    productLOONEYTUNES,
    productHubberholme,
    productTALESSTORIES,
    productDCMERCHANDISE,
    productCARTOONNETWORK,
    productDISNEYMERCHANDISE,
    productGARFIELDMERCHANDISE,
    productMINIONSMERCHANDISE,
    productNARUTOMERCHANDISE,
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
                        scrollY > 43 ? "navdropbox tW2" : "navdropbox tW"
                      }>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: bannerT,
                          data: productWomenTshirtData,
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
                          data: productWomenshirtsData,
                          Heading: "Women's Shirts",
                        }}>
                        <Text className="navdropboxh1">Shirts</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: bannerT,
                          data: productWomenTshirtData,
                          Heading: "Women T-Shirt",
                        }}>
                        <Text className="navdropboxh1">T-Shirts</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenkurtiData,
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
                          Heading: "Women Joggers",
                          data: productWomenJoggersData,
                        }}>
                        <Text className="navdropboxh1 mT10">Joggers</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenJeansData,
                          Heading: "Women Jeans",
                        }}>
                        <Text className="navdropboxh1">Jeans</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: bannerJ,
                          data: productWomenJumpsuitData,
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
                          data: productWomenBlackData,
                          Banner: bB,
                          Heading: "Women Black Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Black</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenBrownData,
                          Heading: "Women Brown Collection",
                        }}>
                        <Text className="navdropboxh1">Brown</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          Banner: wB,
                          data: productWomenWhiteData,
                          Heading: "Women White Collection",
                        }}>
                        <Text className="navdropboxh1">White</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenGreyData,
                          Heading: "Women Grey Collection",
                        }}>
                        <Text className="navdropboxh1">Grey</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenOrangeData,
                          Heading: "Women Orange Collection",
                        }}>
                        <Text className="navdropboxh1 mT10"> Orange</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenBlueData,
                          Heading: "Women Blue Collection",
                          Banner: blueBanner,
                        }}>
                        <Text className="navdropboxh1">Blue</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenGreenData,
                          Heading: "Women Green Collection",
                        }}>
                        <Text className="navdropboxh1">Green</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenRedData,
                          Heading: "Women Red Collection",
                        }}>
                        <Text className="navdropboxh1">Red</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenPinkData,
                          Banner: bP,
                          Heading: "Women Pink Collection",
                        }}>
                        <Text className="navdropboxh1 mT10">Pink</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenYellowData,

                          Heading: "Women Yellow Collection",
                        }}>
                        <Text className="navdropboxh1">Yellow</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenPurpleData,

                          Heading: "Women Purple Collection",
                        }}>
                        <Text className="navdropboxh1">Purple</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenLavenderData,
                          Banner: bL,

                          Heading: "Women Lavender Collection",
                        }}>
                        <Text className="navdropboxh1">Lavender</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenKhakiData,

                          Heading: "Women Khaki Collection",
                        }}>
                        <Text className="navdropboxh1">Khaki</Text>
                      </Link>
                      <Link
                        to="/category"
                        style={{ textDecoration: "none" }}
                        state={{
                          data: productWomenMaroonData,
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
                        scrollY > 43 ? "navdropbox sBT2" : "navdropbox sBTW "
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
                            state={{
                              data: productCHIMPAAANZEE,

                              Heading: "CHIMPAAANZEE Collection",
                            }}>
                            <Text className="navdropboxh1">CHIMPAAANZEE</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productCampusSutra,

                              Heading: "Campus Sutra Collection",
                            }}>
                            <Text className="navdropboxh1">Campus Sutra</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productLoungeDreams,

                              Heading: "Lounge Dreams Collection",
                            }}>
                            <Text className="navdropboxh1">Lounge Dreams</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productInstafabPlus,

                              Heading: "Instafab Plus Collection",
                            }}>
                            <Text className="navdropboxh1">Instafab Plus</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productBewakoofAir,
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

                              Heading: "Style Quotient Collection",
                            }}>
                            <Text className="navdropboxh1">Style Quotient</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productRICKANDMORTY,

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

                              Heading: "Belliskey Collection",
                            }}>
                            <Text className="navdropboxh1">Belliskey</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productKotty,

                              Heading: "Kotty Collection",
                            }}>
                            <Text className="navdropboxh1">Kotty</Text>
                          </Link>
                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productHubberholme,
                              Heading: "Hubberholme Collection",
                            }}>
                            <Text className="navdropboxh1">Hubberholme</Text>
                          </Link>

                          <Link
                            to="/category"
                            style={{ textDecoration: "none" }}
                            state={{
                              data: productDRYSTATE,

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
