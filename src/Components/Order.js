import MenNav from "./MenNav";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Text } from "@chakra-ui/react";

export default function Order({ setSignSuccess }) {
  const navigator = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  // eslint-disable-next-line
  const [orderList, setOrderList] = useState(null);

  const logout = () => {
    console.log("aks");
    localStorage.removeItem("signupDeatils");
    setSignSuccess(false);
    navigator("/men");
  };

  useEffect(() => {
    const loadDetailsFromLocalStorage = () => {
      const details = localStorage.getItem("signupDeatils");
      if (details) {
        const parsedData = JSON.parse(details);
        console.log(parsedData.signup.data);
        setUserDetails(parsedData.signup.data);
      }
    };
    loadDetailsFromLocalStorage();
  }, []);

  return (
    <>
      <MenNav />
      <Text className="text3 mL">My Order</Text>
      <Grid templateColumns="repeat(2,1fr)">
        <Container className="orderContainer">
          <Box className="orderContainerb1">
            <Text className="bottomTexth3 mT10p ">
              {userDetails?.name?.toUpperCase()}
            </Text>
            <Text className="text3 mL10p mT10p">{userDetails.email}</Text>
          </Box>
          <Box className="orderContainerb2">
            <Button
              className="logout"
              onClick={() => {
                logout();
                setSignSuccess(false);
              }}>
              LOGOUT
            </Button>
          </Box>
        </Container>

        {orderList > 0 ? (
          <>
            <Grid templateColumns="repeat(4,1fr)" gap={6}></Grid>
          </>
        ) : (
          <>
            <Box>
              <Text className="bottomheading mT20p">No Order Found</Text>
            </Box>
          </>
        )}
      </Grid>
    </>
  );
}
