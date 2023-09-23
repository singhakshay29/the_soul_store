import React from "react";
import wishlist1 from "../assets/wishlist1.png";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <>
      <Container display="flex" justifyContent="center" marginTop="80px">
        <Image src={wishlist1} width="400px" alt="bg" />
      </Container>
      <Box className="boxStyle">
        <Text className="heading2" marginLeft="950px">
          Your wishlist is lonely and looking for love.
        </Text>
        <Text className="bottomTexth3">
          Add products to your wishlist, review them anytime and easily move to
          cart.
        </Text>
        <Box>
          <Link to="/men">
            <Button className="wishlist">CONTINUE SHOPPING</Button>
          </Link>

          <Link to="/login">
            <Button className="loginbutton button2">LOGIN</Button>
          </Link>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
