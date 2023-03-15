import { combineReducers } from "redux";
import { dataReducer } from "./reducer.js";

const reducers = combineReducers({
    allData: dataReducer,
})

export default reducers;