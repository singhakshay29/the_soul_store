import { Text, Divider, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import INA from "../assets/INA.jpg";
import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../action";

export default function Card({ item, index, openPopover }) {
  const dispatch = useDispatch();
  const [displayImage, setDisplayImage] = useState("");
  const { wishlist } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const productId = item?._id;

  const handleToggleFavorite = (productId) => {
    if (isLoggedIn) {
      if (isInWishlist) {
        dispatch(REMOVE_FROM_WISHLIST(productId));
        setIsInWishlist(false);
      } else {
        dispatch(ADD_TO_WISHLIST(productId));
        setIsInWishlist(true);
      }
    }
  };

  useEffect(() => {
    if (wishlist.some((wish) => wish.products._id === productId)) {
      setIsInWishlist(true);
    }
  }, [wishlist, productId]);

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
      <Container key={index} className="cardContainerbox">
        {isLoggedIn ? (
          <>
            {isInWishlist ? (
              <>
                <AiFillHeart
                  className="favIconadded"
                  onClick={() => {
                    handleToggleFavorite(item?._id);
                    openPopover("Product Removed from your Wishlist");
                  }}
                />
              </>
            ) : (
              <>
                <AiOutlineHeart
                  className="favIcon"
                  onClick={() => {
                    handleToggleFavorite(item?._id);
                    openPopover("Product Added to your Wishlist");
                  }}
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

        <Text className="heading2" height="28px">
          {item?.name}
        </Text>
        <Divider className="categoryDivider" />
        <Text>{item?.type}</Text>
        <Text>{item?.color}</Text>
        <Text display="flex" className="heading2">
          <FaRupeeSign fontSize="12px" />
          {item?.price}
          <Text marginLeft="0.5rem">ONLY</Text>
        </Text>
      </Container>
    </>
  );
}
