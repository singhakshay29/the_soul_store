import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import appstore from "../assets/app-store.webp";
import playstore from "../assets/play-store.webp";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import partners1 from "../assets/partners1.png";
import partners2 from "../assets/partners2.png";
import { FaSnapchat } from "react-icons/fa";
import { useSelector } from "react-redux";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerBS from "../assets/bannerBS.jpg";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const { productsListFilter, active } = useSelector((state) => state.app);

  const {
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
    productWomenshirtsData,
    productWomenkurtiData,
  } = productsListFilter;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <>
          <Text
            className="topheading1"
            style={{ marginTop: "20px", fontSize: "25px", height: "45px" }}>
            <span style={{ marginTop: "10px" }}>HOMEGROWN INDIAN BRAND</span>
          </Text>
          <Text
            className="topheading2"
            style={{ height: "30px", overflow: "hidden", fontSize: "20px" }}>
            Over
            <span style={{ fontWeight: "600", margin: "0 10px" }}>
              6 Million
            </span>
            Happy Customers
          </Text>
          {/* <Flex className="bottom">
            <Grid templateColumns="repeat(2, 10rem)" gap={10}>
              <Container className="bottomText">
                <Text className="bottomTexth1">NEED HELP</Text>
                <Text className="bottomTexth2">CONTACT US</Text>
                <Text className="bottomTexth2">TRACK ORDER</Text>
                <Text className="bottomTexth2">RETURN & REFUNDS</Text>
                <Text className="bottomTexth2">FAQ's</Text>
                <Text className="bottomTexth2">My ACCOUNT</Text>
              </Container>

              <Container className="bottomText">
                <Text className="bottomTexth1">COMPANY</Text>
                <Text className="bottomTexth2">About Us</Text>
                <Text className="bottomTexth2">Careers</Text>
                <Text className="bottomTexth2">Community Initiatives</Text>
                <Text className="bottomTexth2">Souled Army</Text>
              </Container>

              <Container className="bottomText">
                <Text className="bottomTexth1">MORE INFO</Text>
                <Text className="bottomTexth2">T&C</Text>
                <Text className="bottomTexth2">Privacy Policy</Text>
                <Text className="bottomTexth2">Sitemap</Text>
              </Container>

              <Container className="bottomText">
                <Text className="bottomTexth1">STORE NEAR ME</Text>
                <Text className="bottomTexth2">Noida</Text>
                <Text className="bottomTexth2">Delhi</Text>
                <Text className="bottomTexth2">Lucknow</Text>
                <Text className="bottomTexth2">Kanpur</Text>
              </Container>
            </Grid>
          </Flex> */}
        </>
      ) : (
        <>
          <Text className="topheading1" style={{ marginTop: "20px" }}>
            <span style={{ marginTop: "10px" }}>HOMEGROWN INDIAN BRAND</span>
          </Text>
          <Text className="topheading2">
            Over
            <span style={{ fontWeight: "600", margin: "0 10px" }}>
              6 Million
            </span>
            Happy Customers
          </Text>
        </>
      )}
      <Flex className="bottom">
        <Flex className="bottomText">
          <Text className="bottomTexth1">NEED HELP</Text>
          {isLoggedIn ? (
            <>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Text className="bottomTexth2">CONTACT US</Text>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Text className="bottomTexth2">CONTACT US</Text>
              </Link>
            </>
          )}
          {isLoggedIn ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/order">
                <Text className="bottomTexth2">TRACK ORDER</Text>
              </Link>
            </>
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Text className="bottomTexth2">TRACK ORDER</Text>
              </Link>
            </>
          )}

          {isLoggedIn ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/profile">
                <Text className="bottomTexth2">My ACCOUNT</Text>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Text className="bottomTexth2">My ACCOUNT</Text>
              </Link>
            </>
          )}
        </Flex>
        <Container className="bottomText">
          <Text className="bottomTexth1">COMPANY</Text>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Text className="bottomTexth2">About Us</Text>
          </Link>
          <Text className="bottomTexth2">Community Initiatives</Text>
          <Text className="bottomTexth2">Souled Army</Text>
        </Container>
        <Container className="bottomText">
          <Text className="bottomTexth1">MORE INFO</Text>
          <Link to="/term" style={{ textDecoration: "none" }}>
            <Text className="bottomTexth2">T&C</Text>
          </Link>
          <Link to="/privacy" style={{ textDecoration: "none" }}>
            <Text className="bottomTexth2">Privacy Policy</Text>
          </Link>
        </Container>
        <Container className="bottomText">
          <Text className="bottomTexth1">STORE NEAR ME</Text>
          <Text className="bottomTexth2">Noida</Text>
          <Text className="bottomTexth2">Delhi</Text>
          <Text className="bottomTexth2">Lucknow</Text>
          <Text className="bottomTexth2">Kanpur</Text>
        </Container>
      </Flex>
      <Flex style={{ flexDirection: "column", backgroundColor: "#e6e7e8" }}>
        <Flex style={{ paddingLeft: "10px", marginTop: "1rem" }}>
          <HiOutlineCurrencyRupee
            style={{ fontSize: "1.5rem", color: "#292b2c" }}
          />
          <Text
            style={{
              paddingTop: 0,
              fontSize: "0.9rem",
            }}
            className="footerText">
            COD Available
          </Text>
        </Flex>

        <Flex style={{ paddingLeft: "10px", marginTop: "10px" }}>
          <FiRefreshCcw style={{ fontSize: "1.2rem", color: "#292b2c" }} />
          <Text
            style={{
              paddingTop: 0,
              fontSize: "0.9rem",
            }}
            className="footerText">
            30 Days Easy Returns
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center", margin: "1rem 0" }}>
          <AiOutlineMobile style={{ color: "#58595b", paddingTop: "3px" }} />
          <Text
            style={{
              padding: 0,
            }}
            className="footerText">
            EXPERIENCE THE SOULED STORE APP
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center", margin: "1rem 0" }}>
          <Box
            style={{
              width: "10rem",
              overflow: "hidden",
            }}>
            <Link to="https://play.google.com/store/apps/details?id=com.thesouledstore">
              <img src={playstore} width="150px" alt="" />
            </Link>
          </Box>
          <Box
            style={{
              width: "10rem",
              overflow: "hidden",
            }}>
            <Link to="https://apps.apple.com/us/app/thesouledstore/id1493897434?ls=1">
              <img src={appstore} width="150px" alt="" />
            </Link>
          </Box>
        </Flex>
        <Flex
          style={{
            justifyContent: "flex-end",
            padding: "0 5%",
            margin: "1rem 0",
          }}>
          <Text className="footerText" style={{ fontWeight: 600 }}>
            Follow Us:
          </Text>
          <Flex>
            <Link to="https://www.facebook.com/souledstore/">
              <Box
                style={{
                  borderRadius: "50%",
                  background: "#6081c0",
                  padding: "5px 8px",
                  margin: "0 5px",
                }}>
                <BiLogoFacebook
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    paddingTop: "1px",
                  }}
                />
              </Box>
            </Link>
            <Link to="https://www.instagram.com/TheSouledStore/">
              <Box
                style={{
                  borderRadius: "50%",
                  background: "#c03694",
                  padding: "5px 8px",
                  margin: "0 5px",
                }}>
                <AiOutlineInstagram
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    paddingTop: "1px",
                  }}
                />
              </Box>
            </Link>
            <Link to="https://www.snapchat.com/add/thesouledstore">
              <Box
                style={{
                  borderRadius: "50%",
                  background: "#f9b927",
                  padding: "5px 8px",
                  margin: "0 5px",
                }}>
                <FaSnapchat
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    paddingTop: "1px",
                  }}
                />
              </Box>
            </Link>
            <Link to="https://twitter.com/TheSouledStore">
              <Box
                style={{
                  borderRadius: "50%",
                  background: "#4abbe9",
                  padding: "5px 8px",
                  margin: "0 5px",
                }}>
                <BsTwitter
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    paddingTop: "1px",
                  }}
                />
              </Box>
            </Link>
          </Flex>
        </Flex>
        {isSmallScreen ? (
          <>
            <Flex
              style={{
                margin: "20px",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Flex>
                <Text className="footerText">100% Secure Payment:</Text>
              </Flex>
              <Box>
                <img src={partners1} width="350px" alt="" />
              </Box>

              <Flex>
                <Text className="footerText">Shipping Partners:</Text>
              </Flex>
              <Box>
                <img src={partners2} width="350px" alt="" />
              </Box>
            </Flex>
          </>
        ) : (
          <>
            <Flex style={{ justifyContent: "space-evenly", margin: "20px" }}>
              <Flex>
                <Text className="footerText">100% Secure Payment:</Text>
              </Flex>
              <Box>
                <img src={partners1} width="350px" alt="" />
              </Box>

              <Flex>
                <Text className="footerText">Shipping Partners:</Text>
              </Flex>
              <Box>
                <img src={partners2} width="350px" alt="" />
              </Box>
            </Flex>
          </>
        )}
        <Flex>
          <Text className="footerText" style={{ fontWeight: 700 }}>
            POPULAR SEARCHES
          </Text>
        </Flex>
        <Divider className="categoryDividerFooter" />
        {active === "1" ? (
          <>
            <Flex
              style={{
                justifyContent: "space-around",
                margin: "10px",
                flexWrap: "wrap",
              }}>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  Banner: bannerT,
                  data: productWomenTshirtData,
                  Heading: "Oversized Women T-Shirt",
                }}>
                <Text className="footerLink">Oversized T-Shirts</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  Banner: bannerBS,
                  data: productWomenshirtsData,
                  Heading: "Women's Shirts",
                }}>
                <Text className="footerLink">Shirts</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  Banner: bannerT,
                  data: productWomenTshirtData,
                  Heading: "Women T-Shirt",
                }}>
                <Text className="footerLink">T-Shirts</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productWomenkurtiData,
                  Heading: "Women Kurti",
                }}>
                <Text className="footerLink">Kurti</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  Banner: MBJ,
                  data: productMenJoggersData,
                  Heading: "Men's Joggers",
                  gender: "Male",
                }}>
                <Text className="footerLink">Joggers</Text>
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
                <Text className="footerLink">Jeans</Text>
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
                <Text className="footerLink">Shorts</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  gender: "Male",
                  Heading: "Men's Shorts",
                  data: productMenPyjamasData,
                }}>
                <Text className="footerLink">Pyjamas</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenTrouserData,
                  Heading: "Men's Trouser",
                }}>
                <Text className="footerLink">Trouser</Text>
              </Link>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              style={{
                justifyContent: "space-around",
                margin: "10px",
                flexWrap: "wrap",
              }}>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenTshirtData,
                  Heading: "Men's T-Shirts",
                }}>
                <Text className="footerLink">Oversized T-Shirts </Text>
              </Link>

              <Link
                to="/category"
                style={{ textDecoration: "none", margin: "0 10px" }}
                state={{
                  data: productMenShirtData,
                  Heading: "Men's Shirt",
                }}>
                <Text className="footerLink">Shirts </Text>
              </Link>

              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenSweaterData,
                  Heading: "Men's Sweater",
                }}>
                <Text className="footerLink">Sweater </Text>
              </Link>

              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenKurtaData,

                  Heading: "Men's Kurta",
                }}>
                <Text className="footerLink">Kurta </Text>
              </Link>

              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenHoodieData,

                  Heading: "Men's Hoodie",
                }}>
                <Text className="footerLink">Hoodie </Text>
              </Link>

              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenTracksuitData,
                  Heading: "Men's Tracksuit",
                }}>
                <Text className="footerLink">Tracksuit </Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  Banner: MBJ,
                  data: productMenJoggersData,
                  Heading: "Men's Joggers",
                  gender: "Male",
                }}>
                <Text className="footerLink">Joggers</Text>
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
                <Text className="footerLink">Jeans</Text>
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
                <Text className="footerLink">Shorts</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  gender: "Male",
                  Heading: "Men's Shorts",
                  data: productMenPyjamasData,
                }}>
                <Text className="footerLink">Pyjamas</Text>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                state={{
                  data: productMenTrouserData,
                  Heading: "Men's Trouser",
                }}>
                <Text className="footerLink">Trouser</Text>
              </Link>
            </Flex>
          </>
        )}
        <Flex style={{ justifyContent: "center", margin: "1rem 0" }}>
          <AiOutlineCopyrightCircle
            style={{ color: "#58595b", paddingTop: "3px" }}
          />
          <Text
            style={{
              padding: 0,
            }}
            className="footerText">
            The Souled Store 2023-24
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
