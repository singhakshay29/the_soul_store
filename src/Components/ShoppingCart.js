import {
  Box,
  Grid,
  Flex,
  Menu,
  Text,
  Image,
  Button,
  Divider,
  MenuList,
  MenuItem,
  GridItem,
  Container,
  MenuButton,
} from "@chakra-ui/react";
import Api from "../Api";
import MenNav from "./MenNav";
import Footer from "./Footer";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { ADD_TO_WISHLIST } from "../action";
import { GrFormClose } from "react-icons/gr";
import emptycart from "../assets/emptyCart.png";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ShoppingCart({ signinSuceess }) {
  const [img, setImg] = useState("");
  const [, setQty] = useState(1);
  const [text, setText] = useState("");
  const [size, setSize] = useState("S");
  const [results, setResults] = useState(0);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  async function getCart() {
    const user = localStorage.getItem("userDetails");
    if (user) {
      const parsedData = JSON.parse(user);
      try {
        const response = await fetch(Api.cart, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectid: "dm3s7h4e43m1",
          },
        });
        const data = await response.json();
        console.log(data);
        setResults(data.results);
        setProducts(data.data);
      } catch (error) {
        console.log("Somethings went wrong");
      }
    }
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "380px",
      padding: 0,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal(url, w, id) {
    setText(w);
    setIsOpen(true);
    setImg(url);
    setId(id);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "red";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <MenNav />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal">
        <Flex>
          <img src={img} alt="" className="modalImg" />
          <Flex className="mF1">
            <Flex style={{ justifyContent: "space-between" }}>
              <Text className="text2">Remove Item From Cart</Text>
              <GrFormClose onClick={closeModal} className="mClose" />
            </Flex>
            <Text className="mt1">
              {text
                ? "Are you sure you want to remove the product from the cart and add to wishlist?"
                : "Are you sure you want to remove this product from your cart?"}
            </Text>
          </Flex>
        </Flex>
        <button className="text2 mb1" onClick={closeModal}>
          NO
        </button>
        {text ? (
          <button
            className="text2 mb2"
            onClick={() => {
              dispatch(ADD_TO_WISHLIST(id));
            }}>
            YES
          </button>
        ) : (
          <button className="text2 mb2">YES</button>
        )}
      </Modal>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Text className="text2">MY BAG </Text>

        <Text>- - - - - - - - - - - -</Text>
        <Text className="text2">ADDRESS</Text>
        <Text>- - - - - - - - - - - -</Text>
        <Text className="text2">PAYMENT</Text>
      </Box>
      <Divider className="categoryDivider" />
      {results > 0 ? (
        <>
          <Flex>
            <Grid className="cartItem">
              {products.items.map((item) => (
                <GridItem className="shopbox">
                  <Image
                    src={item?.product?.displayImage}
                    className="shopboxImg"
                    alt={item?.product?.name}
                  />
                  <Box>
                    <Flex style={{ justifyContent: "space-between" }}>
                      <Text className="text2">{item?.product?.name}</Text>
                      <Text className="text2 mR10p">
                        {item?.product?.price}
                      </Text>
                    </Flex>
                    <Text className="text4">T-Shirts</Text>
                    <Menu>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            className="shopboxbutton"
                            isActive={isOpen}
                            as={Button}
                            rightIcon={
                              <ChevronDownIcon className="shopboxIcon" />
                            }>
                            Size:{size}
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              value="S"
                              onClick={() => setSize("S")}
                              className="bbutton">
                              S
                            </MenuItem>
                            <MenuItem
                              value="M"
                              onClick={() => setSize("M")}
                              className="bbutton">
                              M
                            </MenuItem>
                            <MenuItem
                              value="L"
                              onClick={() => setSize("L")}
                              className="bbutton">
                              L
                            </MenuItem>
                            <MenuItem
                              value="XL"
                              onClick={() => setSize("XL")}
                              className="bbutton">
                              XL
                            </MenuItem>
                            <MenuItem
                              value="XXL"
                              onClick={() => setSize("XXL")}
                              className="bbutton">
                              XXL
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                    <Menu>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            className="shopboxbutton"
                            isActive={isOpen}
                            as={Button}
                            rightIcon={
                              <ChevronDownIcon className="shopboxIcon" />
                            }>
                            Qty:{item?.quantity}
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              onClick={() => setQty(1)}
                              className="bbutton">
                              1
                            </MenuItem>
                            <MenuItem
                              onClick={() => setQty(2)}
                              className="bbutton">
                              2
                            </MenuItem>
                            <MenuItem
                              onClick={() => setQty(3)}
                              className="bbutton">
                              3
                            </MenuItem>
                            <MenuItem
                              onClick={() => setQty(4)}
                              className="bbutton">
                              4
                            </MenuItem>
                            <MenuItem
                              onClick={() => setQty(5)}
                              className="bbutton">
                              5
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>

                    <Divider className="categoryDivider mT30p" />
                    <Flex>
                      <Button
                        className="shopboxbutton2 "
                        onClick={() => {
                          openModal(
                            item?.product?.displayImage,
                            item?.product?._id
                          );
                        }}>
                        Remove
                      </Button>
                      <Button
                        className="shopboxbutton2 btn3 "
                        onClick={() => {
                          openModal(
                            item?.product?.displayImage,
                            "w",
                            item?.product?._id
                          );
                        }}>
                        MOVE TO WIHLIST
                      </Button>
                    </Flex>
                  </Box>
                </GridItem>
              ))}
            </Grid>

            <Box
              style={{
                marginLeft: "4%",
                marginTop: "22px",
              }}>
              <Box className="shopbox2">PLACE ORDER</Box>
              <Text style={{ color: "#a7a9ac" }}>BILLING DETAILS</Text>
              <Box className="shopbox3">
                <Flex className="boxS">
                  <Text className="shopbox3text"> Cart Total</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    {products?.totalPrice}
                  </Text>
                </Flex>
                <Flex className="boxS">
                  <Text className="shopbox3text"> Discount</Text>
                  <Text className="text2 price">
                    <BiRupee />0
                  </Text>
                </Flex>
                <Flex className="boxS">
                  <Text className="shopbox3text"> GST</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    12%
                  </Text>
                </Flex>
                <Flex className="boxS">
                  <Text className="shopbox3text"> Shipping Charges</Text>
                  <Text className="text2 price c">
                    <BiRupee />0
                  </Text>
                </Flex>
                <Flex className="boxS">
                  <Text className="shopbox3text"> Total Amount</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    {products?.totalPrice}
                  </Text>
                </Flex>
              </Box>
              <Box className="shopbox2">PLACE ORDER</Box>
            </Box>
          </Flex>
        </>
      ) : (
        <>
          <Container display="flex" justifyContent="center" marginTop="80px">
            <Image src={emptycart} width="130px" alt="bg" />
          </Container>
          <Box className="boxStyle">
            <Text className="bottomheading">Your shopping cart is empty.</Text>
            <Text className="bottomTexth3">
              Please add something soon, carts have feelings too.
            </Text>
            <>
              <Box>
                <Link to="/men">
                  <Button className="wishlist">CONTINUE SHOPPING</Button>
                </Link>

                {!signinSuceess && (
                  <>
                    <Link to="/login">
                      <Button className="loginbutton button2">LOGIN</Button>
                    </Link>
                  </>
                )}
              </Box>
            </>
          </Box>
        </>
      )}

      <Footer />
    </>
  );
}
