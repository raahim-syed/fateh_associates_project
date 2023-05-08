import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import authReducer from "../features/auth/authSlice"
import candidateReducer from "../features/candidates/candidatesSlice"
import specialityReducer from "../features/specialities/specialitySlice"
import umbrellaReducer from "../features/umbrella/umbrellaSlice"
import clientReducer from "../features/client/clientSlice"
import invoiceReducer from "../features/invoice/invoiceSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        candidate: candidateReducer,
        speciality: specialityReducer,
        umbrella: umbrellaReducer,
        client: clientReducer,
        invoice: invoiceReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true, 
})