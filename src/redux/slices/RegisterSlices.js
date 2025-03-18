import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regis: null
}

export const registerSlice = createSlice({
    initialState,
    name: "registerdata",
    reducers: {
        registerData: (state, action) => {
            state.regis = action.payload
        },
    }
})

export const { registerData } = registerSlice.actions;
export default registerSlice.reducer;