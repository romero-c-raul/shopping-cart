import { combineReducers } from "redux";
import products from "./products";
import cartContents from "./cartContents";

const rootReducer = combineReducers({ products, cartContents });

export default rootReducer;
