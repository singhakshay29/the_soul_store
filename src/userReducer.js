import actiontype from "./actiontype";
const baseInitialState = {
  isLoggedIn: false,
  errorMessage: "",
  userData: {},
  token: "",
};

const initialUserDetails = localStorage.getItem("authorization");
const parsedData = initialUserDetails ? JSON.parse(initialUserDetails) : null;

const initialState = initialUserDetails
  ? {
      ...baseInitialState,
      isLoggedIn: true,
      userData:
        parsedData.signup.data.user === undefined
          ? parsedData.signup.data
          : parsedData.signup.data.user,
      token: JSON.parse(initialUserDetails).signup.token,
    }
  : baseInitialState;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.LOGOUT_USER:
      return { ...baseInitialState };

    case actiontype.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actiontype.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
