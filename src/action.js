import actiontype from "./actiontype";
import {
  signup,
  addCart,
  getCart,
  loginUser,
  removeCart,
  productList,
  getWishlist,
  addWishlist,
  removeWishlist,
} from "./fetch";

export const LOGIN_SUCCESS = (payload) => ({
  type: actiontype.LOGIN_SUCCESS,
  payload: payload,
});

export const SET_ACTIVE = (payload) => {
  return {
    type: actiontype.SET_ACTIVE,
    payload: payload,
  };
};

export const OPEN_POPOVER = (payload) => ({
  type: actiontype.OPEN_POPOVER,
  payload: payload,
});

export const CLOSE_POPOVER = () => ({
  type: actiontype.CLOSE_POPOVER,
});

export const LOGIN_FAILURE = (payload) => ({
  type: actiontype.LOGIN_FAILURE,
  payload: payload,
});

export const LOADING_ACTION = (payload) => {
  return {
    type: actiontype.LOADING_ACTION,
    payload: payload,
  };
};

export const LOGOUT_USER = (payload) => {
  localStorage.removeItem("authorization");
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
    if (parsedData) {
      const { products, productItemData } = parsedData;
      dispatch(SET_PRODUCTS(products));
      dispatch(SET_CART_FILTER(productItemData));
    }
  };
};

export const LOGIN_USER = (email, password) => {
  return async (dispatch) => {
    const response = await loginUser(email, password);
    if (response) {
      console.log(response);
      let data = response.data;
      console.log(data);
      dispatch(LOGIN_SUCCESS(data));
    } else {
      dispatch(LOGIN_FAILURE("Incorrect EmailId or Password"));
    }
  };
};
export const SIGNUP_USER = (username, email, password) => {
  return async (dispatch) => {
    const response = await signup(username, email, password);
    if (response) {
      let data = response.data.user;
      dispatch(LOGIN_SUCCESS(data));
    } else {
      dispatch(LOGIN_FAILURE("Login Failed"));
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
