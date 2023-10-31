import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_USER } from "../action";
import { useDispatch, useSelector } from "react-redux";

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
  const { errorMessage } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    if (e) {
      e.preventDefault();
    }
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
  useEffect(() => {
    dispatch(LOGIN_FAILURE(""));
    // eslint-disable-next-line
  }, []);
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
                fontWeight="800">
                LOGIN
              </Button>
              <Link to="/signup">
                <button
                  style={{
                    cursor: "pointer",
                    color: "#58595b",
                    height: "45px",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    width: "12rem",
                  }}>
                  REGISTER
                </button>
              </Link>
            </Card>
            <Container
              backgroundColor="#e6e7e8"
              width="80%"
              height="61%"
              border="1px solid grey"
              margin="10% 10%">
              <Input
                value={email}
                typ="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Enter Email ID"
                className="loginInput"></Input>
              <Input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Enter Password"
                className="loginInput"></Input>
              <Text
                className="error"
                style={{
                  color: errorColor,
                  display: "flex",
                  justifyContent: "center",
                  height: "1.5rem",
                  marginBottom: 0,
                }}>
                {errorMessage}
              </Text>
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
            </Container>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
