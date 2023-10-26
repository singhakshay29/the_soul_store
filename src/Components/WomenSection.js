import {
  brandName,
  colorName,
  colorNameJ,
  brandNameJ,
  colorNameS,
  brandNameS,
  brandNameK,
  colorNameJP,
  brandNameJP,
  colorNameK,
  productWomenJump,
  productWomenKurti,
  productWomenshirts,
  productWomenTshirt,
  productWomenJoggers,
  service,
  // service2,
} from "../service";
import React, { useEffect, useState } from "react";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import WGallery from "./WGallery";
import DW from "../assets/DW.jpg";
import Pretty from "../assets/Pretty.jpg";
//import JW from "../assets/JW.jpg";
import btS from "../assets/btS.jpg";
import jog from "../assets/jog.jpg";
import cargo from "../assets/cargo.jpg";
import Collection from "../assets/Collection.jpg";
import { Link, NavLink } from "react-router-dom";
// import ImageSlider from "./ImageSlider";
import basis from "../assets/basis.jpg";
import member from "../assets/member.png";
import shirt1 from "../assets/shirt1.jpg";
import basicB from "../assets/basicB.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import bannerBS from "../assets/bannerBS.jpg";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCTS } from "../action";
import { Card, Image, Container, Flex, Box, Button } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";

