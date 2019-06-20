import { combineReducers } from "redux";
import loginPageReducer from "./LoginPageReducer";

export default combineReducers({
  loginPageReducer: loginPageReducer
});
