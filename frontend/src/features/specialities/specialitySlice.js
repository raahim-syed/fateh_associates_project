import { createSlice } from "@reduxjs/toolkit";

const state = {
    id: null,
    name: null,
    chargeRate: null,
    payRate: null,
}

const createSpecialitiesSlice = createSlice({
    name: "specialities",
    initialState: state,
    reducers: {
        setSpecialities: (state, {type, payload}) => {
            state = {...payload};
        },
    }
})

export default createSpecialitiesSlice.reducer

export const {setSpecialities} = createSpecialitiesSlice.actions;

export const getSpecialities = (state) => state.specialities;

