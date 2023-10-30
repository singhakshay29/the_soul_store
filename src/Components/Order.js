import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../action";
import { GoDotFill } from "react-icons/go";
import { getOrderList } from "../fetch";
import { Link, useNavigate } from "react-router-dom";

export default function Order({ openPopover }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState(null);
  const [orderData, setOrderData] = useState("");
  const user = useSelector((state) => {
    return state?.user?.userData?.data;
  });
  const { isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    navigate("/");
  }

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
              {user?.name?.toUpperCase()}
            </Text>
            <Text className="text3 mL10p mT10p">{user?.email}</Text>
          </Box>
          <Box className="orderContainerb2"></Box>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              className="logout"
              onClick={() => {
                dispatch(LOGOUT_USER());
                openPopover("Succesfully Logout");
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
  );
}
