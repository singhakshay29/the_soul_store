import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
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

export default function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
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
          <Text className="bottomTexth2">CONTACT US</Text>
          <Text className="bottomTexth2">TRACK ORDER</Text>
          <Text className="bottomTexth2">My ACCOUNT</Text>
        </Flex>
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
      </Flex>
      <Flex style={{ flexDirection: "column", backgroundColor: "#e6e7e8" }}>
        <Flex style={{ paddingLeft: "10px" }}>
          <HiOutlineCurrencyRupee
            style={{ fontSize: "1.5rem", color: "#292b2c" }}
          />
          <Text
            style={{
              margin: "0 10px",
              paddingTop: "4px",
              fontSize: "0.9rem",
              color: "#292b2c",
            }}>
            COD Available
          </Text>
        </Flex>

        <Flex style={{ paddingLeft: "10px", marginTop: "10px" }}>
          <FiRefreshCcw style={{ fontSize: "1.2rem", color: "#292b2c" }} />
          <Text
            style={{
              margin: "0 10px",
              paddingTop: "4px",
              fontSize: "0.9rem",
              color: "#292b2c",
            }}>
            30 Days Easy Returns
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
          <AiOutlineMobile style={{ color: "#58595b", paddingTop: "3px" }} />
          <Text
            style={{
              margin: 0,
              fontWeight: "bolder",
              fontSize: "18px",
              color: "#58595b",
            }}>
            EXPERIENCE THE SOULED STORE APP
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
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
            <img src={appstore} width="150px" alt="" />
          </Box>
        </Flex>
        <Flex
          style={{
            justifyContent: "flex-end",

            padding: "0 5%",
          }}>
          <Text style={{ margin: 0, paddingTop: "10px", color: "58595b" }}>
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
        <Flex style={{ justifyContent: "space-evenly", margin: "20px" }}>
          <Flex>
            <Text
              style={{ margin: 0, paddingLeft: "20px", paddingTop: "10px" }}>
              100% Secure Payment:
            </Text>
          </Flex>
          <Box>
            <img src={partners1} width="350px" alt="" />
          </Box>

          <Flex>
            <Text
              style={{ margin: 0, paddingLeft: "20px", paddingTop: "10px" }}>
              Shipping Partners:
            </Text>
          </Flex>
          <Box>
            <img src={partners2} width="350px" alt="" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
