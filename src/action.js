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
}); //

export const LOGIN_FAILURE = (payload) => ({
  type: actiontype.LOGIN_FAILURE,
  payload: payload,
}); //

export const LOADING_ACTION = (payload) => {
  return {
    type: actiontype.LOADING,
    payload: payload,
  };
}; //

export const LOGOUT_USER = () => ({
  type: actiontype.LOGOUT_USER,
}); //

export const SET_PRODUCTS = (payload) => ({
  type: actiontype.SET_PRODUCTS,
  payload: payload,
});

export const SET_CART = (payload) => ({
  type: actiontype.SET_CART,
  payload: payload,
});

export const ADD_TO_CART = (productId, qty) => {
  return async (dispatch) => {
    const data = await addCart(productId, qty);
    dispatch(SET_CART(data));
  };
};

export const REMOVE_FROM_CART = (productId) => {
  return async (dispatch) => {
    const data = removeCart(productId);
    dispatch(SET_CART(data));
  };
};

export const GET_CART = () => {
  return async (dispatch) => {
    const data = await getCart();
    console.log(data);
    dispatch(SET_CART(data));
  };
};
export const FETCH_PRODUCTS = () => {
  return async (dispatch) => {
    const storedproducts = localStorage.getItem("stock");
    if (storedproducts) {
      const parsedData = JSON.parse(storedproducts);
      dispatch(SET_PRODUCTS(parsedData.stock));
    } else {
      const products = await productList();
      dispatch(SET_PRODUCTS(products));
    }
  };
};

export const LOGIN_USER = (email, password) => {
  return async (dispatch) => {
    const response = await loginUser(email, password);
    console.log(response);
    try {
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
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
    const data = await addWishlist(productId);
    dispatch(SET_CART(data));
  };
};
export const REMOVE_FROM_WISHLIST = (productId) => {
  return async (dispatch) => {
    const data = removeWishlist(productId);
    dispatch(SET_CART(data));
  };
};
