import { combineReducers } from "redux";
import {GetProductsReducer} from "./GetProductsReducer";

export default combineReducers({
  allProducts : GetProductsReducer,
})