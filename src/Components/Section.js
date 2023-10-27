import { service2 } from "../service";
import NavRes from "./NavRes";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import WGallery from "./WGallery";
import DW from "../assets/DW.jpg";
import btS from "../assets/btS.jpg";
import jog from "../assets/jog.jpg";
import ImageSlider from "./ImageSlider";
import basis from "../assets/basis.jpg";
import cargo from "../assets/cargo.jpg";
import member from "../assets/member.png";
import shirt1 from "../assets/shirt1.jpg";
import Pretty from "../assets/Pretty.jpg";
import basicB from "../assets/basicB.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import JeansSmall from "../assets/JeansSmall.jpg";
import { FETCH_PRODUCTS } from "../action";
import bannerBS from "../assets/bannerBS.jpg";
import { Link, NavLink } from "react-router-dom";
import Collection from "../assets/Collection.jpg";
import React, { useEffect, useState } from "react";
import JumpBannerSmall from "../assets/JumpBannerSmall.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Container, Flex, Box, Button } from "@chakra-ui/react";

export default function Section() {
  const [active, setActive] = useState("1");
  const { productsList } = useSelector((state) => state.app);
  const [barOpen, setBarOpen] = useState();
  const [isSmallScreenMini, setIsSmallScreenMini] = useState(
    window.innerWidth < 750
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  let data = [];
  if (productsList.length > 0) {
    data = service2(productsList);
  }

  const {
    productWomenTshirtData,
    productWomenJeansData,
    productWomenJumpsuitData,
    productWomenshirtsData,
    productWomenJoggersData,
    productWomenkurtiData,
  } = data;
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
      {isSmallScreen && <NavRes barOpen={barOpen} setBarOpen={setBarOpen} />}
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
            {!barOpen && (
              <>
                <ImageSlider w1={Collection} w2={Pretty} w3={btS} w4={cargo} />
              </>
            )}
          </>
        ) : (
          <>
            {!barOpen && (
              <>
                <ImageSlider w1={w1} w2={w2} w3={w3} w4={w4} />
              </>
            )}
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
                            data: productWomenTshirtData,
                            Banner: basicB,

                            Heading: "Women's Basics",
                          }}>
                          <img
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
                            data: productWomenkurtiData,
                            Heading: "Women Dresses",
                          }}>
                          <img src={DW} className="categoryImage" alt="" />
                        </Link>
                      </Container>
                      <Container className="iBoxMini">
                        <Link
                          to="/category"
                          state={{
                            data: productWomenJumpsuitData,
                            Banner: bannerJ,
                            Heading: "Women Jumpsuit",
                          }}>
                          <img
                            src={JumpBannerSmall}
                            className="categoryImage "
                            alt=""
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
                          data: productWomenTshirtData,
                          Banner: basicB,

                          Heading: "Women's Basics",
                        }}>
                        <img src={basis} className="categoryImage" alt="" />
                      </Link>
                    </Flex>
                    <Container className="iBox">
                      <Link
                        to="/category"
                        state={{
                          data: productWomenkurtiData,

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
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenJeansData,
                      Heading: "Women Jeans",
                    }}>
                    <img src={JeansSmall} className="categoryImage" alt="" />
                  </Link>
                </Container>
                <Flex className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenTshirtData,
                      Banner: basicB,
                      Heading: "Women's Basics",
                    }}>
                    <img src={basis} className="categoryImage" alt="" />
                  </Link>
                </Flex>

                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      data: productWomenJumpsuitData,
                      Banner: bannerJ,
                      Heading: "Women Jumpsuit",
                    }}>
                    <img
                      src={JumpBannerSmall}
                      className="categoryImage"
                      alt=""
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
            <WGallery data={data} />
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

                          data: productWomenTshirtData,
                          Heading: "Women T-Shirt",
                        }}>
                        <img src={btS} className="categoryImage" alt="" />
                      </Link>
                    </Container>
                    <Container className="iBoxMini">
                      <Link
                        to="/category"
                        state={{
                          Banner: bannerBS,

                          data: productWomenshirtsData,
                          Heading: "Women's Shirts",
                        }}>
                        <img src={shirt1} className="categoryImage " alt="" />
                      </Link>
                    </Container>
                    <Container className="iBoxMini">
                      <Link
                        to="/category"
                        state={{
                          Banner: jog,

                          Heading: "Women Joggers",
                          data: productWomenJoggersData,
                        }}>
                        <img src={cargo} className="categoryImage" alt="" />
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

                          data: productWomenTshirtData,
                          Heading: "Women T-Shirt",
                        }}>
                        <img src={btS} className="categoryImage" alt="SHIRTS" />
                      </Link>
                    </Container>
                    <Container className="iBox">
                      <Link
                        to="/category"
                        state={{
                          Banner: jog,

                          Heading: "Women Joggers",
                          data: productWomenJoggersData,
                        }}>
                        <img src={cargo} className="categoryImage" alt="" />
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

                      data: productWomenTshirtData,
                      Heading: "Women T-Shirt",
                    }}>
                    <img src={btS} className="categoryImage" alt="" />
                  </Link>
                </Container>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      Banner: jog,

                      Heading: "Women Joggers",
                      data: productWomenJoggersData,
                    }}>
                    <img src={cargo} className="categoryImage" alt="" />
                  </Link>
                </Container>
                <Container className="iBox">
                  <Link
                    to="/category"
                    state={{
                      Banner: bannerBS,

                      data: productWomenshirtsData,
                      Heading: "Women's Shirts",
                    }}>
                    <img src={shirt1} className="categoryImage " alt="" />
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
