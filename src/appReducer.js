import actiontype from "./actiontype";

const initialState = {
  cart: [],
  wishlist: [],
  category: "",
  productsList: [],
  categoryData: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
      };

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
