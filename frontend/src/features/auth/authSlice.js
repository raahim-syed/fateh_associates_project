import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {user: null, token: null},
  //Functions that change the state and stores them
  reducers: {
    setCredentials: (state, {type, payload}) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token
    },
    logOut: (state, {type, payload}) => {
      state.user = null;
      state.token = null;
    }
  },
});

console.log(authSlice);

//Reducer Functions
export const { setCredentials, logOut } = authSlice.actions;

//Auth Reducers
export default authSlice.reducer;

//Selectors
export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;

