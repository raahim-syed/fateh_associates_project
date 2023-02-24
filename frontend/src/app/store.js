import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import authReducer from "../features/auth/authSlice"
import candidateReducer from "../features/candidates/candidatesSlice"


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        candidate: candidateReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true, 
})
console.log(store)