import { apiSlice } from "../../app/api/api";


const candidateApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
            getCandidates: builder.query({
                query: () => ({
                    url: "/dashboard/candidates"
                }),
            addCandidate: builder.mutation({
                    query: (body) => ({
                        url: "/dashboard/cadidates",
                        method: "POST",
                        body,
                    })
                }),
            getSpecificCandidate: builder.query({
                    query: ({id}) => ({
                        url: `/dashboard/info/${id}`,
                    })
                }),
            deleteCandidate: builder.mutation({
                query: ({id}) => ({
                    url: `/dashboard/info/${id}`,
                    method: "DELETE"
                })
            }),
            updateCandidate: builder.mutation({
                query: ({id, data}) => ({
                    url: `/dashboard/info`,
                    method: "PUT",
                    body: data
                })
            })
        }),
    })
})

export default candidateApiSlice;