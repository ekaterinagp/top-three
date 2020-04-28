import { combineReducers } from "redux";
import auth_users from "./auth_reducers";
import errors from "./error_reducers";

const rootReducers = combineReducers({ auth_users, errors });

export default rootReducers;
