import WomenNav from "./WomenNav";
import Card from "./Card";
import React from "react";
import bannerT from "../assets/bannerT.jpg";
import { Box, Text, Grid, Divider, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
export default function WTShirt() {
  const data = useLocation();
  const itemList = data.state.data;

  return (
    <>
      <WomenNav />
      <Image
        src={bannerT}
        alt="banner"
        style={{ width: "80rem", marginTop: "2rem" }}
      />
      <Text className="categoryHeading">
        Women/T-Shirt - {itemList?.length} items
        <select className="categoryInput" placeholder="Select Sorting Options">
          <option>Price-High to Low</option>
          <option>Price-Low to High</option>
          <option>A to Z</option>
        </select>
      </Text>

      <Divider
        className="categoryDivider"
        width="81%"
        marginLeft="14.5rem"
        marginBottom="0.5rem"
      />

      <Grid templateColumns="repeat(2, 1fr)">
        <Box className="categorySearchBox">
          <Text className="bottomTexth2" marginLeft="20px">
            BRANDS
          </Text>

          {/* <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("Bewakoof®");
            handleCategoryFilter("Bewakoof®", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          Bewakoof®
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL RICK AND MORTY MERCHANDISE");
            handleCategoryFilter(
              "OFFICIAL RICK AND MORTY MERCHANDISE",
              "Brand"
            );
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          RICK AND MORTY MERCHANDISE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL DISNEY MERCHANDISE");
            handleCategoryFilter("OFFICIAL DISNEY MERCHANDISE", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          DISNEY MERCHANDISE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("BEWAKOOF X STREETWEAR");
            handleCategoryFilter("BEWAKOOF X STREETWEAR", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          BEWAKOOF X STREETWEAR
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL NARUTO MERCHANDISE");
            handleCategoryFilter("OFFICIAL NARUTO MERCHANDISE", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          NARUTO MERCHANDISE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL MINIONS MERCHANDISE");
            handleCategoryFilter("OFFICIAL MINIONS MERCHANDISE", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          MINIONS MERCHANDISE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL HARRY POTTER MERCHANDISE");
            handleCategoryFilter(
              "OFFICIAL HARRY POTTER MERCHANDISE",
              "Brand"
            );
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          HARRY POTTER MERCHANDISE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedBrands("OFFICIAL DC COMICS MERCHANDISE");
            handleCategoryFilter("OFFICIAL DC COMICS MERCHANDISE", "Brand");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          DC COMICS MERCHANDISE
        </label>
      </Box> */}

          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            PRICE
          </Text>
          {/* <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            let range = [299, 399];
            handleCategoryFilter(range, "Price");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          Rs. 299 To Rs. 399
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            let range = [410, 599];
            handleCategoryFilter(range, "Price");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          Rs. 410 To Rs. 599
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={handleBewakoof}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          Rs. 610 To Rs. 799
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={handleBewakoof}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          Rs. 810 To Rs. 999
        </label>
      </Box> */}

          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            COLOR
          </Text>

          {/* <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("BLACK");
            handleCategoryFilter("BLACK", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          BLACK
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("GREEN");
            handleCategoryFilter("GREEN", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          GREEN
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("BROWN");
            handleCategoryFilter("BROWN", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          BROWN
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("WHITE");
            handleCategoryFilter("WHITE", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          WHITE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("BLUE");
            handleCategoryFilter("BLUE", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          BLUE
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("RED");
            handleCategoryFilter("RED", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          RED
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("YELLOW");
            handleCategoryFilter("YELLOW", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          YELLOW
        </label>
      </Box>
      <Box display="flex">
        <input
          type="checkbox"
          className="categorySearchBoxInput"
          onChange={() => {
            setSelectedColors("NAVY");
            handleCategoryFilter("NAVY", "Color");
          }}
        />
        <label
          htmlFor="categorySearchBoxInput"
          className="categorySearchBoxText">
          NAVY
        </label>
      </Box> */}
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {itemList.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
