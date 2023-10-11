import MenNav from "./MenNav";
import React, { useState } from "react";
import { Box, Button, Container, Grid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../action";

export default function Order() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.user.userData;
  });
  // eslint-disable-next-line
  const [orderList, setOrderList] = useState(null);

  return (
    <>
      <MenNav />
      <Text className="text3 mL">My Order</Text>
      <Grid templateColumns="repeat(2,1fr)">
        <Container className="orderContainer">
          <Box className="orderContainerb1">
            <Text className="bottomTexth3 mT10p ">
              {userData?.name?.toUpperCase()}
            </Text>
            <Text className="text3 mL10p mT10p">{userData.email}</Text>
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
