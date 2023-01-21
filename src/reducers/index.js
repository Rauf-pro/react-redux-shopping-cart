import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";


export default combineReducers({
      basketState: basketReducer
});