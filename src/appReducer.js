import actiontype from "./actiontype";

const baseInitialState = {
  cart: [],
  wishlist: [],
  productsList: [],
  menData: [],
  womenData: [],
};
const initialUserData = localStorage.getItem("stock");
const initialCartData = localStorage.getItem("cartItem");
const initialWishlistData = localStorage.getItem("wishlist");
let initialState;

if (initialUserData) {
  const parsedInitialUserData = JSON.parse(initialUserData);
  const stock = parsedInitialUserData.stock;
  initialState = {
    ...baseInitialState,
    productsList: stock,
    menData: stock.filter((item) => item.gender === "Men"),
    womenData: stock.filter((item) => item.gender === "Women"),
    cart: initialCartData ? JSON.parse(initialCartData).cartItem : [],
    wishlist: initialWishlistData
      ? JSON.parse(initialWishlistData).wishlist
      : [],
  };
} else {
  initialState = baseInitialState;
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.SET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };
    case actiontype.SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case actiontype.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actiontype.MEN_DATA:
      return {
        ...state,
        menData: action.payload,
      };
    case actiontype.WOMEN_DATA:
      return {
        ...state,
        womenData: action.payload,
      };
    default:
      return state;
  }
};
export default appReducer;
