import {
  Box,
  Flex,
  Image,
  Text,
  Drawer,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import eye from "../assets/eye.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import newlogo from "../assets/newlogo.png";
import barlogo from "../assets/barlogo.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";

export default function NavRes({ Heading, value, setBarOpen, barOpen }) {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.app);
  const { results } = useSelector((state) => state.app.cart);
  const data = useLocation();
  let { pathname } = data;
  const btnRef = useRef();
  const handleClick = (event) => {
    setActive(event.target.id);
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
                        active === "2"
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
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <UnorderedList className="barboxStyle"></UnorderedList>
            <Flex className="barboxStyle1">
              <Button className="barboxStyle1button">Men</Button>
              <Button className="barboxStyle1button2">Women</Button>
            </Flex>
            <Flex>
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
                    <Text className="bottomTexth3">Material & Care:</Text>
                    <Text className="text" marginLeft="30px" marginTop="20px">
                      100% Cotton
                    </Text>
                    <Text className="text" marginLeft="30px" marginTop="0">
                      Machine Wash
                    </Text>
                    <Text className="bottomTexth3">BRAND:</Text>

                    <Text className="bottomTexth3">Country of Origin:</Text>
                    <Text className="text" marginLeft="30px" marginTop="0">
                      India (and proud)
                    </Text>
                    <Text className="text" marginLeft="30px">
                      Hey Souledsters! You must have noticed that we've said
                      goodbye to the little Mr. Souls sleeve label that we've
                      had through the years. But always remember, when you shop
                      from our app, website, stores, or online marketplaces,
                      you're always getting the genuine real deal!
                    </Text>
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
                    <Text className="bottomTexth3">
                      Official Licensed {data?.brand}
                    </Text>
                    <Flex>
                      <Text className="bottomTexth3">Color:</Text>
                      <Text className="text mL10">{data?.color}</Text>
                    </Flex>
                    <Flex>
                      <Text className="bottomTexth3">Type:</Text>
                      <Text className="text mL10">{data?.gender}</Text>
                      <Text className="text mL10">{data?.subCategory}</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
            <Flex
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                margin: "2rem",
              }}>
              <Button className="barboxStyle1buttonSec">My Account</Button>
              <Button className="barboxStyle1buttonSec">My Order</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
