import {
  Box,
  Flex,
  Image,
  Text,
  Drawer,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import eye from "../assets/eye.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import newlogo from "../assets/newlogo.png";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";

export default function NavRes({ Heading, value }) {
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
            <Flex>
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
            {pathname === "/shoppingcart" ? (
              <Link to="/">
                <BiArrowBack style={{ padding: "1rem", fontSize: "2rem" }} />
              </Link>
            ) : (
              <>
                <Box style={{ padding: "1rem" }}>
                  <FaBars
                    onClick={onOpen}
                    ref={btnRef}
                    style={{ fontSize: "2rem", color: "grey" }}
                  />
                </Box>
              </>
            )}
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
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />

        <div className="barback"></div>
        <DrawerContent
          style={{
            zIndex: "3",
            width: "80%",
            backgroundColor: "white",
            height: "100vh",
            position: "absolute",
          }}>
          <DrawerBody>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <img src={eye} alt="" className="eyebar" />
            <Image src={newlogo} alt="logo" className="logoImgbar" />
            <Flex>
              <Text
                style={{
                  padding: "20px 10px",
                  marginLeft: "10rem",
                  marginTop: "2rem",
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <Flex>
              <Text
                style={{
                  padding: "20px 10px",
                  marginLeft: "10rem",
                  marginTop: "2rem",
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <Flex>
              <Text
                style={{
                  padding: "20px 10px",
                  marginLeft: "10rem",
                  marginTop: "2rem",
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <Flex>
              <Text
                style={{
                  padding: "20px 10px",
                  marginLeft: "10rem",
                  marginTop: "2rem",
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <DrawerFooter>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
