import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";

const mystore = createStore(
  combineReducers({
    user: userReducer,
    app: appReducer,
  }),
  applyMiddleware(thunk)
);

export default mystore;
