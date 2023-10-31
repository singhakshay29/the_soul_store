import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Flex className="contact1">
        <Flex
          className="heading1"
          style={{ fontSize: "40px", marginBottom: 0 }}>
          Manage Your Orders Easily
        </Flex>
        <Flex className="heading1" style={{ fontWeight: 600 }}>
          Track, Return/ Exchange or Cancel your orders hassle-free.
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <Box className="shopbox2">MY ORDER</Box>
          </Link>
        </Flex>
        <Flex className="contactflex2">
          <Flex
            className="heading1"
            style={{ fontSize: "30px", marginBottom: 0, color: "#fff" }}>
            Manage Your Orders Easily
          </Flex>
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
          <Flex className="contactflex3 ">
            <Flex className="contactquery">
              Please Send your Query to us at
            </Flex>
            <Flex className="contactquery">www.thesouledstore.com</Flex>
          </Flex>
        </Flex>
        <Flex
          className="heading1"
          style={{ fontSize: "30px", marginBottom: 0 }}>
          Stay in touch
        </Flex>
        <Flex style={{ justifyContent: "center", margin: "30px 0" }}>
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
    </>
  );
}
