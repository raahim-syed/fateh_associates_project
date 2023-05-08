import { createSlice } from "@reduxjs/toolkit";

const state = {
    candidateName: "",
    description: "",
    umbrella: "",
    issueDate: "",
    invoiceLink: "",
    paymentStatus: false
}

const createInvoiceSlice = createSlice({
    name: "invoice",
    initialState: state,
    reducers: {
        setInvoice: (state,{type, payload}) =>{
            state = {...payload};
        }
    }
})

export default createInvoiceSlice.reducer

export const {setInvoice} = createInvoiceSlice.actions
