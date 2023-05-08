import { createSlice } from "@reduxjs/toolkit";

const state = {
    name: '',
    description: '',
    payRate: {
      Day: 0,
      Night: 0,
      Sunday: 0,
    }
  };

const createSpecialitiesSlice = createSlice({
    name: "speciality",
    initialState: state,
    reducers: {
        setSpeciality: (state, {type, payload}) => {
            state = {...payload};
        },
    }
})

export default createSpecialitiesSlice.reducer

export const {setSpeciality} = createSpecialitiesSlice.actions;


