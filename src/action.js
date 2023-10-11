import Api from "./Api";
import actiontype from "./actiontype";
import { addCart, loginUser, productList, removeCart } from "./fetch";

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

export const LOGOUT_USER = () => ({
  type: actiontype.LOGOUT_USER,
});

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

// export const GET_CART = ()=>{}
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

export const CATEGORY_DATA = (payload) => ({
  type: actiontype.CATEGORY_DATA,
  payload: payload,
});

export const CATEGORY_FILTER1 = (category, productsList) => {
  return (dispatch) => {
    const filteredProducts = productsList.filter((item) => {
      return item.brand === category;
    });
    dispatch(CATEGORY_DATA(filteredProducts));
  };
};

export const CATEGORY_FILTER2 = (category, productsList) => {
  return (dispatch) => {
    const filteredProducts = productsList.filter((item) => {
      return item.color === category;
    });
    dispatch(CATEGORY_DATA(filteredProducts));
  };
};

export const LOGIN_USER = (email, password) => {
  return async (dispatch) => {
    const response = loginUser(email, password);
    try {
      if (response.ok) {
        const responseData = await response.json();
        dispatch(LOGIN_SUCCESS(responseData));
        localStorage.setItem(
          "userDetails",
          JSON.stringify({
            signup: responseData,
          })
        );
      } else {
        const errorData = await response.json();
        dispatch(LOGIN_FAILURE(errorData.errorMessage));
      }
    } catch (error) {
      dispatch(LOGIN_FAILURE("An error occurred while logging in."));
    }
  };
};
// try {
//   const url = Api.login;
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       projectId: "dm3s7h4e43m1",
//     },
//     body: JSON.stringify({
//       email: `${email}`,
//       password: `${password}`,
//       appType: "ecommerce",
//     }),
//   });
//   if (response.ok) {
//     const responseData = await response.json();
//     console.log(response);
//     localStorage.setItem(
//       "userDetails",
//       JSON.stringify({
//         signup: responseData,
//       })
//     );
//     dispatch(LOGIN_SUCCESS(responseData));
//   } else {
//     const errorData = await response.json();
//
//   }
// } catch (error) {
//   console.error("An error occurred:", error);
//   ;
// }

export const SIGNUP_USER = (username, email, password) => {
  return async (dispatch) => {
    try {
      const url = Api.signup;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "dm3s7h4e43m1",
        },
        body: JSON.stringify({
          name: `${username}`,
          email: `${email}`,
          password: `${password}`,
          appType: "ecommerce",
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(response);
        localStorage.setItem(
          "userDetails",
          JSON.stringify({
            signup: responseData,
          })
        );
        dispatch(LOGIN_SUCCESS(responseData));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        dispatch(LOGIN_FAILURE("Invalid Data"));
      }
    } catch (error) {
      console.error("An error occurred:", error);
      dispatch(LOGIN_FAILURE("An error occurred while logging in."));
    }
  };
};

export const SET_WISHLIST = (payload) => ({
  type: actiontype.SET_WISHLIST,
  payload: payload,
});

export const GET_WISHLIST = () => {
  return async (dispatch) => {
    const user = localStorage.getItem("userDetails");
    if (user) {
      const parsedData = JSON.parse(user);
      try {
        const baseUrl = Api.wishlist;
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectid: "dm3s7h4e43m1",
          },
        });
        const data = await response.json();
        console.log(data);
        const databox = data.data;
        dispatch(SET_WISHLIST(databox?.items));
      } catch (error) {
        console.error("Something went wrong");
      }
    }
  };
};

export const ADD_TO_WISHLIST = (productId) => {
  return async (dispatch) => {
    const user = localStorage.getItem("userDetails");
    if (user) {
      const parsedData = JSON.parse(user);
      try {
        const baseUrl = Api.wishlist;
        const response = await fetch(baseUrl, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectId: "dm3s7h4e43m1",
          },
          body: JSON.stringify({ productId: productId }),
        });
        console.log(response);
        GET_WISHLIST();
      } catch (error) {
        console.error("Somethings went wrong");
      }
    }
    dispatch(GET_WISHLIST());
  };
};

export const REMOVE_FROM_WISHLIST = (productId) => {
  return async (dispatch) => {
    const user = localStorage.getItem("userDetails");
    if (user) {
      const parsedData = JSON.parse(user);
      try {
        const baseApi = Api.wishlist + productId;
        await fetch(baseApi, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectId: "dm3s7h4e43m1",
          },
        });
        dispatch(GET_WISHLIST());
      } catch (error) {
        console.error("Something went wrong");
      }
    }
  };
};
