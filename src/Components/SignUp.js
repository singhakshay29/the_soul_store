import React from "react";
import { Box, Container, Card, Button, Input, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";

export default function SignUp() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [finalpassword, setfinalPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorColor, setErrorColor] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setErrorMessage("All Fields must be filled");
      setErrorColor("red");
    } else if (!email.includes("@")) {
      setErrorMessage("Email is invalid");
      setErrorColor("red");
    } else if (password !== finalpassword) {
      setErrorMessage("Password does not match");
      setErrorColor("red");
    } else {
      (async function () {
        try {
          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectId: "8jf3b15onzua",
              },
              body: JSON.stringify({
                name: `${username}`,
                email: `${email}`,
                password: `${password}`,
                appType: "music",
              }),
            }
          );
          if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem(
              "signupDeatils",
              JSON.stringify({
                signup: responseData,
              })
            );
            setErrorMessage("SignUp successful!");
            setErrorColor("green");
          } else if (response.status === 403) {
            setErrorMessage("User already exists");
            setErrorColor("red");
          } else {
            setErrorMessage("Incorrect EmailId or Password");
            setErrorColor("red");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      })();
    }
  };
  return (
    <>
      <Box backgroundColor="#e6e7e8">
        <Card height="80px"></Card>
        <Container
          w="500px"
          height="90%"
          display="block"
          marginLeft="30%"
          marginTop="10px"
          border="1px solid grey"
          backgroundColor="#fff">
          <Card className="heading2" style={{ padding: "6%" }}>
            Register with The Souled Store
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
            height="98%"
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
              placeholder="User Name*"
              className="loginInput"
              value={username}
              onChange={(e) => setusername(e.target.value)}></Input>
            <Input
              placeholder="Choose New Password*"
              className="loginInput"
              value={finalpassword}
              onChange={(e) => setfinalPassword(e.target.value)}></Input>
            <Input
              placeholder="Confirm Password*"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></Input>
            <Input
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"></Input>
            <Text
              className="error"
              style={{
                color: errorColor,
                justifyContent: "center",
                display: "flex",
              }}>
              {errorMessage}
            </Text>
            <Button className="loginbutton button2" onClick={handleSignUp}>
              REGISTER
            </Button>
            <Box display="flex" justifyContent="center">
              <Text>Already a Customer ? </Text>
              <Link to="/login">
                <Text
                  color="#ed2e30"
                  textDecoration="underline"
                  cursor="pointer">
                  Login
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
