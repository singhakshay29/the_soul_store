import NavRes from "../Components/NavRes";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import MBJ from "../assets/MBJ.jpg";
import MBS from "../assets/MBS.jpg";
import MBJS from "../assets/MBJS.jpg";
import WGallery from "../Components/WGallery";
import DW from "../assets/DW.jpg";
import btS from "../assets/btS.jpg";
import jog from "../assets/jog.jpg";
import menShorts from "../assets/menShorts.jpg";
import menJog from "../assets/menJog.jpg";
import ImageSlider from "../Components/ImageSlider";
import basis from "../assets/basis.jpg";
import cargo from "../assets/cargo.jpg";
import member from "../assets/member.png";
import shirt1 from "../assets/shirt1.jpg";
import Pretty from "../assets/Pretty.jpg";
import basicB from "../assets/basicB.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import menJeans from "../assets/menJeans.jpg";
import JeansSmall from "../assets/JeansSmall.jpg";
import tshirtsmall from "../assets/tshirtsmall.jpg";
import sweatshirt from "../assets/sweatshirt.jpg";
import {
  FETCH_PRODUCTS,
  GET_CART,
  GET_WISHLIST,
  LOADING_ACTION,
  SET_ACTIVE,
} from "../action";
import bannerBS from "../assets/bannerBS.jpg";
import { Link, NavLink } from "react-router-dom";
import Collection from "../assets/Collection.jpg";
import React, { useEffect, useState } from "react";
import JumpBannerSmall from "../assets/JumpBannerSmall.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Image,
  Container,
  Flex,
  Box,
  Button,
  Spinner,
} from "@chakra-ui/react";

