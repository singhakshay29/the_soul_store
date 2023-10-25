import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Text className="topheading1" style={{ marginTop: "20px" }}>
        <span style={{ marginTop: "10px" }}>HOMEGROWN INDIAN BRAND</span>
      </Text>
      <Text className="topheading2">
        Over
        <span style={{ fontWeight: "600", margin: "0 10px" }}>6 Million</span>
        Happy Customers
      </Text>
      <Flex className="bottom">
        <Flex className="bottomText">
          <Text className="bottomTexth1">NEED HELP</Text>
          <Text className="bottomTexth2">CONTACT US</Text>
          <Text className="bottomTexth2">TRACK ORDER</Text>
          <Text className="bottomTexth2">RETURN & REFUNDS</Text>
          <Text className="bottomTexth2">FAQ's</Text>
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
    </>
  );
}
