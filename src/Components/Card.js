import { Text, Divider, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import INA from "../assets/INA.jpg";
import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import bgPink from "../assets/bgPink.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Card({ item, index, responsive }) {
  const { wishlist } = useSelector((state) => state.app);
  const [displayImage, setDisplayImage] = useState(bgPink);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const productId = item?._id;
  let brandName = item?.brand;
  let itemName = item?.name;

  if (itemName?.startsWith("Women's ")) {
    itemName = itemName.replace("Women's ", "").trim();
  }
  if (itemName?.startsWith("Men's ")) {
    itemName = itemName.replace("Men's ", "").trim();
  }
  if (brandName?.startsWith("OFFICIAL ")) {
    brandName = brandName.replace("OFFICIAL ", "").trim();
  }

  useEffect(() => {
    if (isLoggedIn) {
      if (wishlist.some((wish) => wish.products._id === productId)) {
        setIsInWishlist(true);
      } else {
        setIsInWishlist(false);
      }
    }
  }, [wishlist, productId, isLoggedIn]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(item.displayImage);
        if (response.status === 404) {
          setDisplayImage(INA);
        } else {
          setDisplayImage(item.displayImage);
        }
      } catch (error) {
        setDisplayImage(INA);
      }
    }

    fetchImage();
  }, [item.displayImage]);

  return (
    <>
      {responsive ? (
        <>
          <Container key={index} className="cardContainerboxRes">
            {isLoggedIn ? (
              <>
                {isInWishlist ? (
                  <>
                    <AiFillHeart
                      className="favIconadded"
                      data-productid={item._id}
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineHeart
                      className="favIcon"
                      data-productid={item._id}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="/login">
                  <AiOutlineHeart className="favIcon" />
                </Link>
              </>
            )}

            <Link to="/product" state={{ data: item }}>
              <img
                src={displayImage}
                alt=""
                height="449px"
                width="380px"
                cursor="pointer"
              />
            </Link>

            <Text className="heading2" height="20px" marginLeft="10px">
              {item?.name}
            </Text>
            <Divider className="categoryDivider" />
            <Text style={{ marginTop: 0, marginLeft: "10px", marginBottom: 0 }}>
              {item?.brand}
            </Text>
            <Text
              display="flex"
              className="heading2"
              style={{ marginTop: 0, marginLeft: "10px", marginBottom: 0 }}>
              <FaRupeeSign fontSize="12px" />
              {item?.price}
              <Text marginLeft="0.5rem">ONLY</Text>
            </Text>
          </Container>
        </>
      ) : (
        <>
          <Container key={index} className="cardContainerbox">
            {isLoggedIn ? (
              <>
                {isInWishlist ? (
                  <>
                    <AiFillHeart
                      className="favIconadded"
                      data-productid={item._id}
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineHeart
                      className="favIcon"
                      data-productid={item._id}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="/login">
                  <AiOutlineHeart className="favIcon" />
                </Link>
              </>
            )}

            <Link to="/product" state={{ data: item }}>
              <img
                src={displayImage}
                alt=""
                width="240px"
                height="300px"
                cursor="pointer"
              />
            </Link>

            <Text className="heading2 cardDetails">{itemName}</Text>
            <Divider className="categoryDivider" />
            <Text
              style={{
                fontWeight: 500,
              }}
              className="cardDetails">
              {brandName}
            </Text>
            <Text
              display="flex"
              className="heading2"
              style={{ marginTop: 0, marginLeft: "10px", marginBottom: 0 }}>
              <FaRupeeSign fontSize="12px" />
              {item?.price}
              <Text marginLeft="0.5rem">ONLY</Text>
            </Text>
          </Container>
        </>
      )}
    </>
  );
}