export default function WomenSection() {
  const [active, setActive] = useState("1");
  const { productsList } = useSelector((state) => state.app);
  const [isSmallScreenMini, setIsSmallScreenMini] = useState(
    window.innerWidth < 1000
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  if (productsList.length > 0) {
    service(productsList);
    // service2(productsList);
  }

  const dispatch = useDispatch();
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  useEffect(() => {
    dispatch(FETCH_PRODUCTS());

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };
    const handleResizeMini = () => {
      setIsSmallScreenMini(window.innerWidth < 750);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeMini);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isSmallScreenMini && (
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
        {isSmallScreenMini ? (
          <>
            <ImageSlider w1={Collection} w2={Pretty} w3={btS} w4={cargo} />
          </>
        ) : (
          <>
            <ImageSlider w1={w1} w2={w2} w3={w3} w4={w4} />
          </>
        )}
        <Flex alignContent="center" flexDirection="column" width="100%">
          <Flex className="heading1">COLLECTIONS</Flex>

          <Flex justifyContent="center">
            {isSmallScreen ? (
              <>
                {isSmallScreenMini ? (
                  <>
                    <Flex flexDirection="column">
                      <Flex className="iBoxMini">
                        <Link
                          to="/category"
                          state={{
                            data: productWomenTshirt,
                            Banner: basicB,
                            colorName: colorName,
                            brandName: brandName,
                            Heading: "Women's Basics",
                          }}>
                          <Image
                            src={basis}
                            className="categoryImageMini"
                            alt="SHIRTS"
                          />
                        </Link>
                      </Flex>
                      <Container className="iBoxMini">
                        <Link
                          to="/category"
                          state={{
                            data: productWomenKurti,
                            colorName: colorNameK,
                            brandName: brandNameK,
                            Heading: "Women Dresses",
                          }}>
                          <Image
                            src={DW}
                            className="categoryImage"
                            alt="T-SHIRTS"
                          />
                        </Link>
                      </Container>
                      <Container className="iBoxMini">
                        <Link
                          to="/category"
                          state={{
                            data: productWomenJump,
                            Banner: bannerJ,
                            colorName: colorNameJP,
                            brandName: brandNameJP,
                            Heading: "Women Jumpsuit",
                          }}>
                          <Image
                            src={basis}
                            className="categoryImage "
                            alt="OVERSIZED T-SHIRTS"
                          />
                        </Link>
                      </Container>
                    </Flex>
                  </>
                ) : (
                  <>
                    <Flex className="iBox">
                      <Link
                        to="/category"
                        state={{
                          data: productWomenTshirt,
                          Banner: basicB,
                          colorName: colorName,
                          brandName: brandName,
                          Heading: "Women's Basics",
                        }}>
                        <Image
                          src={basis}
                          className="categoryImage"
                          alt="SHIRTS"
                        />
                      </Link>
                    </Flex>
                    <Container className="iBox">
                      <Link
                        to="/category"
                        state={{
                          data: productWomenKurti,
                          colorName: colorNameK,
                          brandName: brandNameK,
                          Heading: "Women Dresses",
                        }}>
                        <Image
                          src={DW}
                          className="categoryImage"
                          alt="T-SHIRTS"
                        />
                      </Link>
                    </Container>
                  </>
                )}
              </>
            ) : (
              <>
                <Flex className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenTshirt,
                      Banner: basicB,
                      colorName: colorName,
                      brandName: brandName,
                      Heading: "Women's Basics",
                    }}>
                    <Image src={basis} className="categoryImage" alt="SHIRTS" />
                  </Link>
                </Flex>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenKurti,
                      colorName: colorNameK,
                      brandName: brandNameK,
                      Heading: "Women Dresses",
                    }}>
                    <Image src={DW} className="categoryImage" alt="T-SHIRTS" />
                  </Link>
                </Container>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenJump,
                      Banner: bannerJ,
                      colorName: colorNameJP,
                      brandName: brandNameJP,
                      Heading: "Women Jumpsuit",
                    }}>
                    <Image
                      src={basis}
                      className="categoryImage "
                      alt="OVERSIZED T-SHIRTS"
                    />
                  </Link>
                </Container>
              </>
            )}
          </Flex>
        </Flex>
        {!isSmallScreen && (
          <>
            <Flex alignContent="center" flexDirection="column" width="100%">
              <Flex className="heading1">SHOP BY COLOR</Flex>
            </Flex>
            <WGallery />
          </>
        )}
        {isSmallScreen ? (
          <>
            {isSmallScreenMini ? (
              <>
                <Flex alignContent="center" flexDirection="column" width="100%">
                  <Flex className="heading1">CATEGORIES</Flex>
                  <Flex justifyContent="center" flexDirection="column">
                    <Container className="iBoxMini">
                      <Link
                        to="/category"
                        state={{
                          Banner: bannerT,
                          colorName: colorName,
                          brandName: brandName,
                          data: productWomenTshirt,
                          Heading: "Women T-Shirt",
                        }}>
                        <Image
                          src={btS}
                          className="categoryImage"
                          alt="SHIRTS"
                        />
                      </Link>
                    </Container>
                    <Container className="iBoxMini">
                      <Link
                        to="/category"
                        state={{
                          Banner: bannerBS,
                          colorName: colorNameS,
                          brandName: brandNameS,
                          data: productWomenshirts,
                          Heading: "Women's Shirts",
                        }}>
                        <Image
                          src={shirt1}
                          className="categoryImage "
                          alt="OVERSIZED T-SHIRTS"
                        />
                      </Link>
                    </Container>
                    <Container className="iBoxMini">
                      <Link
                        to="/category"
                        state={{
                          Banner: jog,
                          colorName: colorNameJ,
                          brandName: brandNameJ,
                          Heading: "Women Joggers",
                          data: productWomenJoggers,
                        }}>
                        <Image
                          src={cargo}
                          className="categoryImage"
                          alt="T-SHIRTS"
                        />
                      </Link>
                    </Container>
                  </Flex>
                </Flex>
              </>
            ) : (
              <>
                <Flex alignContent="center" flexDirection="column" width="100%">
                  <Flex className="heading1">CATEGORIES</Flex>
                  <Flex justifyContent="center" height="28rem">
                    <Container className="iBox">
                      <Link
                        to="/category"
                        state={{
                          Banner: bannerT,
                          colorName: colorName,
                          brandName: brandName,
                          data: productWomenTshirt,
                          Heading: "Women T-Shirt",
                        }}>
                        <Image
                          src={btS}
                          className="categoryImage"
                          alt="SHIRTS"
                        />
                      </Link>
                    </Container>
                    <Container className="iBox">
                      <Link
                        to="/category"
                        state={{
                          Banner: jog,
                          colorName: colorNameJ,
                          brandName: brandNameJ,
                          Heading: "Women Joggers",
                          data: productWomenJoggers,
                        }}>
                        <Image
                          src={cargo}
                          className="categoryImage"
                          alt="T-SHIRTS"
                        />
                      </Link>
                    </Container>
                  </Flex>
                </Flex>
              </>
            )}
          </>
        ) : (
          <>
            <Flex alignContent="center" flexDirection="column" width="100%">
              <Flex className="heading1">CATEGORIES</Flex>
              <Flex justifyContent="center" height="28rem">
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      Banner: bannerT,
                      colorName: colorName,
                      brandName: brandName,
                      data: productWomenTshirt,
                      Heading: "Women T-Shirt",
                    }}>
                    <Image src={btS} className="categoryImage" alt="SHIRTS" />
                  </Link>
                </Container>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      Banner: jog,
                      colorName: colorNameJ,
                      brandName: brandNameJ,
                      Heading: "Women Joggers",
                      data: productWomenJoggers,
                    }}>
                    <Image
                      src={cargo}
                      className="categoryImage"
                      alt="T-SHIRTS"
                    />
                  </Link>
                </Container>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      Banner: bannerBS,
                      colorName: colorNameS,
                      brandName: brandNameS,
                      data: productWomenshirts,
                      Heading: "Women's Shirts",
                    }}>
                    <Image
                      src={shirt1}
                      className="categoryImage "
                      alt="OVERSIZED T-SHIRTS"
                    />
                  </Link>
                </Container>
              </Flex>
            </Flex>
          </>
        )}

        <Card className="heading1">MEMBERSHIP</Card>
        <Image src={member} alt="membership" width="100%" />
      </Container>
    </>
  );
}
