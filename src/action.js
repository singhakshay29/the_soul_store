import Api from "./Api";
import actiontype from "./actiontype";

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

export const LOGIN_USER = (email, password) => {
  return async (dispatch) => {
    try {
      const url = Api.login;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "dm3s7h4e43m1",
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
          appType: "ecommerce",
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(response);
        localStorage.setItem(
          "userDeatils",
          JSON.stringify({
            signup: responseData,
          })
        );
        dispatch(LOGIN_SUCCESS(responseData));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        dispatch(LOGIN_FAILURE(errorData.errorMessage));
      }
    } catch (error) {
      console.error("An error occurred:", error);
      dispatch(LOGIN_FAILURE("An error occurred while logging in."));
    }
  };
};

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
          "userDeatils",
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
