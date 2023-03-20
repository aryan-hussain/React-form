import { ActionTypes } from '../constants/actions-types'

export const showData = (data) => {
    console.log("data", data)
    return {
        type: ActionTypes.SUBMIT,
        payload: data,
    };
};