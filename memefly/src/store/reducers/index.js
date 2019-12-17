import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { memeReducer } from "./memeReducer";

export default combineReducers({
    loginReducer,
    memeReducer,

});