import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({
  userReducer: userReducer,
  loginReducer: loginReducer,
});