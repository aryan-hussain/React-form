import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers/index';

export default configureStore({
    reducer: reducer
}

)


