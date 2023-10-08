import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./rootreducer";

const mystore = createStore(rootreducer, applyMiddleware(thunk));

export default mystore;
