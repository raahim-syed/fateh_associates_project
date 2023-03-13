import { apiSlice } from "../../app/api/api";

const specialitiesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSpecialities: builder.query({
            query: () => ({url: "/dashboard/specialities"})
        }),
        addSpeciality: builder.mutation({
            query: (body) => ({
                url: "dashboard/specialities",
                method: "POST",
                body,
            })
        }),
        getSpecificSpeciality: builder.query({
            query: ({id}) => ({
                url: `dashboard/specialities/info/${id}`,
            })
        }),
        deleteSpeciality: builder.mutation({
            query: ({id}) => ({
                url: `dashboard/specialities/delete/${id}`,
                method: "DELETE",
            })
        }),
        updateSpeciality: builder.mutation({
            query: ({id, data}) => ({
                url: `dashboard/specialities/update/${id}`,
                method: "POST",
                body: data
            })
        }),
    })
})

// export the endpoints
export const {
    useGetSpecialitiesQuery,
    useAddSpecialityMutation,
    useGetSpecificSpecialityQuery,
    useDeleteSpecialityMutation,
    useUpdateSpecialityMutation
  } = specialitiesApiSlice;