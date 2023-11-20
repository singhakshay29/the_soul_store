import actiontype from "./actiontype";

const baseInitialState = {
  cart: [],
  active: "1",
  isOpen: false,
  message: "",
  wishlist: [],
  loading: true,
  productsList: [],
  productsListFilter: {},
};
const initialCartData = localStorage.getItem("cartItem");
const initialWishlistData = localStorage.getItem("wishlist");
let initialState;

if (initialCartData) {
  initialState = {
    ...baseInitialState,
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
    case actiontype.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case actiontype.OPEN_POPOVER:
      return {
        ...state,
        isOpen: true,
        message: action.payload,
      };
    case actiontype.CLOSE_POPOVER:
      return {
        ...state,
        message: "",
        isOpen: false,
      };
    case actiontype.LOADING_ACTION:
      return { ...state, loading: action.payload };
    case actiontype.SET_CART_FILTER:
      return {
        ...state,
        productsListFilter: action.payload,
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
    default:
      return state;
  }
};
export default appReducer;
