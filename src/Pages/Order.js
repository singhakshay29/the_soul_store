import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER, OPEN_POPOVER } from "../action";
import { GoDotFill } from "react-icons/go";
import { getOrderList } from "../fetch";
import { Link } from "react-router-dom";
import NavRes from "../Components/NavRes";

export default function Order() {
  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState(null);
  const [orderData, setOrderData] = useState("");
  const userdata = useSelector((state) => state.user.userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrderList();
        const { results } = data;
        setOrderData(data?.data);
        setOrderList(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
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
      {isSmallScreen ? (
        <>
          <Flex
            style={{
              flexDirection: "column",
              overflow: "hidden",
              justifyContent: "center",
            }}>
            <Flex className="orderContainerRes">
              <Box className="orderContainerb1">
                <Text className="bottomTexth3 mT10p ">
                  {userdata?.name?.toUpperCase()}
                </Text>
                <Text className="text3 mL10p mT10p">{userdata?.email}</Text>
              </Box>
              <Box className="orderContainerb2"></Box>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button
                  className="logout"
                  onClick={() => {
                    dispatch(LOGOUT_USER());
                    dispatch(OPEN_POPOVER("Succesfully Logout"));
                  }}>
                  LOGOUT
                </button>
              </Link>
            </Flex>
            <Flex
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              {orderList > 0 ? (
                <>
                  <Flex className="cartItemRes">
                    <Text className="text3 ">My Order</Text>
                    {orderData?.map((item) => (
                      <>
                        <Flex className="orderbox">
                          <Flex className="orderbox1">
                            <Text className="text5">Order Placed on</Text>
                            <Text className="text5">{item.createdAt}</Text>
                          </Flex>
                          <Flex className="orderboxDetails">
                            <Image
                              className="orderboxImg"
                              alt={item.order.items[0].product?.name}
                              src={item.order.items[0].product?.displayImage}
                            />
                            <Box>
                              <Flex className="orderboxproduct">
                                <Text className="text2">
                                  {item.order.items[0].product?.name}
                                </Text>
                                <Flex>
                                  <GoDotFill className="dot" />
                                  <Text className="text5 mL10 ">Confirmed</Text>
                                </Flex>
                              </Flex>
                            </Box>
                          </Flex>
                        </Flex>
                      </>
                    ))}
                  </Flex>
                </>
              ) : (
                <>
                  <Box>
                    <Text className="bottomheading">No Order Found</Text>
                  </Box>
                </>
              )}
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            style={{
              justifyContent: "space-evenly",
              overflow: "hidden",
            }}>
            <Container className="orderContainer">
              <Box className="orderContainerb1">
                <Text className="bottomTexth3 mT10p ">
                  {userdata?.name?.toUpperCase()}
                </Text>
                <Text className="text3 mL10p mT10p">{userdata?.email}</Text>
              </Box>
              <Box className="orderContainerb2"></Box>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button
                  className="logout"
                  onClick={() => {
                    dispatch(LOGOUT_USER());
                    dispatch(OPEN_POPOVER("Succesfully Logout"));
                  }}>
                  LOGOUT
                </button>
              </Link>
            </Container>
            <Flex
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              {orderList > 0 ? (
                <>
                  <Flex className="cartItem">
                    <Text className="text3 ">My Order</Text>
                    {orderData?.map((item) => (
                      <>
                        <Flex className="orderbox">
                          <Flex className="orderbox1">
                            <Text className="text5">Order Placed on</Text>
                            <Text className="text5">{item.createdAt}</Text>
                          </Flex>
                          <Flex className="orderboxDetails">
                            <Image
                              className="orderboxImg"
                              alt={item.order.items[0].product?.name}
                              src={item.order.items[0].product?.displayImage}
                            />
                            <Box>
                              <Flex className="orderboxproduct">
                                <Text className="text2">
                                  {item.order.items[0].product?.name}
                                </Text>
                                <Flex>
                                  <GoDotFill className="dot" />
                                  <Text className="text5 mL10 ">Confirmed</Text>
                                </Flex>
                              </Flex>
                            </Box>
                          </Flex>
                        </Flex>
                      </>
                    ))}
                  </Flex>
                </>
              ) : (
                <>
                  <Box>
                    <Text className="bottomheading">No Order Found</Text>
                  </Box>
                </>
              )}
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
