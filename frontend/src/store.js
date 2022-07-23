import {
  applyMiddleware,
  combineReducers,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer, userRegisterReducer } from "./reducers/userReducer";

const userinfoStorage = localStorage.getItem("userinfo")
  ? JSON.parse(localStorage.getItem("userinfo"))
  : null;

const reducer = combineReducers({
  userLogin: userReducer,
  userRegister: userRegisterReducer,
});

const initialState = {
  userLogin: { userinfo: userinfoStorage },
};

const middleware = [thunk];
const store = configureStore({
  reducer,
  initialState,
})

export default store;
