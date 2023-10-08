import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  Divider,
  Popover,
  GridItem,
} from "@chakra-ui/react";
import Api from "../Api";
import MenNav from "./MenNav";
import t1 from "../assets/t1.png";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

let productData = [];
export default function TShirt({ signinSuceess }) {
  const [productsList, setproductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  async function getThedata() {
    try {
      const storedproducts = localStorage.getItem("stock");
      if (storedproducts) {
        const parsedData = JSON.parse(storedproducts);
        setproductsList(parsedData.stock);
        productData = parsedData.stock;
      } else {
        const response = await fetch(Api.productlistAPI, {
          method: "GET",
          headers: {
            projectId: "dm3s7h4e43m1",
          },
        });
        const data = await response.json();

        const products = data.data;
        setproductsList(products);
        productData = products;

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

  async function addWishlist(productId) {
    console.log(productId);
    const user = localStorage.getItem("signupDeatils");
    if (user) {
      const parsedData = JSON.parse(user);
      try {
        await fetch(Api.wishlist, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectId: "dm3s7h4e43m1",
          },
          body: JSON.stringify({ productId: productId }),
        });
      } catch (error) {
        console.error("Somethings went wrong");
      }
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
    }
  }

  const handleCategoryFilter = (category) => {
    // resetFilter();
    console.log(productData);
    setSelectedCategory(category);
    // const productList1 = [...productsList];
    let filteredProducts = productsList?.filter((item) => {
      return item.brand === category;
    });
    setproductsList(filteredProducts);
  };

  // const resetFilter = () => {
  //   setSelectedCategory(null);
  //   setproductsList(productsList);
  // };

  function handleBewakoof(checked) {
    if (checked) {
      const filterBewakoof = productsList.filter(
        (item) => item.brand === "Bewakoof®"
      );
      setproductsList(filterBewakoof);
    } else {
      setproductsList(productsList);
    }
  }
  const savefavouriteToLocalStorage = (favourite) => {
    localStorage.setItem(
      "favourite",
      JSON.stringify({
        favourite: favourite,
      })
    );
  };

  const loadfavouriteFromLocalStorage = () => {
    const favourite = localStorage.getItem("favourite");
    if (favourite) {
      const parsedData = JSON.parse(favourite);
      return parsedData.favourite || {};
    }
    return {};
  };
  const [favourite, setfavourite] = useState(() =>
    loadfavouriteFromLocalStorage()
  );

  const toggleFavorite = (productId) => {
    setfavourite((prevfavourite) => {
      const isFavorite = prevfavourite[productId];
      const updatedfavourite = {
        ...prevfavourite,
        [productId]: !isFavorite,
      };
      if (!isFavorite) {
        console.log(isFavorite);
        console.log("a");
        addWishlist(productId);
      } else {
        removeWishlist(productId);
        console.log(isFavorite);
        console.log("b");
      }
      savefavouriteToLocalStorage(updatedfavourite);

      return updatedfavourite;
    });
  };

  const openPopover = () => {
    setIsPopoverOpen(true);
    setTimeout(() => {
      setIsPopoverOpen(false);
    }, 2000);
  };
  useEffect(() => {
    getThedata();
  }, [selectedCategory]);

  return (
    <>
      <MenNav />
      <ImageSlider w1={t1} />
      <Text className="categoryHeading">
        Home/T-Shirt -{productsList.length}items
        <select className="categoryInput" placeholder="Select Sorting Options">
          <option>Price-High to Low</option>
          <option>Price-Low to High</option>
          <option>A to Z</option>
        </select>
      </Text>

      {isPopoverOpen && (
        <Popover>
          <Button className="popoverbody">Product Add to wishlist</Button>
        </Popover>
      )}

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

          <Box display="flex">
            <input
              type="checkbox"
              className="categorySearchBoxInput"
              checked={selectedCategory === "Bewakoof®"}
              onChange={() => handleCategoryFilter("Bewakoof®")}
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
              checked={
                selectedCategory === "OFFICIAL RICK AND MORTY MERCHANDISE"
              }
              onChange={() =>
                handleCategoryFilter("OFFICIAL RICK AND MORTY MERCHANDISE")
              }
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
              checked={selectedCategory === "OFFICIAL DISNEY MERCHANDISE"}
              onChange={() =>
                handleCategoryFilter("OFFICIAL DISNEY MERCHANDISE")
              }
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
              checked={selectedCategory === "BEWAKOOF X STREETWEAR"}
              className="categorySearchBoxInput"
              onChange={() => handleCategoryFilter("BEWAKOOF X STREETWEAR")}
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
              checked={selectedCategory === "OFFICIAL NARUTO MERCHANDISE"}
              onChange={() =>
                handleCategoryFilter("OFFICIAL NARUTO MERCHANDISE")
              }
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
              checked={selectedCategory === "OFFICIAL MINIONS MERCHANDISE"}
              onChange={() =>
                handleCategoryFilter("OFFICIAL MINIONS MERCHANDISE")
              }
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
              checked={selectedCategory === "OFFICIAL HARRY POTTER MERCHANDISE"}
              onChange={() =>
                handleCategoryFilter("OFFICIAL HARRY POTTER MERCHANDISE")
              }
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
              checked={selectedCategory === "OFFICIAL DC COMICS MERCHANDISE"}
              onChange={() =>
                handleCategoryFilter("OFFICIAL DC COMICS MERCHANDISE")
              }
            />
            <label
              htmlFor="categorySearchBoxInput"
              className="categorySearchBoxText">
              DC COMICS MERCHANDISE
            </label>
          </Box>

          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            PRICE
          </Text>
          <Box display="flex">
            <input
              type="checkbox"
              className="categorySearchBoxInput"
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
          </Box>

          <Text className="bottomTexth2" marginLeft="20px" marginTop="60px">
            COLOR
          </Text>

          <Box display="flex">
            <input
              type="checkbox"
              className="categorySearchBoxInput"
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
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
              onChange={handleBewakoof}
            />
            <label
              htmlFor="categorySearchBoxInput"
              className="categorySearchBoxText">
              NAVY
            </label>
          </Box>
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {productsList.length > 0 &&
            productsList.map((item, index) => (
              <GridItem key={index} margin="0 0.6rem">
                <Box margin="0" padding="0">
                  {signinSuceess ? (
                    <>
                      {favourite[item._id] ? (
                        <>
                          <AiFillHeart
                            className="favIconadded"
                            onClick={() => {
                              toggleFavorite(item._id);
                              openPopover();
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <AiOutlineHeart
                            className="favIcon"
                            onClick={() => {
                              toggleFavorite(item._id);
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
