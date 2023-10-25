import Card from "./Card";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Text, Divider, Container, Flex } from "@chakra-ui/react";
export default function WTShirt({ setIsPopoverOpen, setMessage, openPopover }) {
  const [sortingOption, setSortingOption] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [selectedColors, setSelectedColors] = useState("");
  const [selectedPrices, setSelectedPrices] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const object = useLocation();
  const itemList = object.state?.data;
  const { Banner, Heading, brandName, colorName } = object.state;
  const handleSortingAndFiltering = (
    sortingCriteria,
    filterCriteriaBrand,
    filterCriteriaColor,
    filterCriteriaPrice
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
        (filterCriteriaPrice.length === 0 ||
          filterCriteriaPrice.includes(item.price))
    );

    return filteredItems;
  };
  const filteredItems = handleSortingAndFiltering(
    sortingOption,
    selectedBrands,
    selectedColors,
    selectedPrices
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
    let minmax = [...new Set(selectedPrices)];
    Array.sort(minmax);
    setSelectedPrices(
      selectedPrices.filter(
        (selectedPrice) =>
          selectedPrice >= minmax[0] &&
          selectedPrice <= minmax[minmax.length - 1]
      )
    );
  };

  //const names = [...brandName];

  // const formattedNames = names.map((name) => {
  //   return name
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => {
  //       return word.charAt(0).toUpperCase() + word.slice(1);
  //     })
  //     .join(" ");
  // });

  // const formattedNames = names.map((name) => {
  //   const words = name.toLowerCase().split(" ");
  //   if (words.includes("official")) {
  //     words.splice(words.indexOf("official"), 1);
  //   }
  //   return words
  //     .map((word) => {
  //       return word.charAt(0).toUpperCase() + word.slice(1);
  //     })
  //     .join(" ");
  // });
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
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
      {isSmallScreen ? (
        <></>
      ) : (
        <>
          <Flex>
            <Flex className="categorySearchBox">
              {brandName && (
                <>
                  <Text className="catHeading">BRANDS</Text>
                  <Flex className="catFlex">
                    {brandName?.map((item) => (
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
                          {item}
                        </label>
                      </Flex>
                    ))}
                  </Flex>
                </>
              )}
              {colorName && (
                <>
                  <Text className="catHeading">COLOR</Text>
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
              <Text className="catHeading">PRICE</Text>
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
            </Flex>

            <Flex display="flex" flexWrap="wrap" justifyContent="space-evenly">
              {filteredItems.map((item, index) => (
                <Card openPopover={openPopover} item={item} index={index} />
              ))}
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
