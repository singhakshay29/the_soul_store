import React, { useState } from "react";
import MenNav from "./MenNav";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  Container,
  Text,
  Image,
  Grid,
  GridItem,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";

export default function Product() {
  const [product, setproduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const { id } = useParams();
  async function getTheProductDeatails() {
    const baseApi = `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`;
    const response = await fetch(baseApi, {
      method: "GET",
      headers: {
        projectId: "dm3s7h4e43m1",
      },
    });
    const data = await response.json();
    console.log(data);
    setproduct(data.data);
    setProductImages(data.data.images);
  }

  useEffect(() => {
    getTheProductDeatails();
  }, []);

  return (
    <>
      <MenNav />
      <Container marginTop="90px">
        <Text className="categoryHeading">Home/T-Shirt/{product.name}</Text>
        <Grid templateColumns="repeat(2, 1fr)" margin="1rem">
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            {productImages.map((item) => (
              <GridItem>
                <Image
                  src={item}
                  width="400px"
                  margin="0.3rem"
                  alt={product.name}
                />
              </GridItem>
            ))}
          </Grid>
          <Box margin="2rem">
            <Text className="heading1" marginTop="0">
              {product.name}
            </Text>
            <Text className="bottomTexth3">{product.subCategory}</Text>
            <Divider className="categoryDivider" />
            <Text className="heading1" marginTop="0">
              <FaRupeeSign fontSize="16px" /> {product.price}
            </Text>
            <Text className="bottomTexth3">
              QUANTITY
              <select style={{ marginLeft: "10px" }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </Text>
            <Box display="flex" margin="0" padding="0">
              <Button className="loginbutton" borderRadius="0" width="160px">
                ADD TO CART
              </Button>
              <Button className="wishlist">
                <AiOutlineHeart />
                ADD TO WISHLIST
              </Button>
            </Box>
            <Text className="bottomTexth3" fontSize="15px" marginTop="30px">
              SHARE
              <BsWhatsapp
                className="iconStyle"
                style={{ marginLeft: "55px" }}
              />
              <AiFillFacebook
                className="iconStyle"
                style={{ fontSize: "22px" }}
              />
              <AiOutlineInstagram
                className="iconStyle"
                style={{ fontSize: "23px" }}
              />
            </Text>
            <Box className="categorySearchBox productDetails">
              <Text className="bottomTexth3">PRODUCT DETAILS</Text>
              <Text className="bottomTexth3">Material & Care:</Text>
              <Text className="text" marginLeft="30px" marginTop="20px">
                100% Cotton
              </Text>
              <Text className="text" marginLeft="30px" marginTop="0">
                Machine Wash
              </Text>
              <Text className="bottomTexth3">BRAND:</Text>
              <Text className="text" marginLeft="30px" marginTop="0">
                {product.brand}
              </Text>
              <Text className="bottomTexth3">Country of Origin:</Text>
              <Text className="text" marginLeft="30px" marginTop="0">
                India (and proud)
              </Text>
              <Text className="text" marginLeft="30px">
                Hey Souledsters! You must have noticed that we've said goodbye
                to the little Mr. Souls sleeve label that we've had through the
                years. But always remember, when you shop from our app, website,
                stores, or online marketplaces, you're always getting the
                genuine real deal!
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
