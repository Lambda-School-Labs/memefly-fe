import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { memeReducer, uploadImageReducer } from "./memeReducer";

export default combineReducers({
    loginReducer,
    memeReducer,
    uploadImageReducer,
});