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
import Api from "../Api";
import Footer from "./Footer";
import MenNav from "./MenNav";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import wishlist1 from "../assets/wishlist1.png";
import React, { useEffect, useState } from "react";

export default function Wishlist({ signinSuceess }) {
  const [results, setResults] = useState(0);
  const [wishlist, setWishlist] = useState();

  async function getWishlist() {
    const user = localStorage.getItem("signupDeatils");
    if (user) {
      const parsedData = JSON.parse(user);

      const response = await fetch(Api.wishlist, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
      });
      const data = await response.json();

      const databox = data.data;

      setResults(databox.items.length);
      console.log(databox.items);
      setWishlist(databox?.items);
    }
  }

  async function removeWishlist(id) {
    const user = localStorage.getItem("signupDeatils");
    if (user) {
      const parsedData = JSON.parse(user);
      const baseApi = Api.wishlist + id;
      console.log(baseApi);
      await fetch(baseApi, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
      });
      getWishlist();
    }
  }

  const loadfavouriteFromLocalStorage = () => {
    const favourite = localStorage.getItem("favourite");
    if (favourite) {
      const parsedData = JSON.parse(favourite);
      return parsedData.favourite || {};
    }
    return {};
  };
  const [, setfavourite] = useState(() => loadfavouriteFromLocalStorage());
  const savefavouriteToLocalStorage = (favourite) => {
    localStorage.setItem(
      "favourite",
      JSON.stringify({
        favourite: favourite,
      })
    );
  };

  const removeFavorite = (productId) => {
    setfavourite((prevfavourite) => {
      const isFavorite = prevfavourite[productId];
      const updatedfavourite = {
        ...prevfavourite,
        [productId]: !isFavorite,
      };
      savefavouriteToLocalStorage(updatedfavourite);

      return updatedfavourite;
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <MenNav />
      {results > 0 ? (
        <>
          <Text className="categoryHeading bottomheading">
            My Wishlist -{wishlist.length}items
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {wishlist.length > 0 &&
              wishlist.map((item, index) => (
                <GridItem key={index} margin="2rem">
                  <Box
                    margin="0"
                    padding="0"
                    style={{ border: "1px solid #eee" }}>
                    <RxCross2
                      onClick={() => {
                        removeWishlist(item.products._id);
                        removeFavorite(item.products._id);
                      }}
                      className="favremove"
                    />
                    <Link to="/product" state={{ data: item }}>
                      <Image
                        src={item.products?.displayImage}
                        alt={item.products.name}
                        width="246px"
                        cursor="pointer"
                      />
                    </Link>

                    <Text className="heading2" height="28px">
                      {item.products.name}
                    </Text>
                    <Divider
                      style={{ marginTop: "30px" }}
                      className="categoryDivider"
                    />
                    <Text display="flex" className="heading2 mL10">
                      <FaRupeeSign fontSize="12px" />
                      {item.products.price}
                      <Text marginLeft="0.5rem">ONLY</Text>
                    </Text>
                    <Divider className="categoryDivider" />
                    <Button className="buttonCart">MOVE TO CART</Button>
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
            {signinSuceess ? (
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
