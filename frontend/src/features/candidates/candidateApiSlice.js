import { apiSlice } from "../../app/api/api";


const candidateApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
            getCandidates: builder.query({
                query: () => ({
                    url: "/dashboard/candidate"
                }),
            addCandidate: builder.mutation({
                    query: (body) => ({
                        url: "/dashboard/cadidate",
                        method: "POST",
                        body,
                    })
                }),
            getSpecificCandidate: builder.query({
                    query: ({id}) => ({
                        url: `/dashboard/candidate/info/${id}`,
                    })
                }),
            deleteCandidate: builder.mutation({
                query: ({id}) => ({
                    url: `/dashboard/candidate/info/${id}`,
                    method: "DELETE"
                })
            }),
            updateCandidate: builder.mutation({
                query: ({id, data}) => ({
                    url: `/dashboard/candidate/info`,
                    method: "PUT",
                    body: data
                })
            })
        }),
    })
})

export const { 
    useGetCandidatesQuery, 
    useAddCandidateMutation, 
    useDeleteCandidateMutation, 
    useUpdateCandidateMutation, 
    useGetSpecificCandidateQuery 
} = candidateApiSlice;