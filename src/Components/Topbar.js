import React, { useEffect, useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { SET_ACTIVE } from "../action";

export default function Topbar() {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.app);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const { isLoggedIn } = useSelector((state) => state.user);

  const handleClick = (event) => {
    dispatch(SET_ACTIVE(event.target.id));
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <Flex
            minHeight="45px"
            bg="#e11b23"
            p="0"
            zIndex="1"
            justifyContent="space-evenly"
            paddingTop="10px"
            alignContent="center">
            <Text
              style={{
                color: "white",
                margin: "0px",
                fontWeight: 700,
                fontSize: "12px",
              }}>
              Download Our App &amp; Get 10% Additional Cashback On All Orders
            </Text>
            <Button className="topbarbuttonRes">
              <CiMobile3 style={{ margin: "1px", fontSize: "1.2rem" }} />
              Open APP
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          height="54px"
          bg="#e11b23"
          p="0"
          zIndex="1"
          justifyContent="space-between">
          <Box marginLeft="15%">
            <NavLink to="/">
              <Button
                className={
                  active === "1" ? "active1 topbarbutton" : "topbarbutton"
                }
                id={"1"}
                onClick={handleClick}>
                Women
              </Button>
              <Button
                className={
                  active === "2" ? "active1 topbarbutton" : "topbarbutton"
                }
                id={"2"}
                onClick={handleClick}>
                Men
              </Button>
            </NavLink>
          </Box>
          <Box style={{ marginRight: "30px" }}>
            {isLoggedIn ? (
              <>
                <NavLink to="/order">
                  <Button className="topbarbutton2">Track Order</Button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <Button className="topbarbutton2">Track Order</Button>
                </NavLink>
              </>
            )}
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button className="topbarbutton2">Contact US</Button>
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.thesouledstore">
              <Button className="topbarbutton2">
                <CiMobile3 style={{ margin: "5px" }} />
                Download APP
              </Button>
            </Link>
          </Box>
        </Flex>
      )}
    </>
  );
}
