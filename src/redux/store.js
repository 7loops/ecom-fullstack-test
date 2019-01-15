import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "../reducers/productReducer";

export default () =>
  createStore(
    combineReducers({
      productReducer
    }),
    applyMiddleware(thunk)
  );
