import React, { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Container } from "@chakra-ui/react";

export default function Topbar() {
  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn;
  });
  const [active, setActive] = useState("");
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <Container height="55px" bg="#e11b23" p="0" display="block">
      <Box marginLeft="15%">
        <NavLink to="/">
          <Button
            className={active === "1" ? "active1 topbarbutton" : "topbarbutton"}
            id={"1"}
            onClick={handleClick}>
            Women
          </Button>
        </NavLink>
        <NavLink to="/men">
          <Button
            className={active === "2" ? "active1 topbarbutton" : "topbarbutton"}
            id={"2"}
            onClick={handleClick}>
            Men
          </Button>
        </NavLink>
        <NavLink to="/kid">
          <Button
            className={active === "3" ? "active1 topbarbutton" : "topbarbutton"}
            id={"3"}
            onClick={handleClick}>
            Kids
          </Button>
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/order">
              <Button marginLeft="35%" className="topbarbutton2">
                Track Order
              </Button>
              <Button className="topbarbutton2">Contact US</Button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <Button marginLeft="35%" className="topbarbutton2">
                Track Order
              </Button>
              <Button className="topbarbutton2">Contact US</Button>
            </NavLink>
          </>
        )}
        <Link to="https://play.google.com/store/apps/details?id=com.thesouledstore">
          <Button className="topbarbutton2">
            <CiMobile3 style={{ margin: "5px" }} />
            Download APP
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
