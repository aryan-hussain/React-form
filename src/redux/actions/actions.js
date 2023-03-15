import { ActionTypes } from '../constants/actions-types'

export const showData = (data) => {
    return{
        type : ActionTypes.SUBMIT,
        payload : data,
    };
};