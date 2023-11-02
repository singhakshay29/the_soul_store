import {
  Box,
  Flex,
  Image,
  Text,
  Drawer,
  Button,
  Accordion,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import eye from "../assets/eye.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerBS from "../assets/bannerBS.jpg";
import blueBanner from "../assets/bluebanner.jpg";
import bB from "../assets/bB.jpg";
import bP from "../assets/bP.jpg";
import wB from "../assets/wB.jpg";
import bL from "../assets/bL.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import newlogo from "../assets/newlogo.png";
import barlogo from "../assets/barlogo.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import jog from "../assets/jog.jpg";
// import { fetchDataByType, } from "../fetch";
// import { service, isNamePresent } from "../service";
import React, { useEffect, useRef, useState } from "react";

export default function NavRes({ Heading, value, setBarOpen, barOpen }) {
  // const navigation = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeState, setActiveState] = useState();
  const [showSection, setShowSection] = useState("Men");
  //const [searchItem, setSearchItem] = useState("");
  // const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  // const [isDropdown, setIsDropDown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [searchResults, setSearchResults] = useState("");
  const { isLoggedIn } = useSelector((state) => state.user);
  const { wishlist, productsListFilter } = useSelector((state) => state.app);
  const { results } = useSelector((state) => state.app.cart);
  const user = useSelector((state) => state.user.userData);
  const data = useLocation();
  let { pathname } = data;
  const {
    // productMenCollection,
    // productWomenCollection,
    productMenTshirtData,
    productMenShirtData,
    productMenSweaterData,
    productMenTrouserData,
    productMenPyjamasData,
    productMenShortsData,
    productMenJeansData,
    productMenKurtaData,
    productMenTracksuitData,
    productMenHoodieData,
    productMenJoggersData,
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
  } = productsListFilter;
  // const handleMouseEnter = (dropdown) => {
  //   setIsDropDownOpen(dropdown);
  // };

  // const handleMouseLeave = () => {
  //   setIsDropDownOpen(null);
  // };

  // const handleSearchInputChange = (event) => {
  //   const newValue = event.target.value;
  //   setSearchItem(newValue);
  // };
  // const handleSearchClick = async () => {
  //   const searchData = await fetchDataByType(searchItem);
  //   if (searchData.length > 0) {
  //     const data = service(searchData);

  //     navigation("/category", {
  //       state: {
  //         data: data,
  //         Heading: "Search Results for",
  //       },
  //     });
  //   }
  // };

  // async function handleItemClick(event) {
  //   const clickedItem = event.target.textContent;
  //   let storeData = [...productWomenCollection, ...productMenCollection];
  //   const { uniqueBrands, uniqueSubCategory } = storeData;
  //   let data = [];
  //   if (uniqueBrands.includes(clickedItem)) {
  //     data = await searchFetchData("brand", clickedItem);
  //   } else if (uniqueSubCategory.includes(clickedItem)) {
  //     data = await searchFetchData("subCategory", clickedItem);
  //   } else {
  //     console.log(
  //       "User clicked on item not found in brand or category:",
  //       clickedItem
  //     );
  //   }
  //   if (data.length > 0) {
  //     const searchdata = service(data);
  //     console.log(searchdata);
  //     navigation("/category", {
  //       state: {
  //         data: searchdata,
  //         Heading: "Search Results for",
  //       },
  //     });
  //   }
  // }

  const btnRef = useRef();
  const handleClick = (event) => {
    setActiveState(event.target.id);
  };
  const onOpenHandle = () => {
    onOpen();
    setBarOpen(true);
  };

  const onCloseHandle = () => {
    onClose();
    setTimeout(() => {
      setBarOpen(false);
    }, 100);
  };

  // useEffect(() => {
  //   const delay = 500;

  //   const timer = setTimeout(() => {
  //     if (searchItem !== "") {
  //       let storeData = [...productMenCollection, ...productWomenCollection];
  //       const value = isNamePresent(storeData, searchItem);
  //       setSearchResults(value);
  //     }
  //   }, delay);

  //   return () => clearTimeout(timer);
  // }, [searchItem]);
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
      {value ? (
        <>
          <Flex
            justifyContent="space-between"
            className={scrollY > 43 ? "navbar navbarscrolledRes" : "navbar"}>
            <Flex justifyContent="center" alignItems="center">
              <Link to="/">
                <BiArrowBack style={{ padding: "1rem", fontSize: "2rem" }} />
              </Link>

              {pathname === "/category" && (
                <Text className="categoryH12">{Heading}</Text>
              )}
            </Flex>
            {pathname === "/wishlist" && (
              <Flex
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text className="categoryH12">WISHLIST</Text>
                {isLoggedIn && (
                  <>
                    {wishlist?.length > 0 && (
                      <Text className="categoryH12Item">
                        {wishlist?.length} items
                      </Text>
                    )}
                  </>
                )}
              </Flex>
            )}

            <Box
              style={{
                display: "flex",
              }}>
              {/* <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "17px",
                }}>
                <FaSearch
                  onMouseEnter={() => handleMouseEnter("Search")}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleSearchClick()}
                  style={{
                    fontSize: "22px",
                    color: "grey",
                  }}
                />
              </Box> */}
              {pathname === "/category" && (
                <>
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
                        activeState === "2"
                          ? "activeIcon navbuttonicon"
                          : "navbuttonicon"
                      }
                      id={"2"}
                      onClick={handleClick}
                    />
                  </Link>
                </>
              )}
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
                    activeState === "3"
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
      ) : (
        <>
          <Flex
            justifyContent="space-between"
            className={scrollY > 43 ? "navbar navbarscrolledRes" : "navbar"}>
            {pathname === "/shoppingcart" || pathname === "/product" ? (
              <Link to="/">
                <BiArrowBack style={{ padding: "1rem", fontSize: "2rem" }} />
              </Link>
            ) : (
              <>
                <Box style={{ padding: "1rem" }}>
                  <FaBars
                    onClick={onOpenHandle}
                    ref={btnRef}
                    style={{ fontSize: "2rem", color: "grey" }}
                  />
                </Box>
              </>
            )}
            {!barOpen && (
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
            )}

            <Box
              style={{
                display: "flex",
              }}>
              {/* <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "17px",
                }}>
                <FaSearch
                  onMouseEnter={() => handleMouseEnter("Search")}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleSearchClick()}
                  style={{
                    fontSize: "22px",
                    color: "grey",
                  }}
                />
              </Box>
              {isDropdownOpen === "Search" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("Search")}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    setIsDropDown(false);
                  }}
                  className="navSearchboxRes">
                  <Flex className="searchNavInput">
                    <input
                      placeholder="Search"
                      value={searchItem}
                      onChange={handleSearchInputChange}
                      onClick={() => setIsDropDown(true)}
                      style={{
                        width: "9.8rem",
                        border: "none",
                        outline: "none",
                      }}></input>
                    <FaSearch
                      onClick={() => handleSearchClick()}
                      style={{
                        fontSize: "22px",
                        color: "grey",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              )}
              {isDropdown && (
                <Box
                  onMouseEnter={() => {
                    handleMouseEnter("Search");
                    setIsDropDown(true);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    setIsDropDown(false);
                  }}>
                  {searchResults.length > 0 && (
                    <Flex className="showSuggestion" onClick={handleItemClick}>
                      {searchResults.map((item, index) => (
                        <Flex className="showSuggestionText" key={index}>
                          {item}
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </Box>
              )} */}

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
                    activeState === "2"
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
                    activeState === "3"
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

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onCloseHandle}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <div className="barback"></div>
        <DrawerContent
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 3,
            width: "80%",
            backgroundColor: "white",
            height: "100vh",
          }}>
          <DrawerBody>
            <Flex className="barbox1">
              <Image src={barlogo} alt="logo" className="logoImgbar" />
              <Text
                style={{
                  padding: "10px",
                  marginLeft: "6rem",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}>
                {user?.name}
              </Text>
            </Flex>
            <Flex className="barboxStyle1">
              <Button
                className="barboxStyle1button"
                onClick={() => setShowSection("Men")}>
                Men
              </Button>
              <Button
                className="barboxStyle1button2"
                onClick={() => setShowSection("Women")}>
                Women
              </Button>
            </Flex>
            <Flex>
              {showSection === "Men" && (
                <>
                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    marginTop="0.1rem"
                    width="100%">
                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            className="HTexth3A"
                            as="span"
                            flex="1"
                            textAlign="left">
                            Topwear
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link
                          to="/category"
                          style={{ textDecoration: "none" }}
                          state={{
                            data: productMenTshirtData,
                            Heading: "Men's T-Shirts",
                          }}>
                          <Text className="navdropboxh1">
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
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="HTexth3A">
                            BottomWear
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
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
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="HTexth3A">
                            SHOES BY COLOR
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Flex style={{ justifyContent: "space-evenly" }}>
                          <Flex
                            style={{
                              flexDirection: "column",
                              minWidth: "10rem",
                            }}>
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
                              <Text className="navdropboxh1 "> Orange</Text>
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
                          </Flex>
                          <Flex
                            style={{
                              flexDirection: "column",

                              minWidth: "10rem",
                            }}>
                            <Link
                              to="/category"
                              style={{ textDecoration: "none" }}
                              state={{
                                data: productMenBlueData,

                                Heading: "Men Blue Collection",
                              }}>
                              <Text className="navdropboxh1 mT10">Blue</Text>
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
                              <Text className="navdropboxh1 ">Pink</Text>
                            </Link>
                            <Link
                              to="/category"
                              style={{ textDecoration: "none" }}
                              state={{
                                data: productMenYellowData,

                                Heading: "Men Yellow Collection",
                              }}>
                              <Text className="navdropboxh1 ">Yellow</Text>
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
                          </Flex>
                          <Flex
                            style={{
                              flexDirection: "column",

                              minWidth: "10rem",
                            }}>
                            <Link
                              to="/category"
                              style={{ textDecoration: "none" }}
                              state={{
                                data: productMenMaroonData,

                                Heading: "Men Maroon Collection",
                              }}>
                              <Text className="navdropboxh1 mT10">Maroon</Text>
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
                            <Link
                              to="/category"
                              style={{ textDecoration: "none" }}
                              state={{
                                data: productMenBeigeData,

                                Heading: "Men Beige Collection",
                              }}>
                              <Text className="navdropboxh1">Beige</Text>
                            </Link>
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </>
              )}
              {showSection === "Women" && (
                <>
                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    marginTop="0.1rem"
                    width="100%">
                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            className="HTexth3A"
                            as="span"
                            flex="1"
                            textAlign="left">
                            Topwear
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
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
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="HTexth3A">
                            BottomWear
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
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
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="accodianItem">
                      <h2 style={{ margin: 0 }}>
                        <AccordionButton className="accodianbutton">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="HTexth3A">
                            SHOES BY COLOR
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Flex style={{ justifyContent: "space-evenly" }}>
                          <Flex
                            style={{
                              flexDirection: "column",
                              minWidth: "10rem",
                            }}>
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
                              <Text className="navdropboxh1"> Orange</Text>
                            </Link>
                          </Flex>
                          <Flex
                            style={{
                              flexDirection: "column",
                              minWidth: "10rem",
                            }}>
                            <Link
                              to="/category"
                              style={{ textDecoration: "none" }}
                              state={{
                                data: productWomenBlueData,
                                Heading: "Women Blue Collection",
                                Banner: blueBanner,
                              }}>
                              <Text className="navdropboxh1  mT10">Blue</Text>
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
                          </Flex>
                          <Flex
                            style={{
                              flexDirection: "column",
                              minWidth: "10rem",
                            }}>
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
                              <Text className="navdropboxh1">Pink</Text>
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
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
