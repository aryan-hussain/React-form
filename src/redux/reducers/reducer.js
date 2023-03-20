import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     location: ['Bangalore', 'Hyderabad', 'Delhi'],
// };

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        dataReducer: (state, payload) => {
            console.log("payload", payload)
            state.users = [...state.users];
            state.users.push(payload.payload);
        }

    },
});

const { actions, reducer } = userSlice
export const { dataReducer } = actions;

export default reducer;



// import { createSlice } from '@reduxjs/toolkit';
// const locationSlice = createSlice({
//     name: "location",
//     initialState: {
//         location: ['Bangalore', 'Hyderabad', 'Delhi'],
//     },
//     reducers: {
//         save: (state, param) => {
//             console.log(param.payload)
//             state.location.push(param.payload);
//         },
//     }
// });
// const { actions, reducer } = locationSlice
// export const { save } = actions;
// export default reducer;