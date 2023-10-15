import Footer from "./Footer";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_USER } from "../action";
import { useDispatch, useSelector } from "react-redux";
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

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorColor, setErrorColor] = useState("");
  const errorMessage = useSelector((state) => {
    return state.user.errorMessage;
  });
  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password || !email) {
      dispatch(LOGIN_FAILURE("All Fields must be filled"));
      setErrorColor("red");
    } else if (!email.includes("@")) {
      dispatch(LOGIN_FAILURE("Email is invalid"));
      setErrorColor("red");
    } else {
      dispatch(LOGIN_USER(email, password));
    }
  };
  if (isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <Flex className="loginBox">
        <Flex className="lB1">
          <Container className="lC1">
            <Card className="lH1">Login with The Souled Store</Card>
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
              height="61%"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Enter Email ID"
                className="loginInput"></Input>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Enter Password"
                className="loginInput"></Input>
              <Text
                className="error"
                style={{
                  color: errorColor,
                  display: "flex",
                  justifyContent: "center",
                }}>
                {errorMessage}
              </Text>
              {isLoggedIn ? (
                <>
                  <Button style={{ marginLeft: "110px" }} className="wishlist">
                    CONTINUE SHOPPING
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleLogin} className="loginbutton">
                    PROCEED
                  </Button>
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
                </>
              )}
            </Container>
          </Container>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
