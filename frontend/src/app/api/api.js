import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/*
    Base Query:
    The first part of the URL and the most common headers are set here
*/
export const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    //To Get Cookie
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if(token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        // headers.set("Content-type:", "application/json");
        return headers;
    }
})

export const apiSlice = createApi({
    endpoints: builder => ({}),
    baseQuery,
})

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if(result){
        
//     }
// }