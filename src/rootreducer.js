import actiontype from "./actiontype";

const baseInitialState = {
  isLoggedIn: false,
  errorMessage: "",
  userData: {},
  loading: false,
  token: "",
};

const initialUserDetails = localStorage.getItem("userDeatils");

const initialState = initialUserDetails
  ? {
      ...baseInitialState,
      isLoggedIn: true,
      errorMessage: "",
      userData: JSON.parse(initialUserDetails).signup.data.user,
      token: JSON.parse(initialUserDetails).signup.token,
    }
  : baseInitialState;

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.LOGIN_SUCCESS:
      console.log("State after LOGIN_SUCCESS:", action);
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true,
        errorMessage: "",
      };
    case actiontype.SIGNUP_USER:
      console.log("State after LOGIN_SUCCESS:", action);
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true,
        errorMessage: "",
      };
    case actiontype.LOGIN_FAILURE:
      console.log(actiontype.LOGIN_FAILURE);
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actiontype.LOADING_ACTION:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default rootreducer;
