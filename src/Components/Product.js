import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  Divider,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Api from "../Api";
import Modal from "./Modal";
import MenNav from "./MenNav";
import { BsWhatsapp } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../action";
import { addCart } from "../fetch";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { wishlist } = useSelector((state) => state.app);
  const [productImages, setProductImages] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.user);
  const id = data._id;

  const favId = wishlist.map((item) => {
    return item.products._id;
  });

  async function getTheProductDeatails() {
    try {
      const baseApi = Api.product + id;
      const response = await fetch(baseApi, {
        method: "GET",
        headers: {
          projectId: "dm3s7h4e43m1",
        },
      });
      const data = await response.json();
      setproduct(data.data);
      setProductImages(data.data?.images);
    } catch (error) {
      console.error("Somethings went wrong");
    }
  }

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };
  const handelRotationRight = () => {
    const totalLength = productImages.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = productImages[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = productImages.filter((item) => {
      return productImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = productImages.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = productImages[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = productImages.filter((item) => {
      return productImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    getTheProductDeatails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MenNav />
      <Container marginTop="30px">
        <Text className="categoryHeading">Home/T-Shirt/{product?.name}</Text>
        <Grid templateColumns="repeat(2, 1fr)" margin="1rem">
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            {productImages?.map((item, index) => (
              <GridItem>
                <Image
                  src={item}
                  width="400px"
                  margin="0.3rem"
                  alt={product.name}
                  onClick={() => handleClick(item, index)}
                />
              </GridItem>
            ))}
          </Grid>
          <Box margin="2rem">
            <Text className="heading1" marginTop="0">
              {product?.name}
            </Text>
            <Text className="bottomTexth3">{product?.subCategory}</Text>
            <Divider className="categoryDivider" />
            <Text className="heading1" marginTop="0">
              <FaRupeeSign fontSize="16px" /> {product?.price}
            </Text>
            <Text className="bottomTexth3">
              QUANTITY
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                style={{ marginLeft: "10px" }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </Text>
            <Box display="flex" margin="0" padding="0">
              {isLoggedIn ? (
                <>
                  <Button
                    onClick={() => addCart(product._id, quantity)}
                    className="loginbutton"
                    borderRadius="2px"
                    width="160px">
                    ADD TO CART
                  </Button>
                  {favId.includes(product._id) ? (
                    <>
                      <Button
                        onClick={() =>
                          dispatch(REMOVE_FROM_WISHLIST(product._id))
                        }
                        className="wishlist">
                        <AiFillHeart style={{ fontSize: "1rem" }} />
                        ADDED TO WISHLIST
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => dispatch(ADD_TO_WISHLIST(product._id))}
                        className="wishlist">
                        <AiOutlineHeart style={{ fontSize: "1rem" }} />
                        ADD TO WISHLIST
                      </Button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      className="loginbutton"
                      borderRadius="0"
                      width="160px">
                      ADD TO CART
                    </Button>
                    <Button className="wishlist">
                      <AiOutlineHeart />
                      ADD TO WISHLIST
                    </Button>
                  </Link>
                </>
              )}
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
                {product?.brand}
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
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </Container>
    </>
  );
}
