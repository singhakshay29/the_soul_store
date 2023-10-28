import actiontype from "./actiontype";
import {
  addCart,
  loginUser,
  productList,
  removeCart,
  signup,
  addWishlist,
  removeWishlist,
  getWishlist,
  getCart,
} from "./fetch";

export const LOGIN_SUCCESS = (payload) => ({
  type: actiontype.LOGIN_SUCCESS,
  payload: payload,
});

export const LOGIN_FAILURE = (payload) => ({
  type: actiontype.LOGIN_FAILURE,
  payload: payload,
});

export const LOADING_ACTION = (payload) => {
  return {
    type: actiontype.LOADING,
    payload: payload,
  };
};

export const LOGOUT_USER = (payload) => {
  localStorage.removeItem("userDetails");
  localStorage.removeItem("cartItem");
  localStorage.removeItem("wishlist");

  return {
    type: actiontype.LOGOUT_USER,
    payload: payload,
  };
};

export const SET_PRODUCTS = (payload) => ({
  type: actiontype.SET_PRODUCTS,
  payload: payload,
});

export const SET_CART_FILTER = (payload) => ({
  type: actiontype.SET_CART_FILTER,
  payload: payload,
});

export const SET_CART = (payload) => ({
  type: actiontype.SET_CART,
  payload: payload,
});

export const ADD_TO_CART = (productId, qty) => {
  return async (dispatch) => {
    const response = await addCart(productId, qty);
    console.log(response, "addCart");
    dispatch(GET_CART());
  };
};

export const REMOVE_FROM_CART = (productId, qty) => {
  return async (dispatch) => {
    const response = await removeCart(productId, qty);
    console.log(response, "removed Cart");
    dispatch(GET_CART());
  };
};

export const GET_CART = () => {
  return async (dispatch) => {
    const data = await getCart();
    if (data) {
      dispatch(SET_CART(data));
    }
  };
};
export const FETCH_PRODUCTS = () => {
  return async (dispatch) => {
    const parsedData = await productList();
    const { products, productItemData } = parsedData;
    dispatch(SET_PRODUCTS(products));
    dispatch(SET_CART_FILTER(productItemData));
  };
};

export const LOGIN_USER = (email, password) => {
  return async (dispatch) => {
    const response = await loginUser(email, password);
    try {
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem(
          "userDetails",
          JSON.stringify({
            signup: responseData,
          })
        );
        dispatch(LOGIN_SUCCESS(responseData));
      } else {
        const errorData = await response.json();
        dispatch(LOGIN_FAILURE(errorData.errorMessage));
      }
    } catch (error) {
      dispatch(LOGIN_FAILURE("Incorrect EmailId or Password"));
    }
  };
};
export const SIGNUP_USER = (username, email, password) => {
  return async (dispatch) => {
    try {
      const response = await signup(username, email, password);
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem(
          "userDetails",
          JSON.stringify({
            signup: responseData,
          })
        );
        dispatch(LOGIN_SUCCESS(responseData));
      } else {
        const errorData = await response.json();
        dispatch(LOGIN_FAILURE(errorData.errorMessage));
      }
    } catch (error) {
      dispatch(LOGIN_FAILURE("Incorrect EmailId or Password"));
    }
  };
};

export const SET_WISHLIST = (payload) => ({
  type: actiontype.SET_WISHLIST,
  payload: payload,
});

export const GET_WISHLIST = () => {
  return async (dispatch) => {
    const databox = await getWishlist();
    dispatch(SET_WISHLIST(databox?.items));
  };
};

export const ADD_TO_WISHLIST = (productId) => {
  return async (dispatch) => {
    const response = await addWishlist(productId);
    console.log("added to cart", response);
    dispatch(GET_WISHLIST());
  };
};
export const REMOVE_FROM_WISHLIST = (productId) => {
  return async (dispatch) => {
    const response = await removeWishlist(productId);
    console.log(response);
    dispatch(GET_WISHLIST());
  };
};
