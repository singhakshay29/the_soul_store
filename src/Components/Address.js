import { Box, Grid, Flex, Text, GridItem } from "@chakra-ui/react";
import Footer from "./Footer";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { GrRadialSelected } from "react-icons/gr";

export default function Address() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressType, setAddressType] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinNo, setPinNo] = useState("");
  const [addCount, setaddCount] = useState(0);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const { cart } = useSelector((state) => state.app);
  let totalPrice, results;
  if (cart.results > 0) {
    const { data } = cart;
    ({ results } = cart);
    ({ totalPrice } = data);
  }

  const handleSave = () => {
    setaddCount((prev) => prev + 1);
    setIsOpen2(false);
  };
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  const customStyles2 = {
    content: {
      top: "50%",
      padding: 0,
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "560px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "460px",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles2}
        ariaHideApp={false}
        contentLabel="Example Modal">
        <Flex style={{ flexDirection: "column" }}>
          <Flex>
            <Text
              style={{
                position: "absolute",
                left: "10px",
                top: "10px",
                margin: 0,
              }}>
              Add New Address
            </Text>
            <AiOutlineClose
              onClick={closeModal2}
              style={{
                right: "10px",
                position: "absolute",
                top: "10px",
                cursor: "pointer",
              }}
            />
          </Flex>
          <Flex style={{ margin: "10px" }}>
            <form>
              <input
                className="formInputf"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="formInput"
                type="text"
                placeholder="Second Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="Address type"
                value={addressType}
                onChange={(e) => setAddressType(e.target.value)}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="House No."
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="Street Name"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
              <input
                className="formInput"
                type="text"
                placeholder="Pin no"
                value={pinNo}
                onChange={(e) => setPinNo(e.target.value)}
              />
              <input
                className="formInput"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="formInput"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                className="formInput"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </form>
          </Flex>
          <Flex className="buttonbox">
            <button className="addcancel">Cancel</button>
            <button className="addSave" onClick={handleSave}>
              Save
            </button>
          </Flex>
        </Flex>
      </Modal>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Text className="text2 c1">MY BAG </Text>
        <Text>- - - - - - - - - - - -</Text>
        <Text className="text2 c1">ADDRESS</Text>
        <Text>- - - - - - - - - - - -</Text>
        <Text className="text2 c2">PAYMENT</Text>
      </Box>
      <Text style={{ margin: "0px 20px" }} className="wT">
        Delivery To
      </Text>

      {results > 0 && (
        <div>
          <Flex>
            <Grid className="cartItem">
              <GridItem className="shopbox">
                {addCount > 0 && (
                  <Box className="saveadd">
                    <GrRadialSelected
                      style={{
                        stroke: "#148c8d",
                        position: "absolute",
                        marginLeft: "18rem",
                      }}
                    />
                    <Text className="text2 saveAddtext">
                      {firstName + " "}
                      {lastName}
                    </Text>
                    <Text className="normalText">{addressType}</Text>
                    <Text className="normalText">{houseNo}</Text>
                    <Text className="normalText">{streetName}</Text>
                    <Text className="normalText">{pinNo}</Text>
                    <Text className="normalText">{city}</Text>
                    <Text className="normalText">{state}</Text>
                    <Text className="normalText">{country}</Text>
                    <button className="addedit ">EDIT</button>
                    <button className="addedit mL10 ">REMOVE</button>
                  </Box>
                )}
                <Box
                  className="addresbox"
                  onClick={() => {
                    openModal2();
                  }}>
                  <FaPlus className="plusIcon" />
                </Box>
              </GridItem>
            </Grid>

            <Box
              style={{
                marginLeft: "2%",
                marginTop: "22px",
              }}>
              <Text style={{ color: "#a7a9ac" }}>BILLING DETAILS</Text>
              <Box className="shopbox4">
                <Flex className="boxS">
                  <Text className="shopbox3text"> Cart Total</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    {totalPrice}
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
                  <Text className="shopbox3text"> Total Amount</Text>
                  <Text className="text2 price">
                    <BiRupee />
                    {totalPrice}
                  </Text>
                </Flex>
              </Box>
              <Box className="shopbox2">PLACE ORDER</Box>
            </Box>
          </Flex>
        </div>
      )}

      <Footer />
    </>
  );
}
