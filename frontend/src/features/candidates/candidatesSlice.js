import { createSlice } from "@reduxjs/toolkit";

const state = {
    name: null
}

const candidateSlice = createSlice({
    name: "candidate",
    initialState: state,
    reducers: {
        setCandidateData: (state, {type, payload}) => {
            state.name = payload.name
        } 
    }
})

export const { setCandidateData } = candidateSlice.actions;

//Exporting The Reduce
export default candidateSlice.reducer;

