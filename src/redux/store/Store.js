import { configureStore } from '@reduxjs/toolkit'
import loginreducer from "../slices/LoginSlices"
import regisreducer from '../slices/RegisterSlices'

export const store =configureStore({
    reducer:{
        login: loginreducer,
        pink: regisreducer,
    }
})
