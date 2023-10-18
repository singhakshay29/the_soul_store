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
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import wishlist1 from "../assets/wishlist1.png";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART } from "../action";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);
  const data = useSelector((state) => {
    console.log(state);
    return state.app;
  });
  console.log(data);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(REMOVE_FROM_WISHLIST(productId));
    setTimeout(() => {
      dispatch(GET_WISHLIST());
    }, 300);
  };

  const handleMoveToCart = (productId) => {
    dispatch(REMOVE_FROM_WISHLIST(productId));
    setTimeout(() => {
      dispatch(GET_WISHLIST());
    }, 100);
    setTimeout(() => {
      dispatch(ADD_TO_CART(productId, 1));
    }, 100);
  };

  useEffect(() => {
    dispatch(GET_WISHLIST());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {wishlist?.length > 0 ? (
        <>
          <Text className="wT">
            My Wishlist - <span>({wishlist.length} items)</span>
          </Text>
          <Grid
            templateColumns="repeat(4, 19rem)"
            style={{ marginLeft: "1rem" }}
            gap={6}>
            {wishlist.length > 0 &&
              wishlist.map((item, index) => (
                <GridItem key={index} margin="2rem">
                  <Box style={{ border: "1px solid #eee" }}>
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
                </GridItem>
              ))}
          </Grid>
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
                  <Link to="/men">
                    <Button className="wishlist">CONTINUE SHOPPING</Button>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Link to="/men">
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

      <Footer />
    </>
  );
}
