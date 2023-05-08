import { createSlice } from "@reduxjs/toolkit";

const state = 
{
    name: "",
    dob: "",
    NIN_Number: "",
    currentAddress: "",
    phoneNumber: "",
    emailAddress: "",
    candidateAccountFormLink: "",
    umbrella: "",
    consultant: "",
    candidatePayRate: [
        {
        Day: "",
        Night: "",
        Sunday: ""
        }
    ],
    specialty: [""]
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

