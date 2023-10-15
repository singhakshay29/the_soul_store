import WomenNav from "./WomenNav";
import Card from "./Card";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Text, Grid, Divider, Container, Flex } from "@chakra-ui/react";
import MenNav from "./MenNav";
export default function WTShirt() {
  const [sortingOption, setSortingOption] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [selectedColors, setSelectedColors] = useState("");
  const [selectedPrices, setSelectedPrices] = useState("");
  const object = useLocation();
  const itemList = object.state?.data;
  console.log(itemList);
  console.log(object);
  const { Banner, Heading, brandName, colorName, gender } = object.state;
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
    if (selectedPrices.includes(min, max)) {
      setSelectedPrices(
        selectedPrices.filter(
          (selectedPrice) => selectedPrice !== min && selectedPrice !== max
        )
      );
    } else {
      setSelectedPrices([...selectedPrices, min, max]);
    }
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

  return (
    <>
      {gender === "Male" ? <MenNav /> : <WomenNav />}

      <img src={Banner ? Banner : null} alt="" style={{ width: "80rem" }} />
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
        width="81%"
        marginLeft="14.5rem"
        marginBottom="0.5rem"
      />

      <Grid templateColumns="repeat(2, 13.5rem)">
        <Box className="categorySearchBox">
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
                      className="categorySearchBoxText">
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
        </Box>

        <Grid
          style={{
            flexWrap: "wrap",
            minWidth: "65rem",
          }}
          templateColumns="repeat(4, 1fr)"
          gap={6}>
          {filteredItems.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
