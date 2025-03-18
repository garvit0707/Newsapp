import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const LoginSlice=createSlice({
    initialState,
    name: "loginsetup",
    reducers:{
        logindata: (state,action)=>{
            state.value = action.payload
        },
    }
})

export const {logindata} = LoginSlice.actions
export default LoginSlice.reducer;
