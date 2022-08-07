import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    bookReducer,
    user : userReducer
});

export default rootReducer