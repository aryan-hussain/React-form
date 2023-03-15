import { ActionTypes } from "../constants/actions-types";

const initialState = {
    data : {},
}

export const dataReducer = (state = initialState, { type, payload}) => {
    switch (type ) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, data:payload};
        default:
            return state;
    }
}