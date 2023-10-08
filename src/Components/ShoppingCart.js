import Api from "../Api";
import MenNav from "./MenNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import emptycart from "../assets/emptyCart.png";
import wishlist1 from "../assets/wishlist1.png";
import React, { useEffect, useState } from "react";
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
  Container,
  MenuButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ShoppingCart({ signinSuceess }) {
  const [results] = useState(1);
  const [size, setSize] = useState("S");
  const [qty, setQty] = useState(1);
  async function getCart() {
    const user = localStorage.getItem("signupDeatils");
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
      } catch (error) {
        console.log("Somethings went wrong");
      }
    }
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <MenNav />
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
            <Grid templateColumns="250px auto" className="shopbox">
              <Image src={wishlist1} className="shopboxImg" alt="photo" />
              <Box>
                <Flex style={{ justifyContent: "space-between" }}>
                  <Text className="text2">Item Name</Text>
                  <Text className="text2 mR10p">Price</Text>
                </Flex>
                <Text className="text4">Item Category</Text>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        className="shopboxbutton"
                        isActive={isOpen}
                        as={Button}
                        rightIcon={<ChevronDownIcon className="shopboxIcon" />}>
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
                        rightIcon={<ChevronDownIcon className="shopboxIcon" />}>
                        Qty:{qty}
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => setQty(1)} className="bbutton">
                          1
                        </MenuItem>
                        <MenuItem onClick={() => setQty(2)} className="bbutton">
                          2
                        </MenuItem>
                        <MenuItem onClick={() => setQty(3)} className="bbutton">
                          3
                        </MenuItem>
                        <MenuItem onClick={() => setQty(4)} className="bbutton">
                          4
                        </MenuItem>
                        <MenuItem onClick={() => setQty(5)} className="bbutton">
                          5
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>

                <Divider className="categoryDivider mT30p" />
                <Button className="shopboxbutton2 ">Remove</Button>
                <Button className="shopboxbutton2 btn3 ">
                  MOVE TO WIHLIST
                </Button>
              </Box>
            </Grid>
            <Box style={{ marginLeft: "7%", marginTop: "60px" }}>
              <Box className="shopbox2">PLACE ORDER</Box>
              <Text style={{ color: "#a7a9ac" }}>BILLING DETAILS</Text>
              <Box className="shopbox3">
                <Flex className="boxS">
                  <Text className="shopbox3text"> Cart Total</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    Price
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
                    Price
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
                    Price
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
