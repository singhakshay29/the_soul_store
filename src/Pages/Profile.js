import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { LOGOUT_USER } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavRes from "../Components/NavRes";
import useWindowSize from "../Components/useWindowSize";

export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.userData);
  const isSmallScreen = useWindowSize();

  return (
    <>
      {isSmallScreen && <NavRes />}
      <Flex
        style={{
          justifyContent: "center",
        }}>
        <Container className="orderContainer">
          <Box className="orderContainerb1">
            <Text className="bottomTexth3 mT10p ">
              {data?.name?.toUpperCase()}
            </Text>
            <Text className="text44 mL10p mT10p">{data?.email}</Text>
          </Box>
          <Box className="orderContainerb2"></Box>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              className="logout"
              onClick={() => {
                dispatch(LOGOUT_USER());
              }}>
              LOGOUT
            </Button>
          </Link>
        </Container>
        <Flex
          style={{
            width: "40rem",
            flexDirection: "column",
            margin: "20px",
          }}>
          <Flex>
            <Text className="profileHeading ">Edit Profile</Text>
          </Flex>
          <Flex className="prfile1box">
            <Flex style={{ flexDirection: "column" }}>
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "14px",
                  color: "#58595b",
                }}>
                Email Id
              </label>
              <input
                className="profile1input"
                defaultValue={data?.email}
                type="text"
                style={{ cursor: "not-allowed" }}></input>
            </Flex>
          </Flex>
          <Flex className="profile2box">
            <Flex className="profile2data">General Information</Flex>
            <Divider className="categoryDividerprofile" />
            <Flex
              style={{
                flexDirection: "column",
              }}>
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "14px",
                  color: "#58595b",
                }}>
                Name
              </label>
              <input
                className="profile1input"
                style={{ width: "10rem" }}
                type="text"
                defaultValue={data?.name}></input>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
