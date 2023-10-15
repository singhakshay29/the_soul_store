import actiontype from "./actiontype";

const baseInitialState = {
  cart: [],
  wishlist: [],
  productsList: [],
};
const initialUserData = localStorage.getItem("stock");

const initialState = initialUserData
  ? {
      ...baseInitialState,
      productsList: JSON.parse(initialUserData),
    }
  : baseInitialState;

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
    default:
      return state;
  }
};
export default appReducer;
