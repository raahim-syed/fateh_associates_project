import { apiSlice } from "../../app/api/api";


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: "/login",
        method: "POST",
        body: {...credentials}
      })
    }),

  })
})

//Exporting Hooks
export const { useLoginMutation } = authApiSlice;







// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { setToken } from "./authSlice";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post("/api/login", credentials);
//       const { token, user } = response.data;
//       thunkAPI.dispatch(setToken(token));
//       return user;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
