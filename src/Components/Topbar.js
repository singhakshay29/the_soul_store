import React from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import { CiMobile3 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  // const navLinkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "#58595b" : "white",
  //     backgroundColor: isActive ? "white" : "#ed2d2f",
  //   };
  // };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "white",
      backgroundColor: isActive ? "white" : "#ed2d2f",
    };
  };

  return (
    <Container height="55px" bg="#e11b23" p="0" display="block">
      <Box marginLeft="15%">
        <NavLink to="/" style={navLinkStyle}>
          <Button className="topbarbutton">Women</Button>
        </NavLink>
        <NavLink to="/men" style={navLinkStyle}>
          <Button className="topbarbutton">Men</Button>
        </NavLink>
        <NavLink to="/kid" style={navLinkStyle}>
          <Button className="topbarbutton">Kids</Button>
        </NavLink>
        <NavLink to="/login">
          <Button marginLeft="35%" className="topbarbutton2">
            Track Order
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button className="topbarbutton2">Contact US</Button>
        </NavLink>

        <Button className="topbarbutton2">
          <CiMobile3 style={{ margin: "5px" }} />
          Download APP
        </Button>
      </Box>
    </Container>
  );
}
