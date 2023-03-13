import { createSlice } from "@reduxjs/toolkit";

const state = {
    name: null,
    address: null,
    email: null,
    phoneNumber: null,
    additionalEmails: [],
}

const clientSlice = createSlice({
    name: "client",
    initialState: state,
    reducers: {
        setClient(state, {type, payload}){
            state = {...payload};
        }
    }
})

export default clientSlice.reducer

export const { setClient } = clientSlice.actions