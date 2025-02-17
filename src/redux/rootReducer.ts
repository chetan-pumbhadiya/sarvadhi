import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import searchReducer from "./slices/searchSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    search: searchReducer,
});

export default rootReducer;
