import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LOGOUT_USER, OPEN_POPOVER } from "../action";
import { useDispatch, useSelector } from "react-redux";
import {
  service,
  isNamePresent,
  searchFetchData,
  fetchDataByType,
} from "../service";
import Dropbox from "./Dropbox";

export default function Nav() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [activeState, setActive] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(null);
  const [isDropdown, setIsDropDown] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { results } = useSelector((state) => state.app.cart);
  const [searchResults, setSearchResults] = useState("");
  const { wishlist, productsListFilter, active } = useSelector(
    (state) => state.app
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
  const { productMenCollection, productWomenCollection } = productsListFilter;
  const handleMouseEnter = (dropdown) => {
    setIsDropDownOpen(dropdown);
  };
  const handleMouseLeave = () => {
    setIsDropDownOpen(null);
  };

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const handleSearchInputChange = (event) => {
    const newValue = event.target.value;
    setSearchItem(newValue);
  };
  const handleSearchClick = async () => {
    const searchData = await fetchDataByType(searchItem);
    if (typeof searchData === "string") {
      const searchData = await fetchDataByType("Women");
      const data = service(searchData);
      navigation("/category", {
        state: {
          data: data,
          Heading: `Search Results for ${searchItem}`,
          errorHeading: `We couldn't find any matches!`,
        },
      });
    }
    if (searchData.length > 0) {
      const data = service(searchData);

      navigation("/category", {
        state: {
          data: data,
          Heading: `Search Results for ${searchItem}`,
        },
      });
    }
  };

  async function handleItemClick(event) {
    const clickedItem = event.target.textContent;
    let storeData = [];
    if (active === "1") {
      storeData = productWomenCollection;
    } else if (active === "2") {
      storeData = productMenCollection;
    }
    const { uniqueBrands, uniqueSubCategory } = storeData;
    let data = [];
    if (uniqueBrands.includes(clickedItem)) {
      data = await searchFetchData("brand", clickedItem);
    } else if (uniqueSubCategory.includes(clickedItem)) {
      data = await searchFetchData("subCategory", clickedItem);
    }
    if (data.length > 0) {
      const searchdata = service(data);
      navigation("/category", {
        state: {
          data: searchdata,
          Heading: "Search Results for",
        },
      });
    }
  }

  useEffect(() => {
    const delay = 500;
    const timer = setTimeout(() => {
      if (searchItem !== "") {
        let storeData = [];
        if (active === "1") {
          storeData = productWomenCollection;
        } else if (active === "2") {
          storeData = productMenCollection;
        }
        const value = isNamePresent(storeData, searchItem);
        setSearchResults(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [searchItem, productMenCollection, productWomenCollection, active]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!isSmallScreen && (
        <>
          <Flex
            justifyContent="space-between"
            className={scrollY > 43 ? "navbar navbarscrolled" : "navbar"}>
            <Dropbox
              active={active}
              scrollY={scrollY}
              isDropdownOpen={isDropdownOpen}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              productsListFilter={productsListFilter}
            />
            <Box minWidth="200px" display="flex">
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "17px",
                  width: "22px",
                }}>
                {isDropdownOpen !== "Search" && (
                  <>
                    <FaSearch
                      onMouseEnter={() => handleMouseEnter("Search")}
                      onMouseLeave={() => handleMouseLeave()}
                      onClick={() => handleSearchClick()}
                      style={{
                        fontSize: "22px",
                        color: "grey",
                      }}
                    />
                  </>
                )}
              </Box>
              {isDropdownOpen === "Search" && (
                <Box
                  onMouseEnter={() => handleMouseEnter("Search")}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    setIsDropDown(false);
                  }}
                  className="navSearchbox">
                  <Flex className="searchNavInput">
                    <input
                      placeholder="What are you looking for ?"
                      value={searchItem}
                      onChange={handleSearchInputChange}
                      onClick={() => setIsDropDown(true)}
                      style={{
                        width: "9.8rem",
                        border: "none",
                        outline: "none",
                        backgroundColor: "#efeff1",
                      }}></input>
                    <FaSearch
                      onClick={() => handleSearchClick()}
                      style={{
                        fontSize: "22px",
                        color: "grey",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              )}
              {isDropdown && (
                <Box
                  onMouseEnter={() => {
                    handleMouseEnter("Search");
                    setIsDropDown(true);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    setIsDropDown(false);
                  }}>
                  {searchResults.length > 0 && (
                    <Flex className="showSuggestion" onClick={handleItemClick}>
                      {searchResults.map((item, index) => (
                        <Flex className="showSuggestionText" key={index}>
                          {item}
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </Box>
              )}
              {isLoggedIn ? (
                <>
                  <Link
                    to="/order"
                    style={{
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                    onMouseEnter={() => handleMouseEnter("User")}
                    onMouseLeave={() => handleMouseLeave()}>
                    <FaRegUser
                      className={
                        activeState === "1"
                          ? "activeIcon navbuttonicon"
                          : "navbuttonicon"
                      }
                      id={"1"}
                      onClick={handleClick}
                      onMouseEnter={() => handleMouseEnter("User")}
                    />
                  </Link>

                  {isDropdownOpen === "User" && (
                    <Box
                      onMouseEnter={() => handleMouseEnter("User")}
                      onMouseLeave={() => handleMouseLeave()}
                      className="navdropbox uPT">
                      <Link to="/order" style={{ textDecoration: "none" }}>
                        <Text className="navdropboxh1 mT10"> Orders</Text>
                      </Link>
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <Text className="navdropboxh1"> Profile</Text>
                      </Link>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Text
                          onClick={() => {
                            dispatch(LOGOUT_USER());
                            dispatch(OPEN_POPOVER("Succesfully Logout"));
                          }}
                          className="navdropboxh1">
                          Log Out
                        </Text>
                      </Link>
                    </Box>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                    onMouseEnter={() => handleMouseEnter("User")}
                    onMouseLeave={() => handleMouseLeave()}>
                    <FaRegUser
                      className={
                        activeState === "1"
                          ? "activeIcon navbuttonicon"
                          : "navbuttonicon"
                      }
                      id={"1"}
                      onClick={handleClick}
                      onMouseEnter={() => handleMouseEnter("User")}
                    />
                  </Link>
                </>
              )}

              <Link to="/wishlist">
                {isLoggedIn && (
                  <>
                    {wishlist?.length > 0 && (
                      <Text className="length">{wishlist?.length}</Text>
                    )}
                  </>
                )}
                <AiOutlineHeart
                  className={
                    activeState === "2"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"2"}
                  onClick={handleClick}
                />
              </Link>
              <Link to="/shoppingcart">
                {isLoggedIn && (
                  <>
                    {results > 0 && (
                      <Text className="cartLength">{results}</Text>
                    )}
                  </>
                )}
                <BsHandbag
                  className={
                    activeState === "3"
                      ? "activeIcon navbuttonicon"
                      : "navbuttonicon"
                  }
                  id={"3"}
                  onClick={handleClick}
                />
              </Link>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
}
