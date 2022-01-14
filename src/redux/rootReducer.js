// Which is to combine the reducers

import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer=combineReducers({
    data : userReducers   //data is the key for userReducers
})

export default rootReducer;