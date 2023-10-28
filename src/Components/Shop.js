import Card, { Card2 } from "./Card";
import c1 from "../assets/c1.png";
import { RiFilter2Line } from "react-icons/ri";
import { BsSortUp } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Text,
  Divider,
  Container,
  Flex,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  UnorderedList,
} from "@chakra-ui/react";
import NavRes from "./NavRes";
export default function Shop({ openPopover }) {
  const [sortingOption, setSortingOption] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectSize, setSelectedSize] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);
  const [isSmallScreenMini, setIsSmallScreenMini] = useState(
    window.innerWidth < 750
  );
  const btnRef = useRef();
  const object = useLocation();
  const { data } = object.state;
  const { itemList, brandName, colorName } = data;
  const { Banner, Heading, BannerRes } = object.state;
  const handleSortingAndFiltering = (
    sortingCriteria,
    filterCriteriaBrand,
    filterCriteriaColor,
    filterCriteriaPrice,
    filterCriteriaSize
  ) => {
    const sortedAndFilteredItems = [...itemList];

    if (sortingCriteria === "A to Z") {
      sortedAndFilteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingCriteria === "Price-Low to High") {
      sortedAndFilteredItems.sort((a, b) => a.price - b.price);
    } else if (sortingCriteria === "Price-High to Low") {
      sortedAndFilteredItems.sort((a, b) => b.price - a.price);
    }

    const filteredItems = sortedAndFilteredItems.filter(
      (item) =>
        (filterCriteriaBrand.length === 0 ||
          filterCriteriaBrand.includes(item.brand)) &&
        (filterCriteriaColor.length === 0 ||
          filterCriteriaColor.includes(item.color)) &&
        (filterCriteriaSize.length === 0 ||
          filterCriteriaSize.some((size) => item.size.includes(size))) &&
        (filterCriteriaPrice.length === 0 ||
          filterCriteriaPrice.some(
            (range) => item.price >= range.min && item.price <= range.max
          ))
    );

    return filteredItems;
  };
  const isSizeSelected = (size) => selectSize.includes(size);
  const filteredItems = handleSortingAndFiltering(
    sortingOption,
    selectedBrands,
    selectedColors,
    selectedPrices,
    selectSize
  );
  const handleBrandSelect = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleColorSelect = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selectedColor) => selectedColor !== color)
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handlePriceSelect = (min, max) => {
    console.log("Selected price range:", min, max);
    const isAlreadySelected = selectedPrices.some(
      (range) => range.min === min && range.max === max
    );

    if (isAlreadySelected) {
      console.log("Deselecting range:", min, max);
      setSelectedPrices(
        selectedPrices.filter((range) => range.min !== min || range.max !== max)
      );
    } else {
      console.log("Selecting range:", min, max);
      setSelectedPrices([{ min, max }]);
    }
  };
  const handleSizeSelect = (size) => {
    if (selectSize.includes(size)) {
      setSelectedSize(
        selectSize.filter((selectedSize) => selectedSize !== size)
      );
    } else {
      setSelectedSize([...selectSize, size]);
    }
  };

  const formattedNames = brandName?.map((name) => {
    const words = name.toLowerCase().split(" ");
    if (words.includes("official")) {
      words.splice(words.indexOf("official"), 1);
    }
    return words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  useEffect(() => {
    const handleResizeMini = () => {
      setIsSmallScreenMini(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResizeMini);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen && <NavRes value={true} Heading={Heading} />}
      {isSmallScreenMini ? (
        <>
          <img
            src={BannerRes ? BannerRes : c1}
            alt=""
            style={{ width: "100%" }}
          />
        </>
      ) : (
        <>
          <img src={Banner ? Banner : null} alt="" style={{ width: "100%" }} />
        </>
      )}
      {isSmallScreen ? (
        <>
          <Container>
            <Flex flexWrap="wrap" justifyContent="center">
              {filteredItems.map((item, index) => (
                <Card2 openPopover={openPopover} item={item} index={index} />
              ))}
            </Flex>
            <Flex className="bottomNav">
              <Button onClick={onOpen} className="filterbuttonNav">
                <RiFilter2Line style={{ fontSize: "1rem", margin: "0 1rem" }} />
                FILTER
              </Button>
              <Button
                // onClick={() => addCart(product._id, quantity)}
                className="filterbuttonNav">
                <BsSortUp style={{ fontSize: "1rem", margin: "0 1rem" }} />
                SORT
              </Button>
            </Flex>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Text className="categoryH1">
              <Link to="/" style={{ textDecoration: "none", color: "#a7a9ac" }}>
                Home
              </Link>
              / {Heading}
            </Text>
          </Container>
          <Container className="categoryBox">
            <Container className="categoryHeading">
              {Heading} - {filteredItems?.length} items
            </Container>
            <Container>
              <select
                value={sortingOption}
                onChange={(e) => setSortingOption(e.target.value)}
                className="categoryInput"
                placeholder="Select Sorting Options">
                <option>Select Sorting Options</option>
                <option>Price-Low to High</option>
                <option>Price-High to Low</option>
                <option>A to Z</option>
              </select>
            </Container>
          </Container>
          <Divider
            className="categoryDivider"
            width="auto"
            marginLeft="14.5rem"
            marginBottom="0.5rem"
          />
          <Flex>
            <Flex className="categorySearchBox">
              {brandName && (
                <>
                  <Text style={{ marginTop: "15px" }} className="catHeading">
                    BRANDS
                  </Text>
                  <Divider className="categoryDivider" />
                  <Flex className="catFlex">
                    {brandName?.map((item, index) => (
                      <Flex>
                        <input
                          type="checkbox"
                          className="categorySearchBoxInput"
                          onChange={() => handleBrandSelect(item)}
                        />
                        <label
                          htmlFor="categorySearchBoxInput"
                          className="categorySearchBoxText"
                          style={{ textTransform: "captilized" }}>
                          {formattedNames[index]}
                        </label>
                      </Flex>
                    ))}
                  </Flex>
                </>
              )}
              <Divider className="categoryDivider" />
              {colorName && (
                <>
                  <Text className="catHeading">COLOR</Text>
                  <Divider className="categoryDivider" />
                  <Flex className="catFlex">
                    {colorName?.map((item) => (
                      <Flex>
                        <input
                          type="checkbox"
                          className="categorySearchBoxInput"
                          onChange={() => handleColorSelect(item)}
                        />
                        <label
                          htmlFor="categorySearchBoxInput"
                          className="categorySearchBoxText">
                          {item}
                        </label>
                      </Flex>
                    ))}
                  </Flex>
                </>
              )}
              <Divider className="categoryDivider" />
              <Text className="catHeading">SIZE</Text>
              <Divider className="categoryDivider" />
              <Flex
                style={{
                  flexDirection: "column",
                  margin: 0,
                  marginBottom: "0.5rem",
                  marginLeft: 0,
                }}>
                <Flex style={{ justifyContent: "space-evenly" }}>
                  <button
                    onClick={() => handleSizeSelect("S")}
                    className={`boxSize ${
                      isSizeSelected("S") ? "selectedbox" : ""
                    }`}>
                    S
                  </button>
                  <button
                    onClick={() => handleSizeSelect("M")}
                    className={`boxSize ${
                      isSizeSelected("M") ? "selectedbox" : ""
                    }`}>
                    M
                  </button>
                  <button
                    onClick={() => handleSizeSelect("L")}
                    className={`boxSize ${
                      isSizeSelected("L") ? "selectedbox" : ""
                    }`}>
                    L
                  </button>
                </Flex>
                <Flex
                  style={{
                    marginTop: "0.5rem",
                    justifyContent: "space-evenly",
                  }}>
                  <button
                    onClick={() => handleSizeSelect("XL")}
                    className={`boxSize ${
                      isSizeSelected("XL") ? "selectedbox" : ""
                    }`}>
                    XL
                  </button>
                  <button
                    onClick={() => handleSizeSelect("XXL")}
                    className={`boxSize ${
                      isSizeSelected("XXL") ? "selectedbox" : ""
                    }`}>
                    XXL
                  </button>
                </Flex>
              </Flex>
              <Divider className="categoryDivider" />
              <Text className="catHeading">PRICE</Text>
              <Divider className="categoryDivider" />
              <Flex>
                <input
                  type="checkbox"
                  className="categorySearchBoxInput"
                  onChange={() => handlePriceSelect(219, 418)}
                />
                <label
                  htmlFor="categorySearchBoxInput"
                  className="categorySearchBoxText">
                  Rs. 219 To 418
                </label>
              </Flex>
              <Flex>
                <input
                  type="checkbox"
                  className="categorySearchBoxInput"
                  onChange={() => handlePriceSelect(419, 638)}
                />
                <label
                  htmlFor="categorySearchBoxInput"
                  className="categorySearchBoxText">
                  Rs. 419 To 638
                </label>
              </Flex>
              <Flex>
                <input
                  type="checkbox"
                  className="categorySearchBoxInput"
                  onChange={() => handlePriceSelect(639, 838)}
                />
                <label
                  htmlFor="categorySearchBoxInput"
                  className="categorySearchBoxText">
                  Rs. 639 To 838
                </label>
              </Flex>
              <Flex>
                <input
                  type="checkbox"
                  className="categorySearchBoxInput"
                  onChange={() => handlePriceSelect(839, 1049)}
                />
                <label
                  htmlFor="categorySearchBoxInput"
                  className="categorySearchBoxText">
                  Rs. 839 To 1049
                </label>
              </Flex>
              <Divider className="categoryDivider" />
            </Flex>

            <Flex flexWrap="wrap">
              {filteredItems.map((item, index) => (
                <Card openPopover={openPopover} item={item} index={index} />
              ))}
            </Flex>
          </Flex>
        </>
      )}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <div className="barback"></div>
        <DrawerContent
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 10,
            width: "80%",
            backgroundColor: "white",
            height: "100vh",
          }}>
          <DrawerBody>
            <Flex className="barbox1">
              {/* <Image src={barlogo} alt="logo" className="logoImgbar" /> */}
              <Text
                style={{
                  padding: "10px",
                  marginLeft: "6rem",
                }}>
                Akshay Singh
              </Text>
            </Flex>
            <UnorderedList className="barboxStyle"></UnorderedList>
            <Flex className="barboxStyle1">
              <Button className="barboxStyle1button">Men</Button>
              <Button className="barboxStyle1button2">Women</Button>
            </Flex>
            <Flex>
              {/* <Accordion
                defaultIndex={[0]}
                allowMultiple
                marginTop="0.1rem"
                width="100%">
                <AccordionItem className="accodianItem">
                  <h2 style={{ margin: 0 }}>
                    <AccordionButton className="accodianbutton">
                      <Box
                        className="HTexth3A"
                        as="span"
                        flex="1"
                        textAlign="left">
                        Topwear
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

                    <Text className="bottomTexth3">Country of Origin:</Text>
                    <Text className="text" marginLeft="30px" marginTop="0">
                      India (and proud)
                    </Text>
                    <Text className="text" marginLeft="30px">
                      Hey Souledsters! You must have noticed that we've said
                      goodbye to the little Mr. Souls sleeve label that we've
                      had through the years. But always remember, when you shop
                      from our app, website, stores, or online marketplaces,
                      you're always getting the genuine real deal!
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
                        BottomWear
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
              </Accordion> */}
            </Flex>
            <Flex
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                margin: "2rem",
              }}>
              <Button className="barboxStyle1buttonSec">My Account</Button>
              <Button className="barboxStyle1buttonSec">My Order</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
