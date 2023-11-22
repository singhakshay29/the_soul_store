import Card from "../Components/Card";
import { RiFilter2Line } from "react-icons/ri";
import { BsSortUp } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  Divider,
  Container,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  UnorderedList,
} from "@chakra-ui/react";
import NavRes from "../Components/NavRes";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_WISHLIST, OPEN_POPOVER, REMOVE_FROM_WISHLIST } from "../action";
import useWindowSize from "../Components/useWindowSize";

export default function Main() {
  const [sortingOption, setSortingOption] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectSize, setSelectedSize] = useState([]);
  const {
    isOpen: isFirstDrawerOpen,
    onOpen: onFirstDrawerOpen,
    onClose: onFirstDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isSecondDrawerOpen,
    onOpen: onSecondDrawerOpen,
    onClose: onSecondDrawerClose,
  } = useDisclosure();
  const isSmallScreen = useWindowSize();
  const [isSmallScreenMini, setIsSmallScreenMini] = useState(
    window.innerWidth < 750
  );
  const [handleShowCategory, setShowCategory] = useState("");
  const [bottomBarOpen, setBottomBarOpen] = useState(false);
  const [bottomSorting, setbottomSorting] = useState(false);
  const { wishlist } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const btnRef = useRef();
  const object = useLocation();
  const { data } = object?.state;
  const { Banner, Heading, BannerRes, errorHeading } = object.state;
  const { itemList, brandName, colorName } = data || {};
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
  const handleSelect = (item, setState, state) => {
    if (state.includes(item)) {
      setState(state.filter((selectedItem) => selectedItem !== item));
    } else {
      setState([...state, item]);
    }
  };

  const handleApplyFilter = () => {
    handleSortingAndFiltering(
      sortingOption,
      selectedBrands,
      selectedColors,
      selectedPrices,
      selectSize
    );
    onFirstDrawerClose();
    setBottomBarOpen(false);
  };
  const handleClear = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedPrices([]);
    setSelectedSize([]);
  };
  const handleCloseFilter = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedPrices([]);
    setSelectedSize([]);
    onFirstDrawerClose();
    setBottomBarOpen(false);
  };
  const isSizeSelected = (size) => selectSize.includes(size);
  const filteredItems = handleSortingAndFiltering(
    sortingOption,
    selectedBrands,
    selectedColors,
    selectedPrices,
    selectSize
  );
  const handlePriceSelect = (min, max) => {
    const isAlreadySelected = selectedPrices.some(
      (range) => range.min === min && range.max === max
    );
    if (isAlreadySelected) {
      setSelectedPrices(
        selectedPrices.filter((range) => range.min !== min || range.max !== max)
      );
    } else {
      setSelectedPrices([{ min, max }]);
    }
  };

  const formattedNames = brandName?.map((name) => {
    const words = name?.toLowerCase().split(" ");
    if (words?.includes("official")) {
      words.splice(words.indexOf("official"), 1);
    }
    return words
      ?.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });

  const handleFavoriteClick = (e) => {
    const target = e.target;
    if (
      target.classList.contains("favIcon") ||
      target.classList.contains("favIconadded")
    ) {
      const clickedProductId = target.dataset.productid;
      if (clickedProductId) {
        if (isLoggedIn) {
          if (wishlist.some((wish) => wish.products._id === clickedProductId)) {
            dispatch(REMOVE_FROM_WISHLIST(clickedProductId));
            dispatch(OPEN_POPOVER("Product Removed from your Wishlist"));
          } else {
            dispatch(ADD_TO_WISHLIST(clickedProductId));
            dispatch(OPEN_POPOVER("Product Added to your Wishlist"));
          }
        }
      }
    }
  };

  const handleOpen = () => {
    onFirstDrawerOpen();
    setBottomBarOpen(true);
  };

  const handleOpen2 = () => {
    onSecondDrawerOpen();
    setbottomSorting(true);
  };

  function handleCategoryClick(category) {
    if (category === "BRANDS") {
      setShowCategory("BRANDS");
    } else if (category === "COLOR") {
      setShowCategory("COLOR");
    } else if (category === "SIZE") {
      setShowCategory("SIZE");
    } else if (category === "PRICE") {
      setShowCategory("PRICE");
    }
  }
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSortingOption(value === sortingOption ? "" : value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResizeMini = () => {
      setIsSmallScreenMini(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResizeMini);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          {!bottomBarOpen && <NavRes value={true} Heading={Heading} />}

          {isSmallScreenMini ? (
            <img
              src={BannerRes ? BannerRes : null}
              alt=""
              style={{ width: "100%" }}
            />
          ) : (
            <>
              <img
                src={Banner ? Banner : null}
                alt=""
                style={{ width: "100%" }}
              />
            </>
          )}
          <Container>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              onClick={handleFavoriteClick}>
              {filteredItems.map((item, index) => (
                <Card item={item} index={index} responsive={true} />
              ))}
            </Flex>
            {!bottomSorting && (
              <>
                {!bottomBarOpen ? (
                  <Flex className="bottomNav">
                    <Button onClick={handleOpen} className="filterbuttonNav">
                      <RiFilter2Line
                        style={{ fontSize: "1rem", margin: "0 1rem" }}
                      />
                      FILTER
                    </Button>
                    <Button onClick={handleOpen2} className="filterbuttonNav">
                      <BsSortUp
                        style={{ fontSize: "1rem", margin: "0 1rem" }}
                      />
                      SORT
                    </Button>
                  </Flex>
                ) : (
                  <Flex className="bottomNav">
                    <Button
                      onClick={handleCloseFilter}
                      className="filterbuttonNav">
                      Close
                    </Button>
                    <Button
                      className="filterbuttonNav"
                      onClick={handleApplyFilter}>
                      APPLY
                    </Button>
                  </Flex>
                )}
              </>
            )}
          </Container>
          <Drawer
            placement={"bottom"}
            onClose={onSecondDrawerClose}
            isOpen={isSecondDrawerOpen}>
            <div className="barback2"></div>
            <DrawerContent>
              <Flex
                style={{
                  justifyContent: "flex-end",
                  padding: "5px 40px",
                }}>
                <CloseIcon
                  onClick={() => {
                    onSecondDrawerClose();
                    setbottomSorting(false);
                  }}
                  style={{ color: "white" }}
                />
              </Flex>
              <DrawerBody className="sortingBottom">
                <form style={{ padding: "20px 40px" }}>
                  <Flex style={{ justifyContent: "space-between" }}>
                    <label
                      className={
                        sortingOption === "Price-Low to High" ? "selected" : ""
                      }>
                      Price-Low to High
                    </label>
                    <input
                      type="radio"
                      value="Price-Low to High"
                      onChange={handleOptionChange}
                      checked={sortingOption === "Price-Low to High"}
                    />
                  </Flex>
                  <Divider className="categoryDivider" />
                  <Flex style={{ justifyContent: "space-between" }}>
                    <label
                      className={
                        sortingOption === "Price-High to Low" ? "selected" : ""
                      }>
                      Price-High to Low
                    </label>
                    <input
                      type="radio"
                      value="Price-High to Low"
                      onChange={handleOptionChange}
                      checked={sortingOption === "Price-High to Low"}
                    />
                  </Flex>
                  <Divider className="categoryDivider" />
                  <Flex style={{ justifyContent: "space-between" }}>
                    <label
                      className={sortingOption === "A to Z" ? "selected" : ""}>
                      A to Z
                    </label>
                    <input
                      type="radio"
                      value="A to Z"
                      onChange={handleOptionChange}
                      checked={sortingOption === "A to Z"}
                    />
                  </Flex>
                  <Divider className="categoryDivider" />
                </form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Drawer
            isOpen={isFirstDrawerOpen}
            placement="bottom"
            onClose={onFirstDrawerClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent
              style={{
                position: "relative",
                left: 0,
                top: 0,
                zIndex: 10,
                width: "100%",
                backgroundColor: "white",
                height: "100vh",
              }}>
              <DrawerBody>
                <Flex className="barbox1">
                  <Flex>
                    <RiFilter2Line
                      style={{ fontSize: "1.5rem", margin: "0 1rem" }}
                    />
                    <Text
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "1.5rem",
                      }}>
                      Filter
                    </Text>
                  </Flex>
                  <Text
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      fontSize: "1.2rem",
                    }}
                    onClick={handleClear}>
                    Clear All
                  </Text>
                </Flex>
                <Flex>
                  <UnorderedList
                    className="barboxStyle"
                    style={{ margin: 0, paddingLeft: "15px" }}>
                    {brandName && (
                      <>
                        <Text
                          className="catHeading"
                          onClick={() => handleCategoryClick("BRANDS")}>
                          BRANDS
                        </Text>
                        <Divider className="categoryDivider" />
                      </>
                    )}
                    {colorName && (
                      <>
                        <Text
                          className="catHeading"
                          onClick={() => handleCategoryClick("COLOR")}>
                          COLOR
                        </Text>
                        <Divider className="categoryDivider" />
                      </>
                    )}
                    <Text
                      className="catHeading"
                      onClick={() => handleCategoryClick("SIZE")}>
                      SIZE
                    </Text>
                    <Divider className="categoryDivider" />
                    <Text
                      className="catHeading"
                      onClick={() => handleCategoryClick("PRICE")}>
                      PRICE
                    </Text>
                    <Divider className="categoryDivider" />
                  </UnorderedList>
                  <Flex>
                    <>
                      <Flex className="catFlex">
                        {handleShowCategory === "BRANDS" && (
                          <>
                            {brandName?.map((item, index) => (
                              <Flex>
                                <input
                                  type="checkbox"
                                  className="categorySearchBoxInput"
                                  onChange={() =>
                                    handleSelect(
                                      item,
                                      setSelectedBrands,
                                      selectedBrands
                                    )
                                  }
                                />
                                <label
                                  htmlFor="categorySearchBoxInput"
                                  className="categorySearchBoxText"
                                  style={{ textTransform: "captilized" }}>
                                  {formattedNames[index]}
                                </label>
                              </Flex>
                            ))}
                          </>
                        )}
                        {handleShowCategory === "COLOR" && (
                          <>
                            {colorName?.map((item) => (
                              <Flex>
                                <input
                                  type="checkbox"
                                  className="categorySearchBoxInput"
                                  onChange={() =>
                                    handleSelect(
                                      item,
                                      setSelectedColors,
                                      selectedColors
                                    )
                                  }
                                />
                                <label
                                  htmlFor="categorySearchBoxInput"
                                  className="categorySearchBoxText">
                                  {item}
                                </label>
                              </Flex>
                            ))}
                          </>
                        )}
                        {handleShowCategory === "SIZE" && (
                          <>
                            {["S", "M", "L", "XL", "XXL"].map((item) => (
                              <Flex>
                                <input
                                  type="checkbox"
                                  className="categorySearchBoxInput"
                                  onChange={() =>
                                    handleSelect(
                                      item,
                                      setSelectedSize,
                                      selectSize
                                    )
                                  }
                                />
                                <label
                                  htmlFor="categorySearchBoxInput"
                                  className="categorySearchBoxText">
                                  {item}
                                </label>
                              </Flex>
                            ))}
                          </>
                        )}
                        {handleShowCategory === "PRICE" && (
                          <>
                            {[
                              { min: 219, max: 418 },
                              { min: 419, max: 638 },
                              { min: 639, max: 838 },
                              { min: 839, max: 1049 },
                            ].map((range) => (
                              <Flex>
                                <input
                                  type="checkbox"
                                  className="categorySearchBoxInput"
                                  onChange={() =>
                                    handlePriceSelect(range.min, range.max)
                                  }
                                />
                                <label
                                  htmlFor="categorySearchBoxInput"
                                  className="categorySearchBoxText">
                                  Rs. {range.min} To {range.max}
                                </label>
                              </Flex>
                            ))}
                          </>
                        )}
                      </Flex>
                    </>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <img src={Banner ? Banner : null} alt="" style={{ width: "100%" }} />
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
                <option value="">Select Sorting Options</option>
                <option value="Price-Low to High">Price-Low to High</option>
                <option value="Price-High to Low">Price-High to Low</option>
                <option value="A to Z">A to Z</option>
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
                          onChange={() =>
                            handleSelect(
                              item,
                              setSelectedBrands,
                              selectedBrands
                            )
                          }
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
                          onChange={() =>
                            handleSelect(
                              item,
                              setSelectedColors,
                              selectedColors
                            )
                          }
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
                  {["S", "M", "L"].map((size) => (
                    <button
                      key={size}
                      onChange={() =>
                        handleSelect(size, setSelectedSize, selectSize)
                      }
                      className={`boxSize ${
                        isSizeSelected(size) ? "selectedbox" : ""
                      }`}>
                      {size}
                    </button>
                  ))}
                </Flex>
                <Flex
                  style={{ justifyContent: "space-evenly", marginTop: "10px" }}>
                  {["XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onChange={() =>
                        handleSelect(size, setSelectedSize, selectSize)
                      }
                      className={`boxSize ${
                        isSizeSelected(size) ? "selectedbox" : ""
                      }`}>
                      {size}
                    </button>
                  ))}
                </Flex>
              </Flex>
              <Divider className="categoryDivider" />
              <Text className="catHeading">PRICE</Text>
              <Divider className="categoryDivider" />
              <>
                {[
                  { min: 219, max: 418 },
                  { min: 419, max: 638 },
                  { min: 639, max: 838 },
                  { min: 839, max: 1049 },
                ].map((range) => (
                  <Flex>
                    <input
                      type="checkbox"
                      className="categorySearchBoxInput"
                      onChange={() => handlePriceSelect(range.min, range.max)}
                    />
                    <label
                      htmlFor="categorySearchBoxInput"
                      className="categorySearchBoxText">
                      Rs. {range.min} To {range.max}
                    </label>
                  </Flex>
                ))}
              </>
              <Divider className="categoryDivider" />
            </Flex>
            <Flex style={{ flexDirection: "column" }}>
              {errorHeading && (
                <>
                  <Container className="categoryerror">
                    {errorHeading}
                  </Container>
                  <Container className="categoryerror2">
                    You may also like:-
                  </Container>
                </>
              )}

              <Flex
                style={{ flex: 1, flexWrap: "wrap" }}
                onClick={handleFavoriteClick}>
                {filteredItems.map((item, index) => (
                  <Card item={item} index={index} responsive={false} />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
