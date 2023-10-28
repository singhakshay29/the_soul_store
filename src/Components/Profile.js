import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { LOGOUT_USER } from "../action";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log(userData);
  return (
    <>
      <Flex
        style={{
          justifyContent: "space-around",
          width: "60rem",
        }}>
        <Container className="orderContainer">
          <Box className="orderContainerb1">
            <Text className="bottomTexth3 mT10p ">
              {userData?.name?.toUpperCase()}
            </Text>
            <Text className="text44 mL10p mT10p">{userData.email}</Text>
          </Box>
          <Box className="orderContainerb2">
            <Button
              className="logout"
              onClick={() => {
                dispatch(LOGOUT_USER());
              }}>
              LOGOUT
            </Button>
          </Box>
        </Container>
        <Flex
          style={{
            width: "60rem",
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
                defaultValue={userData.email}
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
                defaultValue={userData.name}></input>
            </Flex>
            {/* <Flex
              style={{
                flexDirection: "column",
                marginLeft: " 20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}>
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "14px",
                  color: "#58595b",
                }}>
                Second Name
              </label>
              <input
                className="profile1input"
                style={{ width: "10rem" }}
                type="text"></input>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
