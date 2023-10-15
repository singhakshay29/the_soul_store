import actiontype from "./actiontype";
const baseInitialState = {
  isLoggedIn: false,
  errorMessage: "",
  userData: {},
  loading: false,
  token: "",
};

const initialUserDetails = localStorage.getItem("userDetails");

const initialState = initialUserDetails
  ? {
      ...baseInitialState,
      isLoggedIn: true,
      userData: JSON.parse(initialUserDetails).signup.data,
      token: JSON.parse(initialUserDetails).signup.token,
    }
  : baseInitialState;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.LOGOUT_USER:
      return { ...baseInitialState };

    case actiontype.LOADING_ACTION:
      return { ...state, loading: action.payload };

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
