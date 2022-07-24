import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
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
  userLogin: { userinfoStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
