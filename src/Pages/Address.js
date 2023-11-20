import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { placeOrder } from "../fetch";
import { REMOVE_FROM_CART } from "../action";
import { Link } from "react-router-dom";

export default function Address() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressType: "",
    houseNo: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
    pinNo: "",
  });
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [addCount, setAddCount] = useState(() => {
    const savedData = localStorage.getItem("userDetailsList");
    return savedData ? JSON.parse(savedData).length : 0;
  });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [userDetailsList, setUserDetailsList] = useState(() => {
    const savedData = localStorage.getItem("userDetailsList");
    return savedData ? JSON.parse(savedData) : [];
  });
  const { cart } = useSelector((state) => state.app);
  let items, totalPrice, results;
  if (cart.results > 0) {
    const { data } = cart;
    ({ results } = cart);
    ({ items, totalPrice } = data);
  }

  const handleEdit = (index) => {
    setFormData(userDetailsList[index]);
    setIsOpen2(true);
  };

  const handleRemove = (index) => {
    const updatedList = [...userDetailsList];
    updatedList.splice(index, 1);
    setUserDetailsList(updatedList);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAddCount((prev) => prev + 1);
    setUserDetailsList([...userDetailsList, formData]);
    setIsOpen2(false);
    setFormData({
      firstName: "",
      lastName: "",
      addressType: "",
      houseNo: "",
      streetName: "",
      city: "",
      state: "",
      country: "",
      pinNo: "",
    });
  };

  function openModal2() {
    setIsOpen2(true);
    setFormData({
      firstName: "",
      lastName: "",
      addressType: "",
      houseNo: "",
      streetName: "",
      city: "",
      state: "",
      country: "",
      pinNo: "",
    });
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
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleOrder = async (address) => {
    for (const product of items) {
      await delay(200);
      await placeOrder(product.product._id, address, product.quantity);
      dispatch(REMOVE_FROM_CART(product.product._id, product.quantity));
    }
  };
  // items.map(
  //   (product) => {
  //     dispatch(REMOVE_FROM_CART(product.product._id, product.quantity));
  //     setTimeout(()=>{
  //       placeOrder(product.product._id, address, product.quantity);
  //     },200)
  //   }
  // );
  //};

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userDetailsList]);

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
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                className="formInput"
                type="text"
                name="lastName"
                placeholder="Second Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="Address type"
                name="addressType"
                value={formData.addressType}
                onChange={handleInputChange}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="House No."
                name="houseNo"
                value={formData.houseNo}
                onChange={handleInputChange}
              />
              <input
                className="formInputtype2"
                type="text"
                placeholder="Street Name"
                name="streetName"
                value={formData.streetName}
                onChange={handleInputChange}
              />
              <input
                className="formInput"
                type="text"
                placeholder="Pin no"
                name="pinNo"
                value={formData.pinNo}
                onChange={handleInputChange}
              />
              <input
                className="formInput"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                className="formInput"
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              <input
                className="formInput"
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </form>
          </Flex>
          <Flex className="buttonbox">
            <button className="addcancel" onClick={closeModal2}>
              Cancel
            </button>
            <button
              className="addSave"
              type="submit"
              onClick={handleFormSubmit}>
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
          {isSmallScreen ? (
            <>
              <Flex flexDirection="column" alignItems="center">
                <Flex className="shopboxAddRes">
                  {addCount > 0 && (
                    <>
                      {userDetailsList.map((formData, index) => (
                        <>
                          <Box className="saveadd" key={index}>
                            <input
                              className="inputRadio"
                              type="radio"
                              name={index}
                              checked={selectedAddress === index}
                              onChange={() => setSelectedAddress(index)}
                            />
                            <Text className="text2 saveAddtext">
                              {formData.firstName + " "}
                              {formData.lastName}
                            </Text>
                            <Text className="normalText">
                              {formData.addressType}
                            </Text>
                            <Text className="normalText">
                              {formData.houseNo}
                            </Text>
                            <Text className="normalText">
                              {formData.streetName}
                            </Text>
                            <Text className="normalText">{formData.pinNo}</Text>
                            <Text className="normalText">{formData.city}</Text>
                            <Text className="normalText">{formData.state}</Text>
                            <Text className="normalText">
                              {formData.country}
                            </Text>
                            <button
                              className="addedit "
                              onClick={() => handleEdit(index)}>
                              EDIT
                            </button>
                            <button
                              className="addedit mL10 "
                              onClick={() => handleRemove(index)}>
                              REMOVE
                            </button>
                          </Box>
                        </>
                      ))}
                    </>
                  )}
                  {addCount < 2 && (
                    <>
                      <Box
                        className="addresbox"
                        onClick={() => {
                          openModal2();
                        }}>
                        <FaPlus className="plusIcon" />
                      </Box>
                    </>
                  )}
                </Flex>
                <Box
                  style={{
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
                      <Text className="shopbox3text"> GST(Included)</Text>
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
                  <Link to="/shoppingcart" style={{ textDecoration: "none" }}>
                    <Box
                      onClick={() =>
                        handleOrder(userDetailsList[selectedAddress])
                      }
                      className="shopbox2">
                      PLACE ORDER
                    </Box>
                  </Link>
                </Box>
              </Flex>
            </>
          ) : (
            <>
              <Flex justifyContent="space-evenly">
                <Flex className="shopboxAdd">
                  {addCount > 0 && (
                    <>
                      {userDetailsList.map((formData, index) => (
                        <>
                          <Box className="saveadd" key={index}>
                            <input
                              className="inputRadio"
                              type="radio"
                              name={index}
                              checked={selectedAddress === index}
                              onChange={() => setSelectedAddress(index)}
                            />
                            <Text className="text2 saveAddtext">
                              {formData.firstName + " "}
                              {formData.lastName}
                            </Text>
                            <Text className="normalText">
                              {formData.addressType}
                            </Text>
                            <Text className="normalText">
                              {formData.houseNo}
                            </Text>
                            <Text className="normalText">
                              {formData.streetName}
                            </Text>
                            <Text className="normalText">{formData.pinNo}</Text>
                            <Text className="normalText">{formData.city}</Text>
                            <Text className="normalText">{formData.state}</Text>
                            <Text className="normalText">
                              {formData.country}
                            </Text>
                            <button
                              className="addedit "
                              onClick={() => handleEdit(index)}>
                              EDIT
                            </button>
                            <button
                              className="addedit mL10 "
                              onClick={() => handleRemove(index)}>
                              REMOVE
                            </button>
                          </Box>
                        </>
                      ))}
                    </>
                  )}
                  {addCount < 2 && (
                    <>
                      <Box
                        className="addresbox"
                        onClick={() => {
                          openModal2();
                        }}>
                        <FaPlus className="plusIcon" />
                      </Box>
                    </>
                  )}
                </Flex>
                <Box
                  style={{
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
                      <Text className="shopbox3text"> GST(Included)</Text>
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
                  <Link to="/shoppingcart" style={{ textDecoration: "none" }}>
                    <Box
                      onClick={() =>
                        handleOrder(userDetailsList[selectedAddress])
                      }
                      className="shopbox2">
                      PLACE ORDER
                    </Box>
                  </Link>
                </Box>
              </Flex>
            </>
          )}
        </div>
      )}
    </>
  );
}
