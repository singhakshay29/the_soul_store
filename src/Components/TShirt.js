import React, { useEffect, useState } from "react";
import { Image, Box, Text, Grid, GridItem, Select } from "@chakra-ui/react";
import MenNav from "./MenNav";
import t1 from "../assets/t1.png";
import { Divider } from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

export default function TShirt() {
  const [productsList, setproductsList] = useState([]);

  async function getThedata() {
    try {
      const storedproducts = localStorage.getItem("stock");
      if (storedproducts) {
        const parsedData = JSON.parse(storedproducts);
        console.log(parsedData.stock);
        setproductsList(parsedData.stock);
      } else {
        const baseApi =
          "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100";
        const response = await fetch(baseApi, {
          method: "GET",
          headers: {
            projectId: "dm3s7h4e43m1",
          },
        });
        const data = await response.json();

        const products = data.data;
        setproductsList(products);

        localStorage.setItem(
          "stock",
          JSON.stringify({
            stock: products,
          })
        );
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  const handleBewakoof = () => {
    const filterBewakoof = productsList.filter(
      (item) => item.brand === "Bewakoof®"
    );
    setproductsList(filterBewakoof);
  };

  useEffect(() => {
    getThedata();
  }, []);

  return (
    <>
      <MenNav />
      <Box marginTop="80px">
        <Image src={t1} width="100%" alt="banner" />
      </Box>
      <Text className="categoryHeading">
        Home/T-Shirt -{productsList.length}items
        <Select
          className="categoryInput"
          placeholder="Select Sorting Options"
          color="grey">
          <option>Price-High to Low</option>
          <option>Price-Low to High</option>
          <option>A to Z</option>
        </Select>
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
          <CheckboxGroup>
            <Checkbox
              className="categorySearchBoxText"
              onClick={handleBewakoof}>
              Bewakoof®
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              RICK AND MORTY MERCHANDISE
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              DISNEY MERCHANDISE
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              BEWAKOOF X STREETWEAR
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              NARUTO MERCHANDISE
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              MINIONS MERCHANDISE
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              HARRY POTTER MERCHANDISE
            </Checkbox>
          </CheckboxGroup>
          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            PRICE
          </Text>
          <CheckboxGroup>
            <Checkbox className="categorySearchBoxText">
              Rs. 299 To Rs. 399
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              Rs. 410 To Rs. 599
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              Rs. 610 To Rs. 799
            </Checkbox>
            <Checkbox className="categorySearchBoxText">
              Rs. 810 To Rs. 999
            </Checkbox>
          </CheckboxGroup>
          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            COLOR
          </Text>
          <CheckboxGroup>
            <Checkbox className="categorySearchBoxText">BLACK</Checkbox>
            <Checkbox className="categorySearchBoxText">GREEN</Checkbox>
            <Checkbox className="categorySearchBoxText">BROWN</Checkbox>
            <Checkbox className="categorySearchBoxText">BLUE</Checkbox>
            <Checkbox className="categorySearchBoxText">White</Checkbox>
            <Checkbox className="categorySearchBoxText">RED</Checkbox>
            <Checkbox className="categorySearchBoxText">YELLOW</Checkbox>
            <Checkbox className="categorySearchBoxText">NAVY</Checkbox>
          </CheckboxGroup>
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {productsList.length > 0 &&
            productsList.map((item, index) => (
              <GridItem key={index} margin="0 0.6rem">
                <Box margin="0" padding="0">
                  <Link to={`/product/${item._id}`}>
                    <AiOutlineHeart className="favIcon" />
                    <Image
                      src={item.displayImage}
                      alt={item.name}
                      width="240px"
                      cursor="pointer"
                    />
                  </Link>

                  <Text className="heading2" height="28px">
                    {item.name}
                  </Text>
                  <Divider className="categoryDivider" />
                  <Text>{item.type}</Text>
                  <Text>{item.color}</Text>
                  <Text display="flex" className="heading2">
                    <FaRupeeSign fontSize="12px" />
                    {item.price}
                    <Text marginLeft="0.5rem">ONLY</Text>
                  </Text>
                </Box>
              </GridItem>
            ))}
        </Grid>
      </Grid>
    </>
  );
}