export default function Home() {
  const [barOpen, setBarOpen] = useState();
  const [isSmallScreenMini, setIsSmallScreenMini] = useState(
    window.innerWidth < 750
  );
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const { productsListFilter, loading, active } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    if (Object.keys(productsListFilter).length > 0) {
      dispatch(LOADING_ACTION(false));
    }
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, [productsListFilter]);
  const {
    productWomenkurtiData,
    productMenTshirtData,
    productMenShirtData,
    productMenJeansData,
    productMenShortsData,
    productMenJoggersData,
    productWomenTshirtData,
    productWomenJeansData,
    productWomenshirtsData,
    productWomenJoggersData,
    productWomenJumpsuitData,
  } = productsListFilter;

  const handleClick = (event) => {
    dispatch(SET_ACTIVE(event.target.id));
  };

  useEffect(() => {
    dispatch(FETCH_PRODUCTS());
    dispatch(GET_WISHLIST());
    dispatch(GET_CART());

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };
    const handleResizeMini = () => {
      setIsSmallScreenMini(window.innerWidth < 750);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeMini);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeMini);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Flex className="loderbox1">
          <div>
            <Spinner color="red" size="xxl" thickness="20px" />
          </div>
        </Flex>
      ) : (
        <>
          {isSmallScreen && (
            <NavRes barOpen={barOpen} setBarOpen={setBarOpen} />
          )}
          {isSmallScreenMini && (
            <Box>
              <NavLink to="/">
                <Button
                  className={
                    active === "1" ? "thirdactive thirdnav" : "thirdnav"
                  }
                  id={"1"}
                  onClick={handleClick}>
                  Women
                </Button>
                |
                <Button
                  className={
                    active === "2" ? "thirdactive thirdnav" : "thirdnav"
                  }
                  id={"2"}
                  onClick={handleClick}>
                  Men
                </Button>
              </NavLink>
            </Box>
          )}

          <Container style={{ overflow: "hidden" }}>
            {active === "1" ? (
              <>
                {isSmallScreenMini ? (
                  <>
                    {!barOpen && (
                      <>
                        <ImageSlider
                          w1={Collection}
                          w2={Pretty}
                          w3={btS}
                          w4={cargo}
                        />
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
              </>
            ) : (
              <>
                {isSmallScreenMini ? (
                  <>
                    {!barOpen && (
                      <>
                        <ImageSlider
                          w1={menJog}
                          w2={menJeans}
                          w3={tshirtsmall}
                          w4={sweatshirt}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {!barOpen && (
                      <>
                        <ImageSlider w1={m1} w2={m2} w3={m3} w4={m4} />
                      </>
                    )}
                  </>
                )}
              </>
            )}

            <Flex alignContent="center" flexDirection="column" width="100%">
              <Flex className="heading1">COLLECTIONS</Flex>

              <Flex justifyContent="center">
                {active === "1" ? (
                  <>
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
                                    BannerRes: basis,
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
                                    BannerRes: DW,
                                  }}>
                                  <img
                                    src={DW}
                                    className="categoryImage"
                                    alt=""
                                  />
                                </Link>
                              </Container>
                              <Container className="iBoxMini">
                                <Link
                                  to="/category"
                                  state={{
                                    data: productWomenJumpsuitData,
                                    Banner: bannerJ,
                                    Heading: "Women Jumpsuit",
                                    BannerRes: JumpBannerSmall,
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
                                <img
                                  src={basis}
                                  className="categoryImage"
                                  alt=""
                                />
                              </Link>
                            </Flex>
                            <Container className="iBox">
                              <Link
                                to="/category"
                                state={{
                                  data: productWomenkurtiData,
                                  Heading: "Women Dresses",
                                }}>
                                <img
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
                            <img
                              src={JeansSmall}
                              className="categoryImage"
                              alt=""
                            />
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
                  </>
                ) : (
                  <>
                    {isSmallScreen ? (
                      <>
                        {isSmallScreenMini ? (
                          <>
                            <Flex flexDirection="column">
                              <Flex className="iBoxMini">
                                <Link
                                  to="/category"
                                  state={{
                                    data: productMenTshirtData,
                                    Heading: "Men's Oversized T-Shirts",
                                    BannerRes: c1,
                                  }}>
                                  <img
                                    src={c1}
                                    className="categoryImage"
                                    alt="SHIRTS"
                                  />
                                </Link>
                              </Flex>
                              <Container className="iBoxMini">
                                <Link
                                  to="/category"
                                  state={{
                                    data: productMenShirtData,
                                    Heading: "Men's Shirt",
                                    BannerRes: c2,
                                  }}>
                                  <Image
                                    src={c2}
                                    className="categoryImage"
                                    alt="T-SHIRTS"
                                  />
                                </Link>
                              </Container>

                              <Container className="iBoxMini">
                                <Link
                                  to="/category"
                                  state={{
                                    data: productMenTshirtData,
                                    Heading: "Men's T-Shirts",
                                    BannerRes: c3,
                                  }}>
                                  <img
                                    src={c3}
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
                                  data: productMenTshirtData,
                                  Heading: "Men's Oversized T-Shirts",
                                }}>
                                <img
                                  src={c1}
                                  className="categoryImage"
                                  alt="SHIRTS"
                                />
                              </Link>
                            </Flex>
                            <Container className="iBox">
                              <Link
                                to="/category"
                                state={{
                                  data: productMenShirtData,
                                  Heading: "Men's Shirt",
                                }}>
                                <img
                                  src={c2}
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
                              data: productMenTshirtData,
                              Heading: "Men's Oversized T-Shirts",
                            }}>
                            <img
                              src={c1}
                              className="categoryImage"
                              alt="SHIRTS"
                            />
                          </Link>
                        </Container>
                        <Flex className="iBox">
                          <Link
                            to="/category"
                            state={{
                              data: productMenShirtData,
                              Heading: "Men's Shirt",
                            }}>
                            <img
                              src={c2}
                              className="categoryImage"
                              alt="T-SHIRTS"
                            />
                          </Link>
                        </Flex>

                        <Container className="iBox">
                          <Link
                            to="/category"
                            state={{
                              data: productMenTshirtData,
                              Heading: "Men's T-Shirts",
                            }}>
                            <img
                              src={c3}
                              className="categoryImage "
                              alt="OVERSIZED T-SHIRTS"
                            />
                          </Link>
                        </Container>
                      </>
                    )}
                  </>
                )}
              </Flex>
            </Flex>
            {active === "1" && (
              <>
                {!isSmallScreen && (
                  <>
                    <Flex
                      alignContent="center"
                      flexDirection="column"
                      width="100%">
                      <Flex className="heading1">SHOP BY COLOR</Flex>
                    </Flex>
                    <WGallery />
                  </>
                )}
              </>
            )}
            {active === "1" ? (
              <>
                {isSmallScreen ? (
                  <>
                    {isSmallScreenMini ? (
                      <>
                        <Flex
                          alignContent="center"
                          flexDirection="column"
                          width="100%">
                          <Flex className="heading1">CATEGORIES</Flex>
                          <Flex justifyContent="center" flexDirection="column">
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: bannerT,
                                  data: productWomenTshirtData,
                                  Heading: "Women T-Shirt",
                                  BannerRes: btS,
                                }}>
                                <img
                                  src={btS}
                                  className="categoryImage"
                                  alt=""
                                />
                              </Link>
                            </Container>
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: bannerBS,
                                  BannerRes: shirt1,
                                  data: productWomenshirtsData,
                                  Heading: "Women's Shirts",
                                }}>
                                <img
                                  src={shirt1}
                                  className="categoryImage "
                                  alt=""
                                />
                              </Link>
                            </Container>
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: jog,
                                  BannerRes: cargo,
                                  Heading: "Women Joggers",
                                  data: productWomenJoggersData,
                                }}>
                                <img
                                  src={cargo}
                                  className="categoryImage"
                                  alt=""
                                />
                              </Link>
                            </Container>
                          </Flex>
                        </Flex>
                      </>
                    ) : (
                      <>
                        <Flex
                          alignContent="center"
                          flexDirection="column"
                          width="100%">
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
                                <img
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

                                  Heading: "Women Joggers",
                                  data: productWomenJoggersData,
                                }}>
                                <img
                                  src={cargo}
                                  className="categoryImage"
                                  alt=""
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
                    <Flex
                      alignContent="center"
                      flexDirection="column"
                      width="100%">
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
                            <img
                              src={shirt1}
                              className="categoryImage "
                              alt=""
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
                {isSmallScreen ? (
                  <>
                    {isSmallScreenMini ? (
                      <>
                        <Flex
                          alignContent="center"
                          flexDirection="column"
                          width="100%">
                          <Flex className="heading1">CATEGORIES</Flex>
                          <Flex justifyContent="center" flexDirection="column">
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: MBJ,
                                  data: productMenJoggersData,
                                  Heading: "Men's Joggers",
                                  BannerRes: menJog,
                                }}>
                                <img
                                  src={menJog}
                                  className="categoryImage"
                                  alt=""
                                />
                              </Link>
                            </Container>
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: MBS,
                                  data: productMenShortsData,
                                  Heading: "Men's Shorts",
                                  BannerRes: menShorts,
                                }}>
                                <img
                                  src={menShorts}
                                  className="categoryImage"
                                  alt="T-SHIRTS"
                                />
                              </Link>
                            </Container>
                            <Container className="iBoxMini">
                              <Link
                                to="/category"
                                state={{
                                  Banner: MBJS,
                                  data: productMenJeansData,
                                  Heading: "Men's Jeans",
                                  BannerRes: menJeans,
                                }}>
                                <img
                                  src={menJeans}
                                  className="categoryImage "
                                  alt=""
                                />
                              </Link>
                            </Container>
                          </Flex>
                        </Flex>
                      </>
                    ) : (
                      <>
                        <Flex
                          alignContent="center"
                          flexDirection="column"
                          width="100%">
                          <Flex className="heading1">CATEGORIES</Flex>
                          <Flex justifyContent="center" height="28rem">
                            <Container className="iBox">
                              <Link
                                to="/category"
                                state={{
                                  Banner: MBJ,
                                  data: productMenJoggersData,
                                  Heading: "Men's Joggers",
                                }}>
                                <img
                                  src={menJog}
                                  className="categoryImage"
                                  alt="SHIRTS"
                                />
                              </Link>
                            </Container>
                            <Container className="iBox">
                              <Link
                                to="/category"
                                state={{
                                  Banner: MBJS,
                                  data: productMenJeansData,
                                  Heading: "Men's Jeans",
                                }}>
                                <img
                                  src={menJeans}
                                  className="categoryImage "
                                  alt=""
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
                    <Flex
                      alignContent="center"
                      flexDirection="column"
                      width="100%">
                      <Flex className="heading1">CATEGORIES</Flex>
                      <Flex justifyContent="center" height="28rem">
                        <Container className="iBox">
                          <Link
                            to="/category"
                            state={{
                              Banner: MBS,
                              data: productMenShortsData,
                              Heading: "Men's Shorts",
                            }}>
                            <img
                              src={menShorts}
                              className="categoryImage"
                              alt="T-SHIRTS"
                            />
                          </Link>
                        </Container>
                        <Container className="iBox">
                          <Link
                            to="/category"
                            state={{
                              Banner: MBJ,
                              data: productMenJoggersData,
                              Heading: "Men's Joggers",
                            }}>
                            <img
                              src={menJog}
                              className="categoryImage"
                              alt="SHIRTS"
                            />
                          </Link>
                        </Container>
                        <Container className="iBox">
                          <Link
                            to="/category"
                            state={{
                              Banner: MBJS,
                              data: productMenJeansData,
                              Heading: "Men's Jeans",
                            }}>
                            <img
                              src={menJeans}
                              className="categoryImage "
                              alt=""
                            />
                          </Link>
                        </Container>
                      </Flex>
                    </Flex>
                  </>
                )}
              </>
            )}

            <Card className="heading1">MEMBERSHIP</Card>
            <Image src={member} alt="membership" width="100%" />
          </Container>
        </>
      )}
    </>
  );
}
