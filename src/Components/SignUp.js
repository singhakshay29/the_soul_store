import Footer from "./Footer";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {
  Box,
  Container,
  Card,
  Button,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE, SIGNUP_USER } from "../action";

export default function SignUp() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorColor, setErrorColor] = useState("");
  const [finalpassword, setfinalPassword] = useState("");

  const errorMessage = useSelector((state) => {
    return state.user.errorMessage;
  });

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      dispatch(LOGIN_FAILURE("All Fields must be filled"));
      setErrorColor("red");
    } else if (!email.includes("@")) {
      dispatch(LOGIN_FAILURE("Email is invalid"));
      setErrorColor("red");
    } else if (password !== finalpassword) {
      dispatch(LOGIN_FAILURE("Password does not match"));
      setErrorColor("red");
    } else {
      console.log("billo");
      dispatch(SIGNUP_USER(username, email, password));
    }
  };
  if (isLoggedIn) {
    navigator("/");
  }

  return (
    <>
      <Flex className="loginBox">
        <Flex className="lB1">
          <Container className="lC1">
            <Card className="lH1">Register with The Souled Store</Card>
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
              <Button
                width="40%"
                height="45px"
                color="#58595b"
                cursor="pointer">
                REGISTER
              </Button>
            </Card>
            <Container
              backgroundColor="#e6e7e8"
              width="80%"
              height="98%"
              border="1px solid grey"
              margin="5% 10%">
              <Container
                className=" mT10"
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}>
                <GoogleOAuthProvider clientId="558764896658-onefrip4mvmp2o8e3eh5psn0vi9ln5ck.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log(decoded);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
              </Container>

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
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
