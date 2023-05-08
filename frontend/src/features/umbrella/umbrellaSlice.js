import { createSlice } from "@reduxjs/toolkit";

const state = 
    {
        name: "",
        contactName: "",
        address: "",
        email: "",
        additionalEmailAddresses: [],
        phoneNumber: "",
        breakdownOfHours: "",
        invoices: []
    }


const umbrellaSlice = createSlice({
    name: "umbrella",
    initialState: state,
    reducers: {
        setUmbrellas: (state, {type, payload}) =>{
            state = {...payload}
        }
    }
})

export default umbrellaSlice.reducer

export const { setUmbrellas } = umbrellaSlice.actions

export const getUmbrellas = state => state