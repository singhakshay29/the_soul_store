import { Box, Container, Card, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Footer from "./Footer";

export default function Login() {
  return (
    <>
      <Box backgroundColor="#e6e7e8">
        <Card height="80px"></Card>
        <Container
          w="500px"
          height="450px"
          display="block"
          marginLeft="30%"
          marginTop="10px"
          border="1px solid grey"
          backgroundColor="#fff">
          <Card className="heading2" style={{ padding: "6%" }}>
            Login with The Souled Store
          </Card>
          <Card
            className="heading2"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Button
              width="40%"
              height="45px"
              bg="#117a7a"
              color="white"
              fontWeight="800"
              cursor="pointer">
              LOGIN
            </Button>
            <Button width="40%" height="45px" color="#58595b" cursor="pointer">
              REGISTER
            </Button>
          </Card>
          <Container
            backgroundColor="#e6e7e8"
            width="80%"
            height="58%"
            border="1px solid grey"
            margin="5% 10%">
            <Button
              className="loginbutton"
              bg="white"
              color="#58595b"
              borderColor="grey"
              width="200px"
              marginLeft="100px">
              <FcGoogle />
              Google
            </Button>
            <Card className="heading2" marginTop="15px">
              -OR-
            </Card>
            <Input
              placeholder=" Enter Phone Number"
              className="loginInput"></Input>
            <Button className="loginbutton">PROCEED</Button>
            <Box display="flex" justifyContent="center">
              <Text>New User ? </Text>
              <Link to="/signup">
                <Text
                  color="#ed2e30"
                  textDecoration="underline"
                  cursor="pointer">
                  Create Account
                </Text>
              </Link>
            </Box>
          </Container>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
