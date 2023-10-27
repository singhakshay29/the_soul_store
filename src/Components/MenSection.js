import React, { useEffect, useState } from "react";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import ImageSlider from "./ImageSlider";
import { Link, NavLink } from "react-router-dom";
import member from "../assets/member.png";
import menJog from "../assets/menJog.jpg";
import menJeans from "../assets/menJeans.jpg";
import menShorts from "../assets/menShorts.jpg";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import { Card, Image, Container, Box, Button } from "@chakra-ui/react";
import // productMenJeans,
// productMenJoggers,
// productMenShirt,
// productMenShorts,
// productMenTshirt,
"../service";
import { useDispatch } from "react-redux";
import { FETCH_PRODUCTS } from "../action";

export default function MenSection() {
  const [active, setActive] = useState("2");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    dispatch(FETCH_PRODUCTS());
  });
  return (
    <>
      {isSmallScreen && (
        <Box>
          <NavLink to="/">
            <Button
              className={active === "1" ? "thirdactive thirdnav" : "thirdnav"}
              id={"1"}
              onClick={handleClick}>
              Women
            </Button>
          </NavLink>
          |
          <NavLink to="/men">
            <Button
              className={active === "2" ? "thirdactive thirdnav" : "thirdnav"}
              id={"2"}
              onClick={handleClick}>
              Men
            </Button>
          </NavLink>
        </Box>
      )}
      <Container style={{ overflow: "hidden" }}>
        <ImageSlider w1={m1} w2={m2} w3={m3} w4={m4} />
        <Card className="heading1">CATEGORIES</Card>
        <Container display="flex">
          <Container className="iBox">
            <Link
              to="/category"
              state={{
                // data: productMenTshirt,
                Heading: "Men's Oversized T-Shirts",
              }}>
              <Image src={c1} className="categoryImage" alt="SHIRTS" />
            </Link>
          </Container>

          <Container className="iBox">
            <Link
              to="/category"
              state={{
                // data: productMenShirt,
                Heading: "Men's Shirt",
              }}>
              <Image src={c2} className="categoryImage" alt="T-SHIRTS" />
            </Link>
          </Container>
          <Container className="iBox">
            <Link
              to="/category"
              state={{
                // data: productMenTshirt,
                Heading: "Men's T-Shirts",
              }}>
              <Image
                src={c3}
                className="categoryImage "
                alt="OVERSIZED T-SHIRTS"
              />
            </Link>
          </Container>
        </Container>
        <Container display="flex" style={{ marginTop: "1rem" }}>
          <Container className="iBox">
            <Link
              to="/category"
              state={{
                Banner: MBJ,
                // data: productMenJoggers,
                Heading: "Men's Joggers",
              }}>
              <Image src={menJog} className="categoryImage" alt="SHIRTS" />
            </Link>
          </Container>

          <Container className="iBox">
            <Link
              to="/category"
              state={{
                Banner: MBS,
                // data: productMenShorts,
                Heading: "Men's Shorts",
              }}>
              <Image src={menShorts} className="categoryImage" alt="T-SHIRTS" />
            </Link>
          </Container>
          <Container className="iBox">
            <Link
              to="/category"
              state={{
                Banner: MBJS,
                // data: productMenJeans,
                Heading: "Men's Jeans",
              }}>
              <Image
                src={menJeans}
                className="categoryImage "
                alt="OVERSIZED T-SHIRTS"
              />
            </Link>
          </Container>
        </Container>

        <Card className="heading1">MEMBERSHIP</Card>
        <Image src={member} alt="membership" width="100%" />
      </Container>
    </>
  );
}
