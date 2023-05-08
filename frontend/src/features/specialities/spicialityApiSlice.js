import { apiSlice } from "../../app/api/api";

const specialitiesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSpecialities: builder.query({
            query: () => ({url: "/dashboard/speciality"})
        }),
        addSpeciality: builder.mutation({
            query: (body) => ({
                url: "dashboard/speciality",
                method: "POST",
                body,
            })
        }),
        getSpecificSpeciality: builder.query({
            query: ({id}) => ({
                url: `dashboard/speciality/info/${id}`,
            })
        }),
        deleteSpeciality: builder.mutation({
            query: ({id}) => ({
                url: `dashboard/speciality/delete/${id}`,
                method: "DELETE",
            })
        }),
        updateSpeciality: builder.mutation({
            query: ({id, data}) => ({
                url: `dashboard/speciality/update/${id}`,
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