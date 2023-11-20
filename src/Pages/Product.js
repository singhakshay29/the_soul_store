import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  Divider,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Api from "../Api";
import Modal from "../Components/Modal";
import { BsWhatsapp } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_WISHLIST, OPEN_POPOVER, REMOVE_FROM_WISHLIST } from "../action";
import { addCart } from "../fetch";
import ImageSliderRes from "../Components/ImageSliderRes";
import NavRes from "../Components/NavRes";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const [loading, setLoading] = useState(true);
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { wishlist } = useSelector((state) => state.app);
  const [productImages, setProductImages] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const id = data._id;
  const favId = wishlist?.map((item) => {
    return item.products._id;
  });

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };
  const handelRotationRight = () => {
    const totalLength = productImages.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = productImages[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = productImages.filter((item) => {
      return productImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = productImages.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = productImages[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = productImages.filter((item) => {
      return productImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    async function getTheProductDeatails() {
      try {
        const baseApi = Api.product + id;
        const response = await fetch(baseApi, {
          method: "GET",
          headers: {
            projectId: "dm3s7h4e43m1",
          },
        });
        const data = await response.json();
        if (data.status === "success") {
          setproduct(data.data);
          setProductImages(data.data.images);
          setLoading(false);
        }
      } catch (error) {
        console.error("Somethings went wrong");
      }
    }

    getTheProductDeatails();
  }, [id]);

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
      {loading ? (
        <Flex className="loderbox1">
          <div>
            <Spinner color="red" size="xxl" thickness="20px" />
          </div>
        </Flex>
      ) : (
        <>
          {isSmallScreen ? (
            <>
              <NavRes />
              <ImageSliderRes productImages={productImages} />
              <Flex
                style={{
                  margin: "25px 0rem",
                  flexDirection: "column",
                }}>
                <Text className="headingboxRes">{product?.name}</Text>
                <Text className="btTRes">{product?.subCategory}</Text>
                <Text className="headingboxRes">
                  <FaRupeeSign fontSize="16px" /> {product?.price}
                </Text>
                <Divider className="categoryDividerRes" />
                <Text className="bottomTexth4Res">
                  Quantity
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    style={{ marginLeft: "10px" }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </Text>
                <Divider className="categoryDividerRes" />

                <Accordion defaultIndex={[0]} allowMultiple marginTop="2rem">
                  <AccordionItem className="accodianItem">
                    <h2 style={{ margin: 0 }}>
                      <AccordionButton className="accodianbutton">
                        <Box
                          className="HTexth3A"
                          as="span"
                          flex="1"
                          textAlign="left">
                          Product Details
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text className="bottomTexth3">Material & Care:</Text>
                      <Text className="text" marginLeft="30px" marginTop="20px">
                        100% Cotton
                      </Text>
                      <Text className="text" marginLeft="30px" marginTop="0">
                        Machine Wash
                      </Text>
                      <Text className="bottomTexth3">BRAND:</Text>
                      <Text className="text" marginLeft="30px" marginTop="0">
                        {product?.brand}
                      </Text>
                      <Text className="bottomTexth3">Country of Origin:</Text>
                      <Text className="text" marginLeft="30px" marginTop="0">
                        India (and proud)
                      </Text>
                      <Text className="text" marginLeft="30px">
                        Hey Souledsters! You must have noticed that we've said
                        goodbye to the little Mr. Souls sleeve label that we've
                        had through the years. But always remember, when you
                        shop from our app, website, stores, or online
                        marketplaces, you're always getting the genuine real
                        deal!
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem className="accodianItem">
                    <h2 style={{ margin: 0 }}>
                      <AccordionButton className="accodianbutton">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="HTexth3A">
                          Product Description
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text className="bottomTexth3">
                        Official Licensed {data?.brand}
                      </Text>
                      <Flex>
                        <Text className="bottomTexth3">Color:</Text>
                        <Text className="text mL10">{data?.color}</Text>
                      </Flex>
                      <Flex>
                        <Text className="bottomTexth3">Type:</Text>
                        <Text className="text mL10">{data?.gender}</Text>
                        <Text className="text mL10">{data?.subCategory}</Text>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
              <Flex className="bottomNav">
                {isLoggedIn ? (
                  <>
                    {favId?.includes(product._id) ? (
                      <>
                        <Button
                          onClick={() =>
                            dispatch(REMOVE_FROM_WISHLIST(product._id))
                          }
                          className="wishlistbuttonNav">
                          <AiFillHeart
                            style={{ fontSize: "1rem", margin: "0 1rem" }}
                          />
                          WISHLIST
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => dispatch(ADD_TO_WISHLIST(product._id))}
                          className="wishlistbuttonNav ">
                          <AiOutlineHeart
                            style={{ fontSize: "1rem", margin: "0 1rem" }}
                          />
                          WISHLIST
                        </Button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Button className="wishlistbuttonNav ">
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "#148c8d" }}>
                        <AiOutlineHeart
                          style={{ fontSize: "1rem", margin: "0 1rem" }}
                        />
                        WISHLIST
                      </Link>
                    </Button>
                  </>
                )}

                {isLoggedIn ? (
                  <>
                    <Button
                      onClick={() => addCart(product._id, quantity)}
                      className="buttonCartNav">
                      ADD TO CART
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="buttonCartNav">
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "white" }}>
                        ADD TO CART
                      </Link>
                    </Button>
                  </>
                )}
              </Flex>
            </>
          ) : (
            <>
              <Flex justifyContent="center" overflow="hidden">
                <Flex
                  style={{
                    marginTop: "15px",
                    flexDirection: "column",
                  }}>
                  <Flex className="categoryBox2">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#a7a9ac" }}>
                      <Text className="categoryP1">Home</Text>
                    </Link>
                    <Text className="categoryP1">/</Text>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#a7a9ac" }}>
                      <Text className="categoryP1">{data?.subCategory}</Text>
                    </Link>
                    <Text className="categoryP1">/</Text>
                    <Text className="color">{product?.name}</Text>
                  </Flex>
                  <Flex style={{ marginTop: "0.1rem", marginLeft: "2.5%" }}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                      {productImages?.map((item, index) => (
                        <GridItem key={index}>
                          <Image
                            src={item}
                            className="productImg"
                            alt={product.name}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item, index)}
                          />
                        </GridItem>
                      ))}
                    </Grid>
                    <Flex
                      style={{
                        margin: "5px 2rem",
                        flexDirection: "column",
                        maxWidth: "52rem",
                      }}>
                      <Text className="headingbox" marginTop="0">
                        {product?.name}
                      </Text>
                      <Text className="btT">{product?.subCategory}</Text>
                      <Divider className="categoryDivider" />
                      <Text className="headingbox" marginTop="0">
                        <FaRupeeSign fontSize="16px" /> {product?.price}
                      </Text>
                      <Text className="bottomTexth4">
                        Quantity
                        <select
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                          style={{ marginLeft: "10px" }}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </Text>
                      <Box display="flex" margin="0" paddingTop="30px">
                        {isLoggedIn ? (
                          <>
                            <Button
                              onClick={() => {
                                addCart(product._id, quantity);
                                dispatch(
                                  OPEN_POPOVER(
                                    "Product Added to your cart successfully"
                                  )
                                );
                              }}
                              className="buttonCartP">
                              <Link
                                to="/shoppingcart"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}>
                                ADD TO CART
                              </Link>
                            </Button>
                            {favId.includes(product._id) ? (
                              <>
                                <Button
                                  onClick={() => {
                                    dispatch(REMOVE_FROM_WISHLIST(product._id));
                                    dispatch(
                                      OPEN_POPOVER(
                                        "Product Removed from your Wishlist"
                                      )
                                    );
                                  }}
                                  className="wishlistbutton">
                                  <AiFillHeart style={{ fontSize: "1rem" }} />
                                  ADDED TO WISHLIST
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button
                                  onClick={() => {
                                    dispatch(ADD_TO_WISHLIST(product._id));
                                    dispatch(
                                      OPEN_POPOVER(
                                        "Product Added to your Wishlist"
                                      )
                                    );
                                  }}
                                  className="wishlistbutton ">
                                  <AiOutlineHeart
                                    style={{ fontSize: "1rem" }}
                                  />
                                  ADD TO WISHLIST
                                </Button>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <Link to="/login">
                              <Button
                                className="loginbutton"
                                borderRadius="0"
                                width="160px">
                                ADD TO CART
                              </Button>
                              <Button className="wishlist">
                                <AiOutlineHeart />
                                ADD TO WISHLIST
                              </Button>
                            </Link>
                          </>
                        )}
                      </Box>
                      <Text
                        className="bottomTexth3"
                        fontSize="15px"
                        marginTop="30px">
                        SHARE
                        <BsWhatsapp
                          className="iconStyle"
                          style={{ marginLeft: "55px" }}
                        />
                        <AiFillFacebook
                          className="iconStyle"
                          style={{ fontSize: "22px" }}
                        />
                        <AiOutlineInstagram
                          className="iconStyle"
                          style={{ fontSize: "23px" }}
                        />
                      </Text>

                      <Accordion
                        defaultIndex={[0]}
                        allowMultiple
                        marginTop="2rem">
                        <AccordionItem className="accodianItem">
                          <h2 style={{ margin: 0 }}>
                            <AccordionButton className="accodianbutton">
                              <Box
                                className="HTexth3A"
                                as="span"
                                flex="1"
                                textAlign="left">
                                Product Details
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text className="bottomTexth3">
                              Material & Care:
                            </Text>
                            <Text
                              className="text"
                              marginLeft="30px"
                              marginTop="20px">
                              100% Cotton
                            </Text>
                            <Text
                              className="text"
                              marginLeft="30px"
                              marginTop="0">
                              Machine Wash
                            </Text>
                            <Text className="bottomTexth3">BRAND:</Text>
                            <Text
                              className="text"
                              marginLeft="30px"
                              marginTop="0">
                              {product?.brand}
                            </Text>
                            <Text className="bottomTexth3">
                              Country of Origin:
                            </Text>
                            <Text
                              className="text"
                              marginLeft="30px"
                              marginTop="0">
                              India (and proud)
                            </Text>
                            <Text className="text" marginLeft="30px">
                              Hey Souledsters! You must have noticed that we've
                              said goodbye to the little Mr. Souls sleeve label
                              that we've had through the years. But always
                              remember, when you shop from our app, website,
                              stores, or online marketplaces, you're always
                              getting the genuine real deal!
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className="accodianItem">
                          <h2 style={{ margin: 0 }}>
                            <AccordionButton className="accodianbutton">
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className="HTexth3A">
                                Product Description
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text className="bottomTexth3">
                              Official Licensed {data?.brand}
                            </Text>
                            <Flex>
                              <Text className="bottomTexth3">Color:</Text>
                              <Text className="text mL10">{data?.color}</Text>
                            </Flex>
                            <Flex>
                              <Text className="bottomTexth3">Type:</Text>
                              <Text className="text mL10">{data?.gender}</Text>
                              <Text className="text mL10">
                                {data?.subCategory}
                              </Text>
                            </Flex>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Flex>
                  </Flex>
                  {clickedImg && (
                    <Modal
                      clickedImg={clickedImg}
                      handelRotationRight={handelRotationRight}
                      setClickedImg={setClickedImg}
                      handelRotationLeft={handelRotationLeft}
                    />
                  )}
                </Flex>
              </Flex>
            </>
          )}
        </>
      )}
    </>
  );
}
