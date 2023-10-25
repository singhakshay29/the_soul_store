import {
  Box,
  Flex,
  Menu,
  Text,
  Image,
  Button,
  Divider,
  MenuList,
  MenuItem,
  Container,
  MenuButton,
} from "@chakra-ui/react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import emptycart from "../assets/emptyCart.png";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ADD_TO_WISHLIST, GET_CART, REMOVE_FROM_CART } from "../action";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart({ openPopover }) {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState("");
  const [size, setSize] = useState("S");
  const [text, setText] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.app);
  let items, totalPrice, results;
  if (cart.results > 0) {
    const { data } = cart;
    ({ results } = cart);
    ({ items, totalPrice } = data);
  }

  const customStyles = {
    content: {
      top: "50%",
      padding: 0,
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "380px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal(url, v, id) {
    setId(id);
    setText(v);
    setImg(url);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "red";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleRemoveAdd = (productId, qty) => {
    openPopover("Product Added to your Wishlist");
    dispatch(REMOVE_FROM_CART(productId, qty));
    setTimeout(() => {
      dispatch(ADD_TO_WISHLIST(productId));
    }, 200);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleRemove = (productId, qty) => {
    openPopover("Product removed from your cart");
    dispatch(REMOVE_FROM_CART(productId, qty));
    setTimeout(() => {
      dispatch(GET_CART());
    }, 200);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    dispatch(GET_CART());
    // eslint-disable-next-line
  }, []);
  return (
    <>
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
              handleRemoveAdd(id, qty);
            }}>
            YES
          </button>
        ) : (
          <button className="text2 mb2" onClick={() => handleRemove(id, qty)}>
            YES
          </button>
        )}
      </Modal>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Text className="text2 c1">MY BAG </Text>
        <Text>- - - - - - - - - - - -</Text>
        <Text className="text2 c2">ADDRESS</Text>
        <Text>- - - - - - - - - - - -</Text>

        <Text className="text2 c2">PAYMENT</Text>
      </Box>
      <Divider className="categoryDivider" />

      {results > 0 ? (
        <Flex style={{ justifyContent: "space-evenly" }}>
          <Flex className="cartItem">
            {items.map((item) => (
              <Flex className="shopbox">
                <Image
                  className="shopboxImg"
                  alt={item?.product?.name}
                  src={item?.product?.displayImage}
                />
                <Box>
                  <Flex style={{ justifyContent: "space-between" }}>
                    <Text className="text2">{item?.product?.name}</Text>
                    <Text className="text2">{item?.product?.price}</Text>
                  </Flex>
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
                          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                            <MenuItem
                              key={index}
                              onClick={() => setSize(size)}
                              className="bbutton">
                              {size}
                            </MenuItem>
                          ))}
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
                          Qty:{qty}
                        </MenuButton>
                        <MenuList>
                          {[1, 2, 3, 4].map((qty) => (
                            <MenuItem
                              key={qty}
                              onClick={() => setQty(qty)}
                              className="bbutton">
                              {qty}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </>
                    )}
                  </Menu>

                  <Divider className="categoryDivider mTTp" />
                  <Flex>
                    <Button
                      className="shopboxbutton2 "
                      onClick={() => {
                        openModal(
                          item?.product?.displayImage,
                          false,
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
                          true,
                          item?.product?._id
                        );
                      }}>
                      MOVE TO WIHLIST
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Flex>

          <Box
            style={{
              marginLeft: "4%",
              marginTop: "22px",
            }}>
            <Link to="/address" style={{ textDecoration: "none" }}>
              <Box className="shopbox2">PLACE ORDER</Box>
            </Link>
            <Text style={{ color: "#a7a9ac" }}>BILLING DETAILS</Text>
            <Box className="shopbox3">
              <Flex className="boxS">
                <Text className="shopbox3text"> Cart Total</Text>
                <Text className="text2 price">
                  <BiRupee />
                  {totalPrice}
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
                  {totalPrice}
                </Text>
              </Flex>
            </Box>
            <Link to="/address" style={{ textDecoration: "none" }}>
              <Box className="shopbox2">PLACE ORDER</Box>
            </Link>
          </Box>
        </Flex>
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

                {!isLoggedIn && (
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
    </>
  );
}
