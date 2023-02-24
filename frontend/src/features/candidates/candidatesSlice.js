import { createSlice } from "@reduxjs/toolkit";

const state = {
    name: null,
    email: null,
}

const candidateSlice = createSlice({
    name: "candidate",
    initialState: state,
    reducers: {
        setCandidateData: (state, {type, payload}) => {
            const { name, email }  = payload;
            state.name = name;
            state.email = email;
        } 
    }
})

export const { setCandidateData } = candidateSlice.actions;

//Exporting The Reduce
export default candidateSlice.reducer;

export const getCandidateData = (state) => state.candidate;
