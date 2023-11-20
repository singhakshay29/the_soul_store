import {
  Box,
  Text,
  Image,
  Button,
  Divider,
  Container,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import wishlist1 from "../assets/wishlist1.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  OPEN_POPOVER,
} from "../action";
import NavRes from "../Components/NavRes";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const handleRemoveFromWishlist = (productId) => {
    dispatch(OPEN_POPOVER("Product removed from your Wishlist"));
    dispatch(REMOVE_FROM_WISHLIST(productId));
    setTimeout(() => {
      dispatch(GET_WISHLIST());
    }, 300);
  };

  const handleMoveToCart = (productId) => {
    dispatch(OPEN_POPOVER("Product Added to your cart successfully"));
    dispatch(REMOVE_FROM_WISHLIST(productId));
    setTimeout(() => {
      dispatch(GET_WISHLIST());
    }, 100);
    setTimeout(() => {
      dispatch(ADD_TO_CART(productId, 1));
    }, 100);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    dispatch(GET_WISHLIST());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isSmallScreen && <NavRes value={true} />}

      {wishlist?.length > 0 ? (
        <>
          {!isSmallScreen && (
            <>
              <Text className="wT">
                My Wishlist - <span>({wishlist.length} items)</span>
              </Text>
            </>
          )}

          <Flex
            style={{
              marginLeft: "1rem",
              flexWrap: "wrap",
            }}>
            {wishlist.length > 0 &&
              wishlist.map((item, index) => (
                <Box key={index} className="removeCard">
                  <RxCross2
                    onClick={() => {
                      handleRemoveFromWishlist(item.products._id);
                    }}
                    className="favremove"
                  />
                  <Link to="/product" state={{ data: item }}>
                    <Image
                      src={item?.products?.displayImage}
                      alt={item?.products?.name}
                      width="14.9rem"
                      cursor="pointer"
                    />
                  </Link>

                  <Text className="wTT">{item.products?.name}</Text>
                  <Divider className="categoryDivider" />
                  <Text display="flex" className="heading2 mL10">
                    <FaRupeeSign fontSize="12px" />
                    {item.products?.price}
                    <Text marginLeft="0.5rem">ONLY</Text>
                  </Text>
                  <Divider className="categoryDivider" />
                  <Button
                    className="buttonCart"
                    onClick={() => {
                      handleMoveToCart(item.products?._id);
                    }}>
                    MOVE TO CART
                  </Button>
                </Box>
              ))}
          </Flex>
        </>
      ) : (
        <>
          <Container display="flex" justifyContent="center" marginTop="80px">
            <Image src={wishlist1} width="400px" alt="bg" />
          </Container>
          <Box className="boxStyle">
            <Text className="bottomheading">
              Your wishlist is lonely and looking for love.
            </Text>
            <Text className="bottomTexth3">
              Add products to your wishlist, review them anytime and easily move
              to cart.
            </Text>
            {isLoggedIn ? (
              <>
                <Box>
                  <Link to="/">
                    <Button className="wishlist">CONTINUE SHOPPING</Button>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Link to="/">
                    <Button className="wishlist">CONTINUE SHOPPING</Button>
                  </Link>

                  <Link to="/login">
                    <Button className="loginbutton button2">LOGIN</Button>
                  </Link>
                </Box>
              </>
            )}
          </Box>
        </>
      )}
    </>
  );
}
