import {
  Box,
  Text,
  Image,
  Button,
  Popover,
  Divider,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import INA from "../assets/INA.jpg";
import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../action";

export default function Card({ item, index }) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.app);
  const [displayImage, setDisplayImage] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const favId = wishlist.map((item) => {
    return item.products._id;
  });

  const handleToggleFavorite = (productId) => {
    if (isLoggedIn) {
      if (favId.includes(productId)) {
        dispatch(REMOVE_FROM_WISHLIST(productId));
      } else {
        dispatch(ADD_TO_WISHLIST(productId));
      }
    }
  };
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

  const openPopover = () => {
    setIsPopoverOpen(true);
    setTimeout(() => {
      setIsPopoverOpen(false);
    }, 2000);
  };
  return (
    <>
      {isPopoverOpen && (
        <Popover>
          <Button className="popoverbody">Product Add to wishlist</Button>
        </Popover>
      )}
      <GridItem key={index} margin="0 0.6rem">
        <Box margin="0" padding="0">
          {isLoggedIn ? (
            <>
              {favId.includes(item?._id) ? (
                <>
                  <AiFillHeart
                    className="favIconadded"
                    onClick={() => {
                      handleToggleFavorite(item?._id);
                      openPopover();
                    }}
                  />
                </>
              ) : (
                <>
                  <AiOutlineHeart
                    className="favIcon"
                    onClick={() => {
                      handleToggleFavorite(item?._id);
                      openPopover();
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
            <Image
              src={displayImage}
              alt={item?.name}
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
        </Box>
      </GridItem>
    </>
  );
}