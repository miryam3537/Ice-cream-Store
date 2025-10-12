// import { createSlice } from "@reduxjs/toolkit"
// const initVal = {
//         name: "",
// }
// const loginSlice = createSlice({
//     name: "userName",
//     initialState: initVal,
//     reducers: {
//         change: (state, action) => {
//             state.name = action.payload.name
//             return state
//         }
//     }
// })
// export const { change } = loginSlice.actions
// export default loginSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initVal = {
    name: "",
};

const loginSlice = createSlice({
    name: "userName",
    initialState: initVal,
    reducers: {
        change: (state, action) => {
            state.name = action.payload.name; // Update the name in the state
        },
    },
});

export const { change } = loginSlice.actions;
export default loginSlice.reducer;