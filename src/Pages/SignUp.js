import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {
  Text,
  Flex,
  Box,
  Card,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE, SIGNUP_USER } from "../action";
import NavRes from "../Components/NavRes";

export default function SignUp() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorColor, setErrorColor] = useState("");
  const [finalpassword, setfinalPassword] = useState("");
  const { errorMessage } = useSelector((state) => state.user);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  async function handleLoginWithGoogle(decode) {
    const { given_name, family_name, email } = await decode;
    setEmail(email);
    setusername(given_name + " " + family_name);
    setPassword(given_name + " " + family_name);
    setfinalPassword(given_name + " " + family_name);
    handleSignUp();
  }

  const handleSignUp = (e) => {
    if (e) {
      e.preventDefault();
    }
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
      dispatch(SIGNUP_USER(username, email, password));
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isSmallScreen && <NavRes />}
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
              <Link to="/login">
                <button
                  style={{
                    height: "45px",
                    backgroundColor: "#117a7a",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "800",
                    width: "12rem",
                  }}>
                  LOGIN
                </button>
              </Link>
              <Button width="40%" height="45px" color="#58595b">
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
                      var decoded = jwt_decode(credentialResponse.credential);
                      handleLoginWithGoogle(decoded);
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
                type="password"
                value={finalpassword}
                onChange={(e) => setfinalPassword(e.target.value)}></Input>
              <Input
                placeholder="Confirm Password*"
                className="loginInput"
                value={password}
                type="password"
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
                  height: "1.5rem",
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
      </Flex>
    </>
  );
}
